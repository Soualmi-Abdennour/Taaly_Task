import { jwtVerify } from "jose";

export const getUserIdFromToken = async (token) => {
  const {admin_id,user_id} =  (await jwtVerify(token,new TextEncoder().encode(process.env.JWT_SECRET_KEY))).payload
  
  return {user_id,admin_id};
};
