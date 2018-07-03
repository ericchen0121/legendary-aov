import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from 'graphql';

const TeamType = new ObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: IntType },
    name: { type: StringType },
    alt_name: { type: StringType },
    url: { type: StringType },
    twitter: { type: StringType },
    country: { type: StringType },
    region: { type: StringType },
  })
});

export default TeamType;
