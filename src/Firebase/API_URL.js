const API_URL = "AIzaSyCTVsVbku157sVj7Hr4dCGDCjuhRthNdZA";
export const SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_URL}`;
export const SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_URL}`;
export const RESET_PASSWORD = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_URL}`;
export const GET_USER_BY_IDTOKEN = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_URL}`;

// PRODUCT
export const HOME_PRODUCTS =
  "https://shopcart-a850d-default-rtdb.asia-southeast1.firebasedatabase.app/homeProducts";

// USER
export const USER =
  "https://shopcart-a850d-default-rtdb.asia-southeast1.firebasedatabase.app/Users";

export const PRODUCT_BY_CATEGORY =
  "https://shopcart-a850d-default-rtdb.asia-southeast1.firebasedatabase.app/Products";
export const ALL_PRODUCTS =
  "https://shopcart-a850d-default-rtdb.asia-southeast1.firebasedatabase.app/Products";
export const GET_SINGLE_PRODUCT =
  "https://shopcart-a850d-default-rtdb.asia-southeast1.firebasedatabase.app/Products";
