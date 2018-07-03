import Player from '../models/aov/Player'
import Team from '../models/aov/Team'
import PlayerType from '../types/PlayerType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
 } from 'graphql'

const players = {
  type: ListType(PlayerType),
  resolve(parent, args){
    return Player.findAll({}, {
      include: [{
        model: Team
      }]
    })
  }
};

export default players;
