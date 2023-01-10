import axios from "../axios";

const loginUser = (data) => {
  return axios.put(`/user/login`, data);
};

const addUser = (data) => {
  return axios.post(`/user`, data);
};

const addAArticle = (data) => {
  return axios.post(`/article`, data);
};

const addAuthor = (data) => {
  return axios.post(`/author`, data);
};

const getAllUsers = () => {
  return axios.get(`/user`);
};
const getAllArticles = () => {
  return axios.get(`/article`);
};
const getAllAuthors = () => {
  return axios.get(`/author`);
};

const postAuthor = (data) => {
  return axios.post(`/author`, data);
};

export {
  loginUser,
  postAuthor,
  getAllUsers,
  addUser,
  getAllArticles,
  getAllAuthors,
  addAArticle,
  addAuthor,
};
