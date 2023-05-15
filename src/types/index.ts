export type ProjectAuthor = {
  name: string;
  gitHubLink: string;
};

export interface RequestHeaders {
  [key: string]: string | number;
}

export interface RequestVariables {
  [key: string]: string | number | RequestVariables;
}
