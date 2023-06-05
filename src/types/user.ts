export interface IAuthParams {
  idInstance: string | null;
  apiTokenInstance: string | null;
}

type TStateInstance = 'authorized' | 'notAuthorized' | 'blocked' | 'sleepMode' | 'starting';

export interface IAccountStateResponse {
  stateInstance: TStateInstance;
}
