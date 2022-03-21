import User from '../../models/user.js'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

// Class to login an user
  class Login {
    constructor(request, response) {
      this.email = request.body.email
      this.password = request.body.password
      this.response = response
  }
    
    // Method to login an user
    async login() {
      const user = await User.findOne({ 
            where : {
            email:this.email
            }
        });
        if(user){
           const password_valid = await bcrypt.compare(this.password,user.password);
           if(password_valid){
               let token = jwt.sign({ 
                   "id" : user.id
                },`${process.env.JWT_SECRET_KEY}`);
                this.response.status(200).json({ token : token });
           } else {
             this.response.status(401).json({ error : "Username or Password incorrect" });
           }
         }
    }
}

export default Login