import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
const AUTH_HEADER = "Authorization";

const endpoints = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  ENTRIES: "/entries"
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const HEADERS = (token) => ({
  headers: {
    [AUTH_HEADER]: `Bearer ${token}`,
  },
});

const myWallet = {
  authSignUp: (object) => {
    return axiosInstance.post(endpoints.SIGN_UP, object);
  },
  authenticate: (object) => {
    return axiosInstance.post(endpoints.SIGN_IN, object);
  },
  insertEntries: (object, token) => {
    return axiosInstance.post(endpoints.ENTRIES, object, {
      ...HEADERS(token),
    });
  },
  sortEntries: (token) => {
    return axiosInstance.get(endpoints.ENTRIES, {
      ...HEADERS(token),
    });
  }
};

export default myWallet;