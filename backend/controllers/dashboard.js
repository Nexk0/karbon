import User from '../../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

// Class to login an user
  class Dashboard {
    constructor(token) {
        this.token = token;
    }
    
    // Method to login an user
    async dashboard() {
        // invalid token - synchronous
        try {
            const decoded = jwt.verify(this.token, `${process.env.JWT_SECRET_KEY}`)
            const user = await User.findOne({ 
                where : {
                id:decoded.id,
                }
            });
            return user
        } catch(err){
            return err 
        }
    }
}

export default Dashboard;