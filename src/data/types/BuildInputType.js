import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLList as ListType,
} from 'graphql';
import BuildType from '../types/BuildType';

const BuildInputType = new GraphQLInputObjectType({
  name: 'BuildInputType',
  type: BuildType,
  description: 'Input build payload',
  fields: {
    hero_id: { type: IntType },
    user_id: { type: IntType },
    game_mode_id: { type: IntType},
    talent_id: { type: IntType },
    item_1: { type: IntType },
    item_2: { type: IntType },
    item_3: { type: IntType },
    item_4: { type: IntType },
    item_5: { type: IntType },
    item_6: { type: IntType },
    item_1_alt: { type: ListType(IntType) },
    item_2_alt: { type: ListType(IntType) },
    item_3_alt: { type: ListType(IntType) },
    item_4_alt: { type: ListType(IntType) },
    item_5_alt: { type: ListType(IntType) },
    item_6_alt: { type: ListType(IntType) },
    talent_id_alt: { type: ListType(IntType) }
  },
});

export default BuildInputType;
