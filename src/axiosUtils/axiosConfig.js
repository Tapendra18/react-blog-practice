import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://103.241.45.107/api",
  withXSRFToken: false,
  // headers: {
  //   "content-type": "multipart/form-data",
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
