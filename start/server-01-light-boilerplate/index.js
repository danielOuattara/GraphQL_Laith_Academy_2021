import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

/* Step 3: Define your GraphQL schema
-------------------------------------- */

const typeDefs = `#graphql

  type Book {
    id: ID!
    title: String
    author: String
    page: Int
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

/* Step 4: Define your data set
------------------------------- */
const books = [
  {
    id: "1",
    title: "The Awakening",
    author: "Kate Chopin",
    page: 200,
  },
  {
    id: "2",
    title: "City of Glass",
    author: "Paul Auster",
    page: 354,
  },
];

/* Step 5: Define a resolver
----------------------------- */

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, ctx) => {
      console.log(args);
      console.log("books = ", books);
      return books.find((book) => book.id === args.id);
    },
  },
};

/* Step 6: Create an instance of ApolloServer
---------------------------------------------- */

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
