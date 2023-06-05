/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import {
  useLazyDeleteNotificationQuery,
  useLazyGetMessagesQuery,
  useLazyReceiveNotificationQuery,
} from 'features/api';
import { useAppSelector } from 'hooks';
import { userModel } from 'features/user';
import { Message } from '../Message';
import { StyledBoxContainer } from './MessageList.styled';
import { getMessagesSettings } from '../slice/messages.slice';

export const MessageList = () => {
  const { chatId, messageHistoryCount } = useAppSelector(getMessagesSettings);
  const { apiTokenInstance, idInstance } = useAppSelector(userModel.selectUser);
  const [getMEssages, { data }] = useLazyGetMessagesQuery();
  const [receiveNotification] = useLazyReceiveNotificationQuery();
  const [deleteNotification] = useLazyDeleteNotificationQuery();
  const [messages, setMessages] = useState<{ textMessage: string; idMessage: string }[]>([]);

  useEffect(() => {
    if (!apiTokenInstance || !idInstance || !chatId) {
      return;
    }

    getMEssages({
      auth: { apiTokenInstance, idInstance },
      msg: { chatId, count: messageHistoryCount },
    });
  }, [apiTokenInstance, chatId, getMEssages, idInstance, messageHistoryCount]);

  useEffect(() => {
    if (data && data.length) {
      setMessages(() => {
        return [...data]
          ?.sort((a, b) => a.timestamp - b.timestamp)
          ?.map(({ textMessage, idMessage }) => ({ textMessage, idMessage }));
      });
    }
  }, [data]);

  useEffect(() => {
    if (!apiTokenInstance || !idInstance || !chatId) {
      return;
    }
    const interval = setInterval(() => {
      receiveNotification({ apiTokenInstance, idInstance })
        .then(({ data: receivingData }) => {
          console.error('receivingData', receivingData);
          const textMessage = receivingData?.body?.messageData?.extendedTextMessageData?.text;
          const idMessage = receivingData?.body?.idMessage;
          if (!!textMessage && !!idMessage) {
            setMessages((state) => {
              const newState = [...state];
              const isValueExists = newState.some((msg) => msg.idMessage === idMessage);
              if (!isValueExists) {
                newState.push({
                  idMessage,
                  textMessage,
                });
              }
              return newState;
            });
          }
          return receivingData?.receiptId;
        })
        .then((result) => {
          if (result) {
            deleteNotification({
              auth: { apiTokenInstance, idInstance },
              msg: { receiptId: result },
            });
          }
          return null;
        })
        .catch((error) => {
          console.error(error);
        });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [apiTokenInstance, chatId, deleteNotification, idInstance, receiveNotification]);

  return (
    <StyledBoxContainer>
      {messages.map(({ textMessage, idMessage }) => (
        <Message key={idMessage} text={textMessage} />
      ))}
    </StyledBoxContainer>
  );
};
