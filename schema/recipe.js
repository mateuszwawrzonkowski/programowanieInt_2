export default `
  type Recipe {
    id: Int!
    recipeName: String!
    recipeDescription: String!
    recipeImageSrc: String!
    recipeType: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    recipe: Recipe
    allRecipes: [Recipe!]!
    getRecipe(id: Int!): Recipe
  }

  extend type Mutation {
    addRecipe(recipeName: String!, recipeDescription: String!, recipeImageSrc: String!, recipeType: String!): Recipe
    updateRecipe(id: Int!, recipeName: String, recipeDescription: String, recipeImageSrc: String, recipeType: String): [Int!]
    deleteRecipe(id: Int!): Int!
  }
`;
