import axios from "axios";

export const geRepositories = (topic, token) => {
  const headers = {
    Authorization: `bearer ${token}`,
  };

  const data = {
    query: `query Repositories {
        topic(name: "${topic.toLowerCase()}") {
          id
          name
          repositories(orderBy: {field: STARGAZERS, direction: DESC}, first: 10) {
            edges {
              node {
                description
                url
                stargazerCount
                name
              }
            }
          }
        }
      }`,
  };

  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });

}