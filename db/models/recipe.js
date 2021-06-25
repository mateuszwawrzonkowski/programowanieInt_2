'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    recipeName: DataTypes.STRING,
    recipeDescription: DataTypes.STRING,
    recipeImageSrc: DataTypes.STRING,
    recipeType: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};