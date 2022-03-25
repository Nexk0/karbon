import User from '../../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import Questions from '../../models/questions.js'

// Class to login an user
  class GetBaseQuestion {
    constructor(request, response) {
        this.user = request.user
        this.response = response
    }
    
    // Method to login an user
    async getBaseQuestion() {
        // invalid token - synchronous
        try {
            const questions = await Questions.findAll();
            this.response.status(200).json({ questions: questions })
        } catch(err){
            this.response.status(401).json({ err })
        }
    }
}

export default GetBaseQuestion;