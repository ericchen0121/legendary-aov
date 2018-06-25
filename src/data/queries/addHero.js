import HeroType from '../types/HeroType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'
import Hero from '../models/aov/Hero'
import HeroInputType from '../types/HeroInputType'

const addHero = {
  type: HeroType,
  args: {
    input: { type: HeroInputType }
  },
  async resolve(parent, { input }){
    return Hero.build({
     name: input.name
    })
    .save()
 }
};

export default addHero;
