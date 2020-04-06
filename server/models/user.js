'use strict';
const {hashPass} = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Email Kosong!'
        },
        notNull: {
          msg: 'Email Kosong!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'password Kosong!'
        },
        notNull: {
          msg: 'password Kosong!'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (model, option) => {
        console.log(model.password)
        model.password = hashPass(model.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Food)
  };
  return User;
};