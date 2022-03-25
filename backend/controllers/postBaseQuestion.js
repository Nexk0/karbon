import express from 'express'
import Answers from '../../models/answers.js'
import Questions from '../../models/questions.js'
import User from '../../models/user.js'
import UserAnswers from '../../models/userAnswers.js'

// Class to register an user
class PostBaseQuestion {
    constructor(request, response) {
        this.user = request.user.id
        this.userAnswers = request.body.userAnswers
        this.response = response
    }
    
    // Method to register an user
    async postBaseQuestion() {
        const HasAlreadyRespondedToBaseQuestion = await User.findOne({
            where : {
                id:this.user
            }
        })

        // Still working on the verification before processing
        // if (JSON.stringify(HasAlreadyRespondedToBaseQuestion.hasRespondedToBaseQuestion) == true) {
        //     this.response.status(401).json({ "msg" : "You can't redo the form this way" })
        //     return
        // } 
        let totalScore = 0
        for (let userAnswer in this.userAnswers ) {
            try{
                const questionId = await Questions.findOne({
                    where : {
                        questionId:parseInt(this.userAnswers[userAnswer].questionsId),
                    }  
                })
                const answerId = await Answers.findOne({ 
                    where : {
                        answerNumber:parseInt(this.userAnswers[userAnswer].answerId),
                        questionId:JSON.stringify(questionId.id)
                    }
                });
                const userAndswerPush = await UserAnswers.create({ 
                    userId:this.user,
                    answerId:JSON.stringify(answerId.id),
                })
                
            } catch(err) {
                console.log(err)
            }

        }
        const allUserAndswers = await UserAnswers.findAll({
            where : {
                userId:this.user
            }
        });
        for (let x in allUserAndswers) {
            const getScoreFromQuestion = await Answers.findAll({
                where : {
                    id:JSON.stringify(allUserAndswers[x].answerId)
                }
            }); 
            for (let i in getScoreFromQuestion){
                totalScore += (parseInt(JSON.stringify(getScoreFromQuestion[i].answerPoint)))
            }
        

        }
        const modifyUser = await User.update(
        {
            score : totalScore,
            hasRespondedToBaseQuestion : true,
        },
        {
            where: {
                id:this.user
            }
        }
        );
        this.response.status(200).json({"msg:" : "Form Complete"})
        return
    }
}

export default PostBaseQuestion;