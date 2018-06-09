import HeroType from '../types/HeroType';
import {
  GraphQLInt as IntType,
  GraphQLString as StringType,
 } from 'graphql'
import axios from 'axios'
import Hero from '../models/aov/Hero'

const hero = {
  type: HeroType,
  args: {
    id: {type: IntType},
    name: {type: StringType}
  },
  resolve(parent, args){
    return Hero.findAll({
      where: {
        name: args.id
      }
    })
  }
};

export default hero;
