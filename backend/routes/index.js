import express from 'express'
import Register from '../controllers/register.js'
import Login from '../controllers/login.js'
import jwt from 'jsonwebtoken'
import Dashboard from '../controllers/dashboard.js'



const router = express.Router()

router.get('/', (req, res) => {
    res.json({coucou : "coucou"})
})

router.post('/register', async (req, res, next) => {
    const response = await new Register(req, res).register()
})
  
router.post('/login', async (req, res, next) => {
    const response = await new Login(req, res).login()
})

router.post('/dashboard',async(req,res,next)=>{
    const {token} = req.body
    const response = await new Dashboard(token).dashboard()
    res.json(response)
    // try {
    //     let token = req.headers['Authorization'].split(" ")[1];
    //     let decoded = jwt.verify(`${process.env.JWT_SECRET_KEY}`);
    //     req.user = decoded;
    //     next();
    // } catch(err){
    //     res.status(401).json({"msg":"Couldnt Authenticate", error});
    // }
    // },
    // async(req,res,next)=>{
    //     let user = await User.findOne({where:{id : req.user.id},attributes:{exclude:["password"]}});
    //     if(user === null){
    //     res.status(404).json({'msg':"User not found"});
    //     }
    //     res.status(200).json(user);
    }); 

export default router