'use strict';
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
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Food)
  };
  return User;
};