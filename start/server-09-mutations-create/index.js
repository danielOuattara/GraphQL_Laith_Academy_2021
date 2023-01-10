import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema/schema.js";
import { mainCards, animals, categories } from "./data.js";
import Query from "./resolvers/Query.js";
import Animal from "./resolvers/Animal.js";
import Category from "./resolvers/Category.js";
import Mutation from "./resolvers/Mutation.js";

/* Step 6: Create an instance of ApolloServer
---------------------------------------------- */

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
    Mutation,
  },
});

const { url } = await startStandaloneServer(server, {
  context: () => ({
    mainCards,
    animals,
    categories,
  }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
