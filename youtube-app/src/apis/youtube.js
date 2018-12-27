import axios from "axios";

const KEY = "AIzaSyAcaXQjDm_osxsJi1kqcBTOd5tDJfb3eaY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY
  }
});
