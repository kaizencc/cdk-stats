import axios from 'axios';

export const request = (data: any, headers: any) => {
  // @ts-ignore
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
};