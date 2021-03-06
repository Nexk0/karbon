import { Sequelize } from 'sequelize';
import sequelize from '../backend/db/dbauth.js';

const Questions = sequelize.define('questions', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
  }, {
    // Other model options go here
  });
  
export default Questions