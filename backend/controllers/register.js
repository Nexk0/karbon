import User from '../../models/user.js'
import bcrypt from 'bcrypt'
import express from 'express'

// Class to register an user
class Register {
    constructor(request, response) {
        this.firstName = request.body.firstName
        this.lastName = request.body.lastName 
        this.userName = request.body.userName 
        this.email = request.body.email
        this.password = request.body.password
        this.response = response
    }
    
    // Method to register an user
    async register() {
        const salt = await bcrypt.genSalt(10);

        // Create a new user
        try {
            const user = await User.create({ 
                firstName:this.firstName,
                lastName:this.lastName,
                userName:this.userName,
                email:this.email,
                password:await bcrypt.hash(this.password, salt)
            })
            this.response.status(200).json({user,"msg":"User created"});
        } catch(err) {
            console.log(err)
            this.response.status(401).json({"msg":"Couldnt create account", err});
        }
    }
}

export default Register;