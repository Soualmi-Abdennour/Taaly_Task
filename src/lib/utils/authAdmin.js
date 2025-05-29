import { cookies } from "next/headers";
import { getUserIdFromToken } from "./getUserIdFromToken";

export const authAdmin=async (request)=>{    
    try{ 
        const token=cookies().get("jwt")?.value                       
        if(token){
            const {admin_id} = await getUserIdFromToken(token)                                    
            return Boolean(admin_id)
        }
        else {
            return false
        }     
    }
    catch(e){
        return false        
    }
}