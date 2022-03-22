// import and create an express app
import express from 'express';
import router from './routes/index.js';
import Answers from '../models/answer.js';
import User from '../models/user.js';
import Questions from '../models/questions.js';

const app = express();
app.use(express.json());
app.use(router);

User.hasMany(Answers)
Answers.belongsTo(User)

Questions.hasMany(Answers)
Answers.belongsTo(Questions)

// now run the application and start listening
// on port 3000
app.listen(8080, () => {
    console.log("app running on port 3000...");
})