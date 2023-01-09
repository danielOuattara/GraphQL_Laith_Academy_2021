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

  type MainCard {
    title: String
    image: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    mainCards: [MainCard]
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
    book: (parent, args, ctx) => {
      console.log(args);
      console.log("books = ", books);
      return books.find((book) => book.id === args.id);
    },
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
