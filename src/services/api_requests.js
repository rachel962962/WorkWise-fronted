import axios from 'axios';

const API_URL = 'http://localhost:5258/api'; 

export const getAllWorkers = async () => {
  try {
    const response = await axios.get(`${API_URL}/Worker`);
    return response.data;
  } catch (error) {
    console.error('Error fetching workers:', error);
    throw error;
  }
};

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/Task`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};