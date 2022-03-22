import { Sequelize } from 'sequelize';
import sequelize from '../backend/db/dbauth.js';

const Answers = sequelize.define('answers', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    answer: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  }, {
    // Other model options go here
  });
  
export default Answers