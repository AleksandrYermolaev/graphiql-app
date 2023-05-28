import { BASE_URL } from 'data/constants';
import { getIntrospectionQuery, IntrospectionQuery, IntrospectionType } from 'graphql';

class ApiService {
  private sdlPayload = {
    operationName: 'IntrospectionQuery',
    query: getIntrospectionQuery(),
  };

  async getSchema(): Promise<ReadonlyArray<IntrospectionType>> {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.sdlPayload),
    });
    const { data } = (await response.json()) as { data: IntrospectionQuery };

    return data.__schema.types;
  }
}

export default new ApiService();
