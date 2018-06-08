import HeroType from '../types/HeroType';
import {
  GraphQLInt as IntType,
  GraphQLString as StringType,
 } from 'graphql'
import axios from 'axios'
import db from '../sequelize';
// import {resolver} from 'graphql-sequelize';
import Hero from '../models/aov/Hero'

// console.log('hero.js', Hero, HeroType, resolver)
const heroes = [
  {
    id: 1,
    name: 'Tulen'
  },
  {
    id: 2,
    name: 'Airi'
  },
]

const hero = {
  type: HeroType,
  args: {
    id: {type: IntType},
    name: {type: StringType}
  },
  resolve(parent, args){
  //   console.log('DB', db)
  //   console.log('DB MODELS ---------', db.models.Hero)
  //
  //   return heroes.find(b => b.id === args.id)
  // }
  //   else if (args.id) {
  //     return heroes.find(b => b.id === args.id)
  //   }

    return db.models.Hero.findAll({
      where: {
        name: "Tulen"
      }
    })
  }
    // query db with the args.id
    // code to get data from db
  // resolve: resolver(Hero)

};

export default hero;
