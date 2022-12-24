import { userInfo } from "./apiHelpers";
import apiUrls from "./apiUrls";
export const signupProfile = async (data) => {
  let response = await userInfo(
    apiUrls.userSignup.signup.method,
    apiUrls.userSignup.signup.url,
    data
  );
  return response;
};
export const loginProfile = async (data) => {
  let response = await userInfo(
    apiUrls.userSignup.login.method,
    apiUrls.userSignup.login.url,
    data
  );
  return response;
};
