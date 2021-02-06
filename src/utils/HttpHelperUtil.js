import axios from "axios";
import AsyncStorage  from "@react-native-community/async-storage";

import Constants from './Constants';
const { apis } = Constants.URLS;

import Toast from "./Toast";

function handleResponse(response) {
  const { status, data } = response;
  if (status === 200) Toast.success("Successfully got the asteroid data");
  return data;
};

async function handleError(error) {
  return Promise.reject(error.message);
}

const asteroidInstance = axios.create({
  baseURL: apis.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const HttpHelperUtil = {
  get: function (query) {
    return asteroidInstance
      .get(`${query}?api_key=${apis.API_KEY}`)
      .then(handleResponse)
      .catch(handleError);
  }
};

module.exports = HttpHelperUtil;
