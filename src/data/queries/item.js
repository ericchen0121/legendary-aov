import ItemType from '../types/ItemType';
import {
  GraphQLInt as IntType
} from 'graphql'
import Item from '../models/aov/Item'

const item = {
  type: ItemType,
  args: {
    id: {type: IntType}
  },
  resolve(parent, args){
    return Item.findOne({
      where: {
        id: args.id
      }
    })
  }
};

export default item;
