import axios from "axios";

export const fetchData = async () => {
  const response = await axios.get(
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
  );
  return response.data;
};

export const formattingDate = (data) => {
  const year = data.getFullYear().toString();
  const month = data.getMonth().toString();
  const date = data.getDate().toString();
  return `${year}-${month.padStart(2, "0")}-${date.padStart(2, "0")}`;
};
