import axios from 'axios';

export const fetchAnswers = questionId => {
  return axios.get(`/api/questions/${questionId}/answers`);
}

export const fetchAnswer = id => {
  return axios.get(`/api/answers/${id}`);
}

export const createAnswer = answer => {
  return axios.post(`/api/questions/${answer.question_id}/answers`, answer);
}

export const updateAnswer = (data, id) => {
  return axios.patch(`/api/items/${id}`, data);
}

export const deleteAnswer = (id) => {
  return axios.delete(`/api/items/${id}`);
}