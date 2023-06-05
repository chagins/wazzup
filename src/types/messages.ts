export interface ISendMsgParams {
  chatId: string;
  message: string;
}

export interface ISendMsgResponse {
  idMessage: string;
}

type TMessageDirectionType = 'outgoing' | 'incoming';

/**
 * textMessage - текстовое сообщение
 * imageMessage - сообщение с изображением
 * videoMessage - видео сообщение
 * documentMessage - сообщение с файлом документа
 * audioMessage - аудио сообщение
 * locationMessage - сообщение геолокации
 * contactMessage - сообщение с контактом
 * extendedTextMessage - сообщение со ссылкой и превью
 */
type TTypeMessage =
  | 'textMessage'
  | 'imageMessage'
  | 'videoMessage'
  | 'documentMessage'
  | 'audioMessage'
  | 'locationMessage'
  | 'contactMessage'
  | 'extendedTextMessage';

export interface IMessage {
  // type: TMessageDirectionType;
  timestamp: number;
  idMessage: string;
  // typeMessage: TTypeMessage;
  // chatId: string;
  // senderId: string;
  // senderName: string;
  textMessage: string;
}

export interface IGetMsgHistoryParams {
  chatId: string;
  count: number;
}

export interface IIncomingReceiveNotification {
  receiptId: number;
  body: {
    idMessage: string;
    messageData: {
      extendedTextMessageData: {
        text: string;
      };
    };
  };
}

export interface IIncomingDeleteNotification {
  result: boolean;
}

export interface IDeleteNotificationParams {
  receiptId: number;
}
