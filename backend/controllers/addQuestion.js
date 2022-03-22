import Questions from '../../models/questions.js'
import bcrypt from 'bcrypt'
import express from 'express'

// Class to register an user
class AddQuestion {
    constructor(request, response) {
        this.questionId = request.body.questionId
        this.scoreAdd = request.body.scoreAdd 
        this.co2e = request.body.co2e 
        this.avrCo2e = request.body.avrCo2e
        this.response = response
    }
    
    // Method to register an user
    async addQuestion() {
        // Create a new user
        try {
            const questions = await Questions.create({ 
                questionId:this.questionId,
                scoreAdd:this.scoreAdd,
                co2e:this.co2e,
                avrCo2e:this.avrCo2e,
            })
            this.response.status(200).json({questions,"msg":"question created"});
        } catch(err) {
            console.log(err)
            this.response.status(401).json({"msg":"Couldnt create account", err});
        }
    }
}

export default AddQuestion;