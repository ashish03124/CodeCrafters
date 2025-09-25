import { type SchemaTypeDefinition } from 'sanity'
import {userSchema} from "@/sanity/schemaTypes/user";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userSchema],
}
