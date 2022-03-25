import bcrypt from 'bcrypt'
import express from 'express'
import Answers from '../../models/answers.js'

// Class to register an user
class AddAnswer {
    constructor(request, response) {
        this.questionId = request.body.questionId
        this.answerNumber = request.body.answerNumber 
        this.answerPoint = request.body.answerPoint 
        this.answerCo2e = request.body.answerCo2e
        this.response = response
    }
    
    // Method to register an user
    async addAnswer() {
        // Create a new user
        try {
            const questions = await Answers.create({ 
                questionId:this.questionId,
                answerNumber:this.answerNumber,
                answerPoint:this.answerPoint,
                answerCo2e:this.answerCo2e,
            })
            this.response.status(200).json({questions,"msg":"answer created"});
        } catch(err) {
            console.log(err)
            this.response.status(401).json({"msg":"Couldnt create answer", err});
        }
    }
}

export default AddAnswer;