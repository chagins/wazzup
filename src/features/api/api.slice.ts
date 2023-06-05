import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'const';
import {
  ISendMsgParams,
  ISendMsgResponse,
  IAuthParams,
  IAccountStateResponse,
  IMessage,
  IGetMsgHistoryParams,
  IIncomingReceiveNotification,
  IIncomingDeleteNotification,
  IDeleteNotificationParams,
} from 'types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Messages'],
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
    getMessages: builder.query<IMessage[], { auth: IAuthParams; msg: IGetMsgHistoryParams }>({
      query: ({ auth: { idInstance, apiTokenInstance }, msg }) => ({
        url: `/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        method: 'POST',
        body: msg,
      }),
      providesTags: ['Messages'],
    }),
    receiveNotification: builder.query<IIncomingReceiveNotification, IAuthParams>({
      query: ({ apiTokenInstance, idInstance }) => ({
        url: `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
        method: 'GET',
      }),
    }),
    deleteNotification: builder.query<
      IIncomingDeleteNotification,
      { auth: IAuthParams; msg: IDeleteNotificationParams }
    >({
      query: ({ auth: { apiTokenInstance, idInstance }, msg: { receiptId } }) => ({
        url: `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useLazySendMessageQuery,
  useLazyGetAccountStateQuery,
  useLazyGetMessagesQuery,
  useLazyReceiveNotificationQuery,
  useLazyDeleteNotificationQuery,
} = apiSlice;
