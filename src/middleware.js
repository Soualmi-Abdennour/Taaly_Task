import { NextResponse } from 'next/server';
import { ADMINS_BACKEND_PROTECTED_ROUTES, NON_PROTECTED_BACKEND_ROUTES, NON_PROTECTED_FRONTEND_ROUTES, USERS_BACKEND_PROTECTED_ROUTES, USERS_FRONTEND_PROTECTED_ROUTES, USERS_URL } from './constants/routes';
import { authAdmin } from './lib/utils/authAdmin';
import { authUser } from './lib/utils/authUser';
import { redirect } from 'next/dist/server/api-utils';

export async function middleware(request) {
    
  const pathname = request.nextUrl.pathname

  // make the login as the entry point instead of / 
  if(!pathname) return NextResponse.redirect(new URL("/login", request.url));

  // prevent the user from visit the login/signup page after logged in  
  if(NON_PROTECTED_FRONTEND_ROUTES.includes(pathname)){
    const user=await authUser()
    const admin=await authAdmin()
    if(user) return NextResponse.redirect(new URL("profile/preview",request.url))
    if(admin) return NextResponse.redirect(new URL("/dashboard",request.url))
  }

  // protect frontend navigation 
  if (USERS_FRONTEND_PROTECTED_ROUTES.includes(pathname)) {
    const isAuth = await authUser();    
    if (!isAuth) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // protect api routes
  if (USERS_BACKEND_PROTECTED_ROUTES.includes(pathname) ) {
    const isAuth = await authUser();    
    
    if (!isAuth) {
      return NextResponse.json(
        { message: "No token provided. Request denied." },
        { status: 401 }
      )
    }
  }
  // protect the dashboard so only a logid admin can visit 
  if (pathname.startsWith("/dashboard")) {
    
    const isAuth = await authAdmin();    
    
    if (!isAuth) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
  
  // protect backend routes 
  if (
    ADMINS_BACKEND_PROTECTED_ROUTES.includes(pathname) || (pathname.startsWith(USERS_URL)&&!NON_PROTECTED_BACKEND_ROUTES.includes(pathname)&&!USERS_BACKEND_PROTECTED_ROUTES.includes(pathname))
  ) {
    const isAuth = await authAdmin(request);    

    if (!isAuth) {
      return NextResponse.json(
        { message: "No token provided. Request denied." },
        { status: 503 }
      );
    }
  }
    
  return NextResponse.next();
}