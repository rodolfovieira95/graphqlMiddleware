import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

const options = {
  port: 4000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
  cors: {
    origin: true,
  },
};

server.start(options, () =>
  console.log(`Server is running on localhost:${options.port}`)
);
