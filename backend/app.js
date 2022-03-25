// import and create an express app
import express from 'express';
import router from './routes/index.js';
import User from '../models/user.js';
import Questions from '../models/questions.js';
import Answers from '../models/answers.js';
import UserAnswers from '../models/userAnswers.js';

const app = express();
app.use(express.json());
app.use(router);

// now run the application and start listening
// on port 8080
app.listen(8080, () => {
    console.log("app running on port 8080...");
})