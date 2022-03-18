import express from 'express'
import Register from '../controllers/register.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({coucou : "coucou"})
})

router.post('/register', async (req, res, next) => {
    const {firstName, lastName, userName, email, password} = req.body
    const response = await new Register(firstName, lastName, userName, email, password).register()
    res.json(response)
    // const register = new Register()
    // console.log(response)
    // res.json(response)
})
  

export default router