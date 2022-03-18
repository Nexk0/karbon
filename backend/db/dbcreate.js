import sequelize from '../db/dbauth.js';
import User from '../../models/user.js';

sequelize
.sync().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});