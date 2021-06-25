import userSchema from "./user";
import recipeSchema from "./recipe";

const linkSchema = `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, recipeSchema];
