import axios from "axios";

const authToken = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "http://103.241.45.107/api",
  headers: {
    "content-type": "multipart/form-data",
    Authorization: `Bearer ${authToken}`,
  },
});

export default axiosInstance;
