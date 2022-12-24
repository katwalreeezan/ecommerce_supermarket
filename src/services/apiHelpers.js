import apiUrls from "./apiUrls";
import axios from "axios";
export const baseUrl = "https://uat.ordering-farmshop.ekbana.net";
export const userInfo = async (method, url, data) => {
  let response = await axios({
    method: method,
    url: `${baseUrl}${url}`,
    data: data,
  });
  return response;
};
