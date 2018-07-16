import ArcanaType from '../types/ArcanaType';
import {
  GraphQLInt as IntType,
  GraphQLString as StringType,
 } from 'graphql'
import Arcana from '../models/aov/Arcana'

const arcana = {
  type: ArcanaType,
  args: {
    id: {type: IntType},
    name: {type: StringType},
    tier: {type: IntType},
  },
  resolve(parent, args){
    return Arcana.findAll()
  }
};

export default arcana;
