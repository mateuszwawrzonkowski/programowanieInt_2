import "./App.css";
// import { client } from "./setupApollo";
import { ApolloProvider, gql } from "@apollo/client";
import Layout from "components/Layout";

// client
//   .query({
//     query: gql`
//       query getUser {
//         getUser(id: 13) {
//           id
//           firstName
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  );
}

export default App;
