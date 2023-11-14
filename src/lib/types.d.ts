export interface Routes {
  name: string;
  path: string;
}

export interface Item {}

export interface Credentials {
  id: string;
  email: string;
  password: string;
}

export interface UserCreateData {
  alias: string;
  date_joined: string;
  date_last_active: string;
  total_rbs?: int;
  items?: string[];
  img_url: string[];
}

export interface UserData {
  alias: string;
  date_joined: string;
  date_last_active: string;
  total_rbs?: int;
  items?: string[];
  img_url: string[];
}
