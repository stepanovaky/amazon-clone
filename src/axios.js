import axios from "axios";

const instance = axios.create({
  baseURL: "https://a-m-clone.herokuapp.com/",

  //   "http://localhost:5001/clone-fa232/us-central1/api",
});

export default instance;
