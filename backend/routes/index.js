import express from 'express'
import Register from '../controllers/register.js'
import Login from '../controllers/login.js'
import jwt from 'jsonwebtoken'
import Dashboard from '../controllers/dashboard.js'
import AddQuestion from '../controllers/addQuestion.js'
import authenticateToken from '../lib/index.js'
import GetBaseQuestion from '../controllers/getBaseQuestions.js'
import AddAnswer from '../controllers/addAnswer.js'
import PostBaseQuestion from '../controllers/postBaseQuestion.js'


const router = express.Router()

router.get('/', (req, res) => {
    res.json({coucou : "coucou"})
})

//Route to register
router.post('/register', async (req, res, next) => {
    const response = await new Register(req, res).register()
})

//Route to login and send/resend the jwtwebtoken and store it in the
// local stoage of the user
router.post('/login', async (req, res, next) => {
    const response = await new Login(req, res).login()
})

//Route for the user to get all of his info and display it in the front  
router.get('/dashboard', authenticateToken,async(req,res,next)=>{
    const response = await new Dashboard(req, res).dashboard()
})

// Route for isAdmin to add a question
router.post('/add_question',async(req,res,next)=>{
    const response = await new AddQuestion(req, res).addQuestion()
})

// Route for isAdmin to add an answer
router.post('/post_questionAnswer', authenticateToken,async(req,res,next)=>{
    const response = await new AddAnswer(req, res).addAnswer()
})

// Router for the user who !hasRespondedToBaseQuestion to get the baseQuestion
router.get('/get_base_question', authenticateToken,async(req,res,next)=>{
    const response = await new GetBaseQuestion(req, res).getBaseQuestion()
})

router.post('/post_base_question', authenticateToken,async(req,res,next)=>{
    //res.json(req.body.userAnswers[1].answerId)
    const response = await new PostBaseQuestion(req, res).postBaseQuestion()
})


export default router