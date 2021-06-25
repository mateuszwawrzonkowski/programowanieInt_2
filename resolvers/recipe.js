import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated } from "./auth";
import recipe from "../schema/recipe";

export default {
  Query: {
    allRecipes: (parent, args, { models }) => models.Recipe.findAll(),
    getRecipe: (parent, { id }, { models }) =>
      models.Recipe.findOne({ where: { id } }),
  },

  Mutation: {
    addRecipe: (
      parent,
      { recipeName, recipeDescription, recipeImageSrc, recipeType },
      { models }
    ) =>
      models.Recipe.create({
        recipeName,
        recipeDescription,
        recipeImageSrc,
        recipeType,
      }),
    updateRecipe: (
      parent,
      { id, recipeName, recipeDescription, recipeImageSrc, recipeType },
      { models }
    ) =>
      models.Recipe.update(
        { recipeName, recipeDescription, recipeImageSrc, recipeType },
        { where: { id } }
      ),
    deleteRecipe: (parent, { id }, { models }) =>
      models.Recipe.destroy({ where: { id } }),
  },
};
