import User from '../../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

// Class to login an user



  class Login {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    
    // Method to login an user
    async login() {
        const user = await User.findOne({ 
            where : {
            email:this.email,
            }
        });
        if(user){
           const password_valid = await bcrypt.compare(this.password,user.password);
           if(password_valid){
               let token = jwt.sign({ 
                   "id" : user.id,
                   "email" : user.email,
                   "firstName":user.firstName 
                },`${process.env.JWT_SECRET_KEY}`);
                return ({ token : token });
               // res.status(200).json({ token : token });
           } else {
               return ({ token : token });
             // res.status(400).json({ error : "Password Incorrect" });
           }
         
         }else{
             return ({ token : token });
           // res.status(404).json({ error : "User does not exist" });
         }
    }
}

export default Login;