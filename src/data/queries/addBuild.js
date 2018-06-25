import BuildType from '../types/BuildType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'
import Build from '../models/aov/Build'
import Hero from '../models/aov/Hero'
import GameMode from '../models/aov/Hero'
import User from '../models/aov/Hero'
import BuildInputType from '../types/BuildInputType'

const addBuild = {
  type: BuildType,
  args: {
    input: { type: BuildInputType }
  },
  async resolve(parent, { input }){
    return Build.create({
     name: input.name,
     user_id: input.user_id,
     item_1: input.item_1,
     item_2: input.item_2,
     item_3: input.item_3,
     item_4: input.item_4,
     item_5: input.item_5,
     item_6: input.item_6,
     talent_id: input.talent_id,
     hero_id: input.hero_id,
     game_mode_id: input.game_mode_id,
     version_id: input.version_id
   }, {
     include: [
       { model: Hero },
       { model: GameMode },
       { model: User },
    ]
   })
  }
};

export default addBuild;
