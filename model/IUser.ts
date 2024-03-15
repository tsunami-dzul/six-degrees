export interface IUser {
  id?: string;
  name: string;
  friends: string[];
}

export interface IUsers {
  users: IUser[];
  totalDocs: number;
}
