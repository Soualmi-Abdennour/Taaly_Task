import {jwtVerify,SignJWT} from "jose"
import { cookies } from "next/headers";
import { getUserIdFromToken } from "./getUserIdFromToken";

export const authUser=async ()=>{    
    try{ 
        const token=cookies().get("jwt")?.value        
        if(token){
            const {user_id} = await getUserIdFromToken(token)
            return Boolean(user_id)
        }
        else {
            return false
        }     
    }
    catch(e){
        return false        
    }
}