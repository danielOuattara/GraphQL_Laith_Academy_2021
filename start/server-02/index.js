import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

/* Step 3: Define your GraphQL schema
-------------------------------------- */

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

/* Step 4: Define your data set
------------------------------- */
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

/* Step 5: Define a resolver
----------------------------- */

const resolvers = {
  Query: {
    books: () => books,
  },
};

/* Step 6: Create an instance of ApolloServer
---------------------------------------------- */

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
