export interface ICountry {
  name?: string;
  code?: string;
}

export interface IRepresentative {
  name?: string;
  image?: string;
}

export interface IMessage {
  id?: number;
  representative?: IRepresentative;
  message?: string;
  country?: ICountry;
  company?: string;
  date?: string | Date;
  status?: string;
}
