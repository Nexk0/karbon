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
      password: {
            type: Sequelize.STRING(64),
            allowNull: false,
      }
  }, {
    // Other model options go here
  });
  
export default User