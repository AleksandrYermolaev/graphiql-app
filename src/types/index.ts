export type ProjectAuthor = {
  name: string;
  gitHubLink: string;
};

export interface RequestHeaders {
  [key: string]: string | number;
}

export interface ApiPayloadType {
  payload: string;
  variables?: string;
  headers?: string;
}

export interface GraphQLResponse {
  [key: string]: string | GraphQLResponse;
}
