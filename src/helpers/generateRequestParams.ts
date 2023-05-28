import { ApiPayloadType, RequestHeaders } from 'types';

export const generateRequestParams = (request: ApiPayloadType) => {
  const { payload, variables, headers } = request;
  let requestBody: string;
  const requestHeaders: RequestHeaders = headers ? JSON.parse(headers) : {};
  if (variables) {
    requestBody = JSON.stringify({
      query: payload,
      variables: JSON.parse(variables),
    });
  } else {
    requestBody = JSON.stringify({
      query: payload,
    });
  }
  return {
    requestBody,
    requestHeaders,
  };
};
