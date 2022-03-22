import express from 'express'
import Register from '../controllers/register.js'
import Login from '../controllers/login.js'
import jwt from 'jsonwebtoken'
import Dashboard from '../controllers/dashboard.js'
import AddQuestion from '../controllers/addQuestion.js'
import authenticateToken from '../lib/index.js'
import GetBaseQuestion from '../controllers/getBaseQuestions.js'



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

router.post('/dashboard', authenticateToken,async(req,res,next)=>{
    const response = await new Dashboard(req, res).dashboard()
})


router.post('/add_question',async(req,res,next)=>{
    const response = await new AddQuestion(req, res).addQuestion()
})

router.get('/get_base_question', authenticateToken,async(req,res,next)=>{
    const response = await new GetBaseQuestion(req, res).getBaseQuestion()
})

export default router