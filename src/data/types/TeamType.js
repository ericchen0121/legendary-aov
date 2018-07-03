import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLList as ListType,
} from 'graphql';
import PlayerType from './PlayerType'
import Player from '../models/aov/Player'

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
    players: {
      type: ListType(PlayerType),
      resolve: (parent, args) => {
        return Player.findAll({
          where: {
            team_id: parent.dataValues.id
          }
        })
      }
    }
  })
});

export default TeamType;
