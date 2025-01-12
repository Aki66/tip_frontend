export interface User {}
export interface BaseUser {
  user: User;
}

export interface ErrorMessage {
  msg: string;
  code: number;
}

export interface TokenData {
  token: string;
}
