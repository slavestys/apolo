import { SportKind } from '../entity/SportKind';

export const typeDef = `
  extend type Query {    
    sport_kinds: [SportKind]!
  }  

  type SportKind {
    id: ID!
    name: String
    key: String    
  }
`;

export const resolvers = {
  Query: {
    sport_kinds: () => SportKind.find(),
  },
};
