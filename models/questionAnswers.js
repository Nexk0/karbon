import { Sequelize } from 'sequelize';
import sequelize from '../backend/db/dbauth.js';

const QuestionsAnswers = sequelize.define('questionsAnswers', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    answerId: {
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
  }, {
    // Other model options go here
  });
  
export default QuestionsAnswers