// const LOCALHOST = 'http://127.0.0.1:8000/';
const DOMAIN = 'https://admin-plantmedapp.jsprod.fr/';
// const DOMAIN = 'https://everbloom.rn-admin.site/';

export const BASE_URL = DOMAIN;
// export const BASE_URL = LOCALHOST;

// ############ GET DATA ############ //
export const GET_USER = `${BASE_URL}api/user`;
export const GET_ORDERS = `${BASE_URL}api/order`;
export const GET_PLANTS = `${BASE_URL}api/plants`;
export const GET_COLORS = `${BASE_URL}api/colors`;
export const GET_REVIEWS = `${BASE_URL}api/reviews`;
export const GET_BANNERS = `${BASE_URL}api/banners`;
export const GET_CAROUSEL = `${BASE_URL}api/slides`;
export const GET_PLANTMED = `${BASE_URL}api/plantmed`;
export const GET_SYMPTOMS = `${BASE_URL}api/symptoms`;
export const GET_POT_TYPES = `${BASE_URL}api/pot/types`;
export const GET_PROMOCODES = `${BASE_URL}api/promocodes`;
export const GET_CATEGORIES = `${BASE_URL}api/categories`;
export const GET_PLANT_TYPES = `${BASE_URL}api/plant/types`;

// ############ POST REQUESTS ############ //
export const LOGIN_USER = `${BASE_URL}api/user/login`;
export const CREATE_USER = `${BASE_URL}api/user/create`;
export const ORDER_CREATE = `${BASE_URL}api/order/create`;
export const DELETE_ACCOUNT = `${BASE_URL}api/user/delete`;
export const CREATE_REVIEW = `${BASE_URL}api/review/create`;
export const GET_PROMOCODE = `${BASE_URL}api/promocode/show`;
export const CHANGE_PASSWORD = `${BASE_URL}api/change/password`;

// ############ PUT REQUESTS ############ //
export const UPDATE_USER = `${BASE_URL}api/user/update`;

// ############ SEND OTP ############ //
export const SEND_EMAIL_OTP = `${BASE_URL}api/send/otp/email`;
export const SEND_PHONE_OTP = `${BASE_URL}api/send/otp/phone`;

// ############ VERIFY OTP ############ //
export const VERIFY_PHONE_OTP = `${BASE_URL}api/verify/otp/phone`;
export const VERIFY_EMAIL_OTP = `${BASE_URL}api/verify/otp/email`;

// ############ AUTHORIZATION_TOKEN ############ //
export const AUTHORIZATION_TOKEN = 'aH3KCew1YsWhWqW0tqNU3ndzHb3RdblI';

export const CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + AUTHORIZATION_TOKEN,
  },
};

export const ENDPOINTS = {
  BASE_URL,
  GET_USER,
  GET_ORDERS,
  GET_PLANTS,
  LOGIN_USER,
  GET_COLORS,
  UPDATE_USER,
  GET_REVIEWS,
  GET_BANNERS,
  CREATE_USER,
  GET_SYMPTOMS,
  GET_PLANTMED,
  ORDER_CREATE,
  GET_CAROUSEL,
  GET_POT_TYPES,
  CREATE_REVIEW,
  GET_PROMOCODE,
  GET_PROMOCODES,
  DELETE_ACCOUNT,
  SEND_PHONE_OTP,
  SEND_EMAIL_OTP,
  GET_CATEGORIES,
  GET_PLANT_TYPES,
  CHANGE_PASSWORD,
  VERIFY_PHONE_OTP,
  VERIFY_EMAIL_OTP,
};
