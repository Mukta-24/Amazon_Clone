import axios from "axios";
import { BASE_URL } from "./constants";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const callAPI = async (resource) => {
  const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
// await axios.get(`${BASE_URL}/${resource}`)
//   .then(resource => {
//     // Handle the successful resource
//     console.log(resource.data);
//   })
//   .catch(error => {
//     // Handle the error
//     if (error.resource) {
//       console.log('Request failed with status code:', error.resource.status);
//     } else {
//       console.log('Error occurred:', error.message);
//     }
//   });
  return data;
};