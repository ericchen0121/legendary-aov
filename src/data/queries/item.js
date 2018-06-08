import ItemType from '../types/ItemType';
import {
  GraphQLInt as IntType
} from 'graphql'
import db from '../sequelize';
import Item from '../models/aov/Item'
import ITEMS from '../../routes/build/Items'
const items = [
  {
    id: 1,
    name: 'Spear of Longinus',
    type: 'attack',
    tier: 3,
    cost: 2060,
  },
  {
    id: 2,
    name: "Fafnir's Talon",
    type: 'attack',
    tier: 3,
    cost: 2040,
  }
]

const item = {
  type: ItemType,
  args: {
    id: {type: IntType}
  },
  resolve(parent, args){
    return items.find(i => i.id === args.id)
    // return db.models.Item.findAll()
    // query db with the args.id
    // code to get data from db
  }
};

export default item;
