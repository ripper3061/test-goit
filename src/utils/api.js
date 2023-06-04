import axios from "axios";

axios.defaults.baseURL = "https://647b00f0d2e5b6101db0bb50.mockapi.io/";

export const fetchTweetsApi = async (page = 1, value) => {
  const response = await axios.get("/tweetsApp", {
    params: {
      page: page,
      limit: 3,
      isFollowing: value,
    },
  });
  return response.data;
};

export const updateTweet = async (id, data) => {
  const response = await axios.put(`/tweetsApp/${id}`, data);
  return response.data;
};
