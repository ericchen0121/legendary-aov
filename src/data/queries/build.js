import BuildType from '../types/BuildType';
import {
  GraphQLInt as IntType
} from 'graphql'
import db from '../sequelize';
import Build from '../models/aov/Build'

const builds = [
  {
    id: 15,
    hero_id: 66,
    user_id: 1,
    item_1: 40,
    item_2: 32,
    item_3: 32,
    item_4: 32,
    item_5: 32,
    item_6: 32,
    item_1_alt: [1],
    item_2_alt: [1],
    item_3_alt: [1],
    item_4_alt: [1],
    item_5_alt: [1],
    item_6_alt: [1],
    talent_id: 3,
    role: 'lane',
    info: {
      mode: '5v5',
      description: 'ass dave',
      category: '',
      owner_id: 1,
      added: '',
      yt_id: 'oYEaMvfJGII'
    }
  }
]

const build = {
  type: BuildType,
  args: {
    id: {type: IntType}
  },
  resolve(parent, args){
    // return builds.find(b => b.id === args.id)
    console.log('MODELS IS', db.models.Build)
    return Build.findOne({
      where: {
        id: 5
      }
    })
    // query db with the args.id
    // code to get data from db
  }
};

export default build;
