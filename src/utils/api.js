import axios from "axios";

axios.defaults.baseURL = "https://647b00f0d2e5b6101db0bb50.mockapi.io/";

export const fetchTweetsApi = async (page = 1) => {
  const response = await axios.get("/tweetsApp", {
    params: {
      page: page,
      limit: 3,
    },
  });
  return response.data;
};
