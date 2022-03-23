import { Sequelize } from 'sequelize';
import sequelize from '../backend/db/dbauth.js';
import Questions from './questions.js';

const Answers = sequelize.define('answers', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    answerNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    answerPoint: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    answerCo2e: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    questionId: {
      type: Sequelize.INTEGER,
      references: {
        model: Questions,
        key: 'id',
      }
    },
  }, {
    // Other model options go here
  });
  
export default Answers