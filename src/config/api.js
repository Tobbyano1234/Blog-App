import React from "react";
import axios from "axios";
import dotenv from "dotenv";

// dotenv.config();

// const read_token = import.meta.env

export const blogList = async () => {
  const url = `
  https://api.buttercms.com/v2/posts?auth_token=19688f353cf241910093b22210f27d81fb4448e5`;
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};
