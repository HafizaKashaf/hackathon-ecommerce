import { type SchemaTypeDefinition } from 'sanity'
import chef from './chefs'
import food from './foods'
import category from './category'
import order from './order'
import post from './post'
import blockContent from './blockcontent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chef,food,category,order,post,blockContent],
}
