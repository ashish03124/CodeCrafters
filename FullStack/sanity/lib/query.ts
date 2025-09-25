import {defineQuery} from "groq";


export const USER_BY_AUTH_ID_QUERY = defineQuery(`
    *[_type == "user-final" && id == $id][0]{
        _id,id,name,username,email,image,login_method
    }
    
`)

export const USER_BY_ID_QUERY = defineQuery(`
    *[_type == "user-final" && _id == $id][0]{
        _id,id,name,username,email,image,login_method
    }
    
`)

export const USER_BY_EMAIL_QUERY = defineQuery(`
*[_type == "user-final" && email == $email && login_method == "credentials"][0]{
    _id,id,name,username,email,image,login_method,password
}`)