import sequelize from '../db/dbauth.js';
import User from '../../models/user.js';
import Questions from '../../models/questions.js';
import Answers from '../../models/answers.js';
import UserAnswers from '../../models/userAnswers.js';


sequelize
.sync({force : true}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});