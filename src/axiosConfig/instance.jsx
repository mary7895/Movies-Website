import axios from "axios"

const axiosInstance = axios.create({
  params: {
    api_key: "9b1f51c127027f9b0e34dedbfbd15ba1",
  },
  baseURL: "https://api.themoviedb.org/3/movie",
});

export default axiosInstance;