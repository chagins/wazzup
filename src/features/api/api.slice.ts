import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'const';
import { ISendMsgParams, ISendMsgResponse, IAuthParams, IAccountStateResponse } from 'types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getAccountState: builder.query<IAccountStateResponse, IAuthParams>({
      query: ({ idInstance, apiTokenInstance }) => ({
        url: `/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
        method: 'GET',
      }),
    }),
    sendMessage: builder.query<ISendMsgResponse, { auth: IAuthParams; msg: ISendMsgParams }>({
      query: ({ auth: { idInstance, apiTokenInstance }, msg }) => ({
        url: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        method: 'POST',
        body: msg,
      }),
    }),
  }),
});

export const { useLazySendMessageQuery, useLazyGetAccountStateQuery } = apiSlice;
