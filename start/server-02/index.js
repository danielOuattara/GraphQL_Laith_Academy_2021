import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

/* Step 3: Define your GraphQL schema
-------------------------------------- */

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type MainCard {
    title: String
    image: String
  }

  type Query {
    books: [Book]
    mainCards: [MainCard]
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

const mainCards = [
  {
    title: "Recently Viewed",
    image: "lion image",
  },
  {
    title: "Looking for a gift",
    image: "penguin image",
  },
  {
    title: "Best behaved",
    image: "cat image",
  },
];

/* Step 5: Define a resolver
----------------------------- */

const resolvers = {
  Query: {
    books: () => books,
    mainCards: () => mainCards,
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
