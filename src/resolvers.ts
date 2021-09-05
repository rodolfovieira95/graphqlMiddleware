export const resolvers = {
  Query: {
    users: (_: any, __: any, ___: any, ____: any) => {
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
    node: (_obj: any, _args: any, context: any, _info: any) => context,
  },
};
