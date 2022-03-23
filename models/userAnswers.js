import { Sequelize } from 'sequelize';
import sequelize from '../backend/db/dbauth.js';
import Answers from './answers.js';
import User from './user.js';

const UserAnswers = sequelize.define('userAnswers', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
      }
    },
    answerId: {
      type: Sequelize.INTEGER,
      references: {
        model: Answers,
        key: 'id',
      }
    },
  }, {
    // Other model options go here
  });

  
export default UserAnswers