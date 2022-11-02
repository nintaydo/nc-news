import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://project-the-first.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  return apiUrl.get("/articles", { params: { topic } }).then((response) => {
    return response.data.articles;
  });
};
