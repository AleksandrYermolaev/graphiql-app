export const request = `
query {
  characters(
  filter: { name: "Benjamin" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}`;

export const response = `
{
  "data": {
    "characters": {
      "info": {
        "count": 1
      },
      "results": [
        {
          "name": "Benjamin"
        }
      ]
    },
    "location": {
      "id": "1"
    },
    "episodesByIds": [
      {
        "id": "1"
      },
      {
        "id": "2"
      }
    ]
  }
}
`;
