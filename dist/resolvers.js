"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        users: function (_, __, ___, ____) {
            return {
                id: "0",
                name: "Rods",
                user: {
                    edges: [
                        {
                            cursor: "0",
                            node: {
                                id: 0,
                                name: "Rod",
                                age: 10,
                            },
                        },
                    ],
                    pageInfo: {
                        hasNextPage: false,
                        hasPreviousPage: false,
                        startCursor: "0",
                        endCursor: "0",
                    },
                },
            };
        },
        node: function (_obj, _args, context, _info) { return context; },
    },
};
