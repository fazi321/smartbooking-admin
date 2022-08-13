import axios from "axios";

export default () =>
  axios.create({
    baseURL: "http://13.229.167.135:5000/",
    withCredentials: false,
  });