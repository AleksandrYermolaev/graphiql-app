import apiService from 'services/apiService';

export const GraphiqlPage: React.FC = () => {
  apiService.getData(
    `query ($page: Int, $name: FilterCharacter) {
    characters(page: $page, filter: $name) {
      results {
        id
        name
      }
    }
  }`,
    `{
      "page": 2,
      "name": {
        "name": "Rick"
      }
    }`,
    {
      'My-header': 1,
    }
  );
  return <p>Main page</p>;
};
