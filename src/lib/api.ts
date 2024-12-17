import axios  from "axios";

export const fetchUser = axios.create({
  baseURL: 'https://api.github.com/'
})

export const fetchPosts = axios.create({
  baseURL: 'https://api.github.com'
})