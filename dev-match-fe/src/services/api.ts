import axios from 'axios';
import { Question, Career, CareerResult } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const response = await api.get('/questions');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const predictCareer = async (answers: string[][]): Promise<CareerResult> => {
  try {
    const response = await api.post('/careers/predict', { answers });
    return response.data.data;
  } catch (error) {
    console.error('Error predicting career:', error);
    throw error;
  }
};

export const fetchCareers = async (): Promise<Career[]> => {
  try {
    const response = await api.get('/careers');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching careers:', error);
    throw error;
  }
};