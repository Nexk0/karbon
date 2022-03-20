import express from 'express'
import Register from '../controllers/register.js'
import Login from '../controllers/login.js'
import jwt from 'jsonwebtoken'



const router = express.Router()

router.get('/', (req, res) => {
    res.json({coucou : "coucou"})
})

router.post('/register', async (req, res, next) => {
    const {firstName, lastName, userName, email, password} = req.body
    const response = await new Register(firstName, lastName, userName, email, password).register()
    res.json(response)
})
  
router.post('/login', async (req, res, next) => {
    const {email, password} = req.body
    const response = await new Login(email, password).login()
    res.json(response)
})

router.get('/me',async(req,res,next)=>{
    try {
        let token = req.headers['authorization'].split(" ")[1];
        let decoded = jwt.verify(`${process.env.JWT_SECRET_KEY}`);
        req.user = decoded;
        next();
    } catch(err){
        res.status(401).json({"msg":"Couldnt Authenticate", error});
    }
    },
    async(req,res,next)=>{
        let user = await User.findOne({where:{id : req.user.id},attributes:{exclude:["password"]}});
        if(user === null){
        res.status(404).json({'msg':"User not found"});
        }
        res.status(200).json(user);
    }); 

export default router