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

//משימות שהוקצו
export const getAssignedTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/Task/Assigned`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assigned tasks:', error);
    throw error;
  }
};

//משימות שלא הוקצו
export const getUnassignedTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/Task/Unassigned`);
    return response.data;
  } catch (error) {
    console.error('Error fetching unassigned tasks:', error);
    throw error;
  }
};

//משימות שהושלמו
export const getCompletedTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/Task/Completed`);
    return response.data;
  } catch (error) {
    console.error('Error fetching completed tasks:', error);
    throw error;
  }
};

//משימות בתהליך
export const getInProgressTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/Task/InProgress`);
    return response.data;
  } catch (error) {
    console.error('Error fetching in-progress tasks:', error);
    throw error;
  }
};

//משימות שבוטלו
export const getCancelledTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/Task/Cancelled`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cancelled tasks:', error);
    throw error;
  }
};