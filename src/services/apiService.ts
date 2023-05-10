import { BASE_URL } from 'data/constants';
import { getIntrospectionQuery, buildClientSchema, IntrospectionQuery, printSchema } from 'graphql';

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
}

export default new ApiService();
