"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var resolvers_1 = require("./resolvers");
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: resolvers_1.resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
});
var options = {
    port: 4000,
    endpoint: "/graphql",
    subscriptions: "/subscriptions",
    playground: "/playground",
    cors: {
        origin: true,
    },
};
server.start(options, function () {
    return console.log("Server is running on localhost:" + options.port);
});
