import React, { useEffect } from 'react';
import { useLazyGetMessagesQuery } from 'features/api';
import { useAppSelector } from 'hooks';
import { userModel } from 'features/user';
import { Message } from '../Message';
import { StyledBoxContainer } from './MessageList.styled';
import { getMessagesSettings } from '../slice/messages.slice';

export const MessageList = () => {
  const { chatId, messageHistoryCount } = useAppSelector(getMessagesSettings);
  const { apiTokenInstance, idInstance } = useAppSelector(userModel.selectUser);
  const [getMEssages, { data, isError }] = useLazyGetMessagesQuery();

  useEffect(() => {
    if (apiTokenInstance && idInstance && chatId) {
      getMEssages({
        auth: { apiTokenInstance, idInstance },
        msg: { chatId, count: messageHistoryCount },
      });
    }
  }, [apiTokenInstance, chatId, getMEssages, idInstance, messageHistoryCount]);

  return (
    <StyledBoxContainer>
      {data?.map(({ textMessage, idMessage }) => (
        <Message key={idMessage} text={textMessage} />
      ))}
    </StyledBoxContainer>
  );
};
