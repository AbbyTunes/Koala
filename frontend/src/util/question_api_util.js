import axios from 'axios';

export const fetchQuestions = () => {
	return axios.get('/api/questions');
}

export const fetchQuestion = (id) => {
	return axios.get(`/api/questions/${id}`);
}

export const createQuestion = (data) => {
	return axios.post("/api/questions", data);
}

export const updateQuestion = (data, id) => {
	return axios.patch(`/api/questions/${id}`, data);
}

export const deleteQuestion = (id) => {
	return axios.delete(`/api/questions/${id}`);
}