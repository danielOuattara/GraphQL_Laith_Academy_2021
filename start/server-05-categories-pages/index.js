import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mainCards, animals, categories } from "./data.js";

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

  type Category {
    id: ID!
    image: String!
    name: String!
    slug: String!
  }

  type Query {
    mainCards: [MainCard]
    animals:[Animal]
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }
`;

/* Step 5: Define a resolver
----------------------------- */

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, ctx) => {
      console.log(args);
      return animals.find((animal) => animal.slug === args.slug);
    },
    categories: () => categories,
    category: (parent, args, ctx) => {
      console.log(args);
      return categories.find((category) => category.slug === args.slug);
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
