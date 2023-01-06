import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mainCards, animals } from "./data.js";

/* Step 3: Define your GraphQL schema
-------------------------------------- */

const typeDefs = `#graphql

  type MainCard {
    title: String
    image: String
  }
  type Animal{
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
  }

  type Query {
    mainCard: [MainCard]
    animals:[Animal]
  }
`;

/* Step 5: Define a resolver
----------------------------- */

const resolvers = {
  Query: {
    mainCard: () => mainCards,
    animals: () => animals,
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
