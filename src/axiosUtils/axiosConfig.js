import axios from "axios";
const authToken = "2|i13r8m9YZ6bWM0BcTulcxOkA3353ehkrzyva3Nnlb3f808b2";

const axiosInstance = axios.create({
  baseURL: "http://110.227.208.185/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  },
});

export default axiosInstance;
