import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema.js";
import Query from "./resolvers/Query.js";
import Animal from "./resolvers/Animal.js";
import Category from "./resolvers/Category.js";

/* Step 6: Create an instance of ApolloServer
---------------------------------------------- */

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
