import User from '../../models/user.js'
import bcrypt from 'bcrypt'

// Class to register an user
class Register {
    constructor(firstName, lastName, userName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = bcrypt.hashSync(password, 5);
    }
    
    // Method to register an user
    async register() {


        // Create a new user
        try {
            const user = await User.create({ 
                firstName:this.firstName,
                lastName:this.lastName,
                userName:this.userName,
                email:this.email,
                password:this.password 
            })
            return (user)
        } catch(err) {
            console.log(err)
            return {error: 'Internal server error', err}
        }
    }
}

export default Register;