import { Role } from './role';

export class User {
  id: number;
  email: string;
  username: string;
  fullName: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  roles: Role;
  accessToken?: string;
  profilePic: string;
}
