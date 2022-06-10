'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.hasMany(models.Category, {
        foreignKey: 'recipeId'
      }),
      Recipe.hasMany(models.Ingredient, {
        foreignKey: 'recipeId'
      }),
      Recipe.belongsTo(models.User , {
        foreignKey: 'id'
      })
      
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};