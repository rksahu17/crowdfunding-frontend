import axios from 'axios';


const API_BASE_URL = (process.env.REACT_APP_API_URL===undefined)?"http://localhost:8080/api":process.env.REACT_APP_API_URL;  // Replace with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const registerUser = (user) => api.post('/users/register', user);
export const fetchProjects = () => api.get('/projects');
export const createDonation = (donation) => api.post('/donations', donation);
export const fetchProjectDetails = (projectId) => api.get(`/projects/${projectId}`);
export const fetchProjectsByUser = (userId) => api.get(`/projects/user/${userId}`);



export default api;
