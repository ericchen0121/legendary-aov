import ItemType from '../types/ItemType';
import {
  GraphQLInt as IntType,
  GraphQLList as ListType
} from 'graphql'
import Item from '../models/aov/Item'

const items = {
  type: ListType(ItemType),
  resolve(parent, args){
    return Item.findAll()
  }
};

export default items;
