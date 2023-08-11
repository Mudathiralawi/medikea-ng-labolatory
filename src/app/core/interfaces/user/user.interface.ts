export interface IUser {
  readonly id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  gender: string;
  age: number
  created_at: string;
}

export interface IUserPayload extends Omit<IUser, 'id' | 'created_at'> {
  password: string;
}

export interface ISession extends IUserPayload {
  sessionId: string ;
}
