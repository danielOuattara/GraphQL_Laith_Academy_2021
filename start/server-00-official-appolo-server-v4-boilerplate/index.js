import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

/* Step 3: Define your GraphQL schema
-------------------------------------- */
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String
    author: String
    page: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
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

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
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

/* The ApolloServer constructor requires two parameters: 
 - your schema definition
 - your set of resolvers.*/

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

console.log(`????  Server ready at: ${url}`);
