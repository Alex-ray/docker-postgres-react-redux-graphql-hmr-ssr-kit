import GraphQLToolsSequelize from "graphql-tools-sequelize";
import GraphQLToolsTypes from "graphql-tools-types";
import { makeExecutableSchema } from "graphql-tools";

import { sequelize } from '../models';

const graphQLTools = new GraphQLToolsSequelize(sequelize);
graphQLTools.boot();

const typeDefs = `
  schema {
    query:    Root
    mutation: Root
  }
  scalar UUID
  scalar JSON
  scalar Date
  type Root {
    ${graphQLTools.entityQuerySchema("Root", "", "Counter")}
    ${graphQLTools.entityQuerySchema("Root", "", "Counter*")}
  }
  type Counter {
    id: UUID!
    value: Int
    createdAt: Date
    updatedAt: Date
    ${graphQLTools.entityCloneSchema("Counter")}
    ${graphQLTools.entityCreateSchema("Counter")}
    ${graphQLTools.entityUpdateSchema("Counter")}
    ${graphQLTools.entityDeleteSchema("Counter")}
  }
`;

const resolvers = {
  UUID: GraphQLToolsTypes.UUID({ name: "UUID", storage: "string" }),
  JSON: GraphQLToolsTypes.JSON({ name: "JSON" }),
  Date: GraphQLToolsTypes.Date({ name: "Date" }),

  Root: {
    Counter: graphQLTools.entityQueryResolver("Root", "", "Counter"),
    Counters:  graphQLTools.entityQueryResolver("Root", "", "Counter*"),
  },
  Counter: {
    create: graphQLTools.entityCreateResolver("Counter"),
    update: graphQLTools.entityUpdateResolver("Counter"),
    delete: graphQLTools.entityDeleteResolver("Counter")
  }

};

const schema = makeExecutableSchema({
    typeDefs: [ typeDefs ],
    resolvers: resolvers
});

export default schema;
