import sequelize from '../db/dbauth.js';
import User from '../../models/user.js';
import Questions from '../../models/questions.js';
import Answers from '../../models/answer.js';


User.hasMany(Answers)
Answers.belongsTo(User)

Questions.hasMany(Answers)
Answers.belongsTo(Questions)

sequelize
.sync({force : true}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});