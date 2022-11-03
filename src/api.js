import axios from "axios";

export const apiURL = axios.create({
  baseURL: "https://project-the-first.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  return apiURL.get("/articles", { params: { topic } }).then((response) => {
    return response.data.articles;
  });
};

export const fetchTopics = () => {
  return apiURL.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const fetchArticlesById = (article_id) => {
  return apiURL
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    });
};

export const fetchComments = () => {
  return apiURL.get("/comments").then((response) => {
    return response.data.comments;
  });
};
