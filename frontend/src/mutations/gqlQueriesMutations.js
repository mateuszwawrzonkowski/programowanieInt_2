import { gql } from "@apollo/client";

const GET_RECIPES = gql`
  query allRecipes {
    allRecipes {
      id
      recipeName
      recipeDescription
      recipeImageSrc
      recipeType
    }
  }
`;

const DELETE_RECIPE = gql`
  mutation deleteRecipe($id: Int!) {
    deleteRecipe(id: $id)
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export { GET_RECIPES, DELETE_RECIPE, LOGIN_USER };
