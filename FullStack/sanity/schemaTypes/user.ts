import {defineField, defineType} from "@sanity/types";
import {UserIcon} from "@sanity/icons";


export const userSchema = defineType({
    name: "user-final",
    title: "Users",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "id",
            type: "string",
        }),defineField({
            name: "name",
            type: "string",
        }),defineField({
            name: "username",
            type: "string",
        }),defineField({
            name: "email",
            type: "string",
        }),defineField({
            name: "image",
            type: "url",
        }),defineField({
            name: "login_method",
            type: "string"
        }),defineField({
            name: "password",
            type: "string"
        })
    ]
})