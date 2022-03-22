import User from '../../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

// Class to login an user
  class Dashboard {
    constructor(request, response) {
        this.user = request.user
        this.response = response
    }
    
    // Method to login an user
    async dashboard() {
        
        // invalid token - synchronous
        try {
            const user = await User.findOne({ 
                where : {
                id:this.user.id,
                }
            });
            this.response.status(200).json({ user: user })
        } catch(err){
            this.response.status(401).json({ err : "Username or Password incorrect" })
        }
    }
}

export default Dashboard;