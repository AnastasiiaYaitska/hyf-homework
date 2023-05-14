import axios from "axios";

export const fetchingUsers = async (queryText) => {
  const { data } = await axios(
    `https://api.github.com/search/users?q=${queryText}`
  );
  return data.items;
};
