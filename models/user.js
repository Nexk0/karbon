import { Sequelize } from 'sequelize';
import sequelize from '../backend/db/dbauth.js';

const User = sequelize.define('user', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,
        unique: true  
      },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    hasRespondedToBaseQuestion: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    hasRespondedTodailyquizz: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    score: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    co2e: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    }
  }, {
    // Other model options go here
  });
  
export default User