export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
export const USERS_URL = "/api/users";
export const ADMINS_URL = "/api/admins";

export const NON_PROTECTED_BACKEND_ROUTES = [
  `${USERS_URL}/auth`,
  `${USERS_URL}/signup`,
];
export const NON_PROTECTED_FRONTEND_ROUTES = [
  "/login",
  "/signup",
  "/forget-password",
  "/admin",
];

export const USERS_FRONTEND_PROTECTED_ROUTES = [
  "/profile/edit",
  "/profile/preview",
];
export const USERS_BACKEND_PROTECTED_ROUTES = [
  `${USERS_URL}/logout`,
  `${USERS_URL}/profile`,
];

// export  const ADMINS_FRONTEND_PROTECTED_ROUTES = ["/dashboard"];
export const ADMINS_BACKEND_PROTECTED_ROUTES = [USERS_URL];
