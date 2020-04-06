'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'title Kosong!'
        },
        notNull: {
          msg: 'title Kosong!'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'price Kosong!'
        },
        notNull: {
          msg: 'price Kosong!'
        }
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'ingredients Kosong!'
        },
        notNull: {
          msg: 'ingredients Kosong!'
        }
      }
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'tag Kosong!'
        },
        notNull: {
          msg: 'tag Kosong!'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  });
  Food.associate = function(models) {
    // associations can be defined here
    Food.belongsTo(models.User)
  };
  return Food;
};