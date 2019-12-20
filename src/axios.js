import axios from "axios";

const instance = axios.create({
  baseURL: "https://studiorganiser.firebaseio.com/"
});

export default instance;
