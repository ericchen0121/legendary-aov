import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from 'graphql';
import TeamType from './TeamType'
import Team from '../models/aov/Team'

const PlayerType = new ObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: IntType },
    name: { type: StringType },
    real_name: { type: StringType },
    team_id: { type: IntType },
    role: { type: StringType },
    twitter: { type: StringType },
    facebook: { type: StringType },
    youtube: { type: StringType },
    instagram: { type: StringType },
    twitch: { type: StringType },
    team: {
      type: TeamType,
      resolve: (parent, args) => {
        return Team.findOne({
          where: {
            id: parent.dataValues.team_id
          }
        })
      }
    }
  })
})


export default PlayerType;
