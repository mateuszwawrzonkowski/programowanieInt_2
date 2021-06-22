import "./App.css";
import { client } from "./setupApollo";
import { ApolloProvider, gql } from "@apollo/client";
import Layout from "components/Layout";

client
  .query({
    query: gql`
      query getUser {
        getUser(id: 13) {
          id
        }
      }
    `,
  })
  .then((result) => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  );
}

export default App;
