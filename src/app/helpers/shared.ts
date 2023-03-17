export enum Role {
  User = 'User',
  Admin = 'Admin'
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  role: Role;
  jwtToken?: string;
  jwtRefreshToken?: string;
}

export interface Customer {
  customer_id : number;
  store_id : number;
  first_name : string;
  last_name : string;
  email : string;
  address : string;
  activebool : string;
  create_date : Date;
  active: string;
}

export interface Address{

}

export interface City{

}

export interface Country{

}
