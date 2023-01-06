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
    id: ID!
    slug: String!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
  }

  type Query {
    mainCards: [MainCard]
    animals:[Animal]
    animal(slug: String!): Animal
  }
`;

/* Step 5: Define a resolver
----------------------------- */

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parents, args, ctx) => {
      console.log(args);
      return animals.find((animal) => animal.slug === args.slug);
    },
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
