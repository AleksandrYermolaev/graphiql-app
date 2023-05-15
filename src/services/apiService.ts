import { BASE_URL } from 'data/constants';
import { getIntrospectionQuery, buildClientSchema, IntrospectionQuery, printSchema } from 'graphql';
import { RequestHeaders } from 'types';

class ApiService {
  private sdlPayload = {
    operationName: 'IntrospectionQuery',
    query: getIntrospectionQuery(),
  };

  async getSchema(): Promise<string> {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.sdlPayload),
    });
    const { data } = (await response.json()) as { data: IntrospectionQuery };
    const schema = buildClientSchema(data);
    return printSchema(schema);
  }

  async getData(payload: string, variables?: string, headers?: RequestHeaders) {
    let requestBody: string;
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
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: requestBody,
    });
    const data = await response.json();
    console.log(data);
  }
}

export default new ApiService();
