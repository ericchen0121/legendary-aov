import Player from '../models/aov/Player'
import Team from '../models/aov/Team'
import TeamType from '../types/TeamType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
 } from 'graphql'

const teams = {
  type: ListType(TeamType),
  resolve(parent, args){
    return Team.findAll({}, {
      include: [{
        model: Player
      }]
    })
  }
};

export default teams;
