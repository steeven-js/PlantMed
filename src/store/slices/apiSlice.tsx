import {ENDPOINTS, AUTHORIZATION_TOKEN} from '../../config';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {
  UserType,
  PotType,
  PlantType,
  ColorType,
  BannerType,
  ProductType,
  CategoryType,
  PromocodeType,
  PlantmedType,
  SymptomType,
} from '../../types';

import {userSlice} from '../slices/userSlice';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINTS.BASE_URL,
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${AUTHORIZATION_TOKEN}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    // ############ GET USER BY ID ############ //
    getUser: builder.query<UserType | null, number>({
      query: userId => `${ENDPOINTS.GET_USER}/${userId}`,
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          if (!data) {
            dispatch(userSlice.actions.logOut());
          }

          if (data) {
            dispatch(userSlice.actions.setUser(data));
          }
        } catch {
          dispatch(userSlice.actions.logOut());
        }
      },
    }),
    // ############ GET ORDERS BY USER ID ############ //
    getOrders: builder.query<any, number>({
      query: userId => `${ENDPOINTS.GET_ORDERS}/${userId}`,
    }),
    // ############ GET REVIEWS BY PRODUCT ID ############ //
    getReviews: builder.query<any, any | any>({
      query: productId => `${ENDPOINTS.GET_REVIEWS}/${productId}`,
    }),
    // ############ GET CAROUSEL ############ //
    getCarousel: builder.query<{carousel: string[]}, void>({
      query: () => ENDPOINTS.GET_CAROUSEL,
      transformResponse: (response: string) => ({
        carousel: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET PROMOCODES ############ //
    getPromocodes: builder.query<{promocodes: PromocodeType[]}, void>({
      query: () => ENDPOINTS.GET_PROMOCODES,
      transformResponse: (response: string) => ({
        promocodes: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET COLORS ############ //
    getColors: builder.query<{colors: ColorType[]}, void>({
      query: () => ENDPOINTS.GET_COLORS,
      transformResponse: (response: string) => ({
        colors: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET SYMPTOMS ############ //
    getSymptoms: builder.query<{symptoms: SymptomType[]}, void>({
      query: () => ENDPOINTS.GET_SYMPTOMS,
      transformResponse: (response: SymptomType) => ({
        symptoms: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET PLANTMED ############ //
    getPlantmed: builder.query<{plantmed: PlantmedType[]}, void>({
      query: () => ENDPOINTS.GET_PLANTMED,
      transformResponse: (response: PlantmedType) => ({
        plantmed: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET PLANTS ############ //
    getPlants: builder.query<{plants: ProductType[]}, void>({
      query: () => ENDPOINTS.GET_PLANTS,
      transformResponse: (response: ProductType) => ({
        plants: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET POT TYPES ############ //
    getPotTypes: builder.query<{potTypes: PotType[]}, void>({
      query: () => ENDPOINTS.GET_POT_TYPES,
      transformResponse: (response: string) => ({
        potTypes: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET PLANT TYPES ############ //
    getPlantTypes: builder.query<{plantTypes: PlantType[]}, void>({
      query: () => ENDPOINTS.GET_PLANT_TYPES,
      transformResponse: (response: string) => ({
        plantTypes: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET BANNERS ############ //
    getBanners: builder.query<{banners: BannerType[]}, void>({
      query: () => ENDPOINTS.GET_BANNERS,
      transformResponse: (response: BannerType) => ({
        banners: Array.isArray(response) ? response : [],
      }),
    }),
    // ############ GET CATEGORIES ############ //
    getCategories: builder.query<{categories: CategoryType[]}, void>({
      query: () => ENDPOINTS.GET_CATEGORIES,
      transformResponse: (response: any) => ({
        categories: Array.isArray(response) ? response : [],
      }),
    }),
  }),
});

export const queryHooks = {
  useGetUserQuery: apiSlice.endpoints.getUser.useQuery,
  useGetPlantsQuery: apiSlice.endpoints.getPlants.useQuery,
  useGetOrdersQuery: apiSlice.endpoints.getOrders.useQuery,
  useGetColorsQuery: apiSlice.endpoints.getColors.useQuery,
  useGetReviewsQuery: apiSlice.endpoints.getReviews.useQuery,
  useGetBannersQuery: apiSlice.endpoints.getBanners.useQuery,
  useGetSymptomsQuery: apiSlice.endpoints.getSymptoms.useQuery,
  useGetCarouselQuery: apiSlice.endpoints.getCarousel.useQuery,
  useGetPotTypesQuery: apiSlice.endpoints.getPotTypes.useQuery,
  useGetPlantmedQuery: apiSlice.endpoints.getPlantmed.useQuery,
  useGetPlantTypesQuery: apiSlice.endpoints.getPlantTypes.useQuery,
  useGetCategoriesQuery: apiSlice.endpoints.getCategories.useQuery,
  useGetPromocodesQuery: apiSlice.endpoints.getPromocodes.useQuery,
};

export default apiSlice.reducer;
