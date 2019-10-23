import axios from 'axios';

export const fetchAnswers = questionId => (
    axios.get(`/api/questions/${questionId}/answers`)
);

export const fetchAnswer = id => (
    axios.get(`/api/answers/${id}`)
);

export const createAnswer = answer => (
    axios.post(`/api/questions/${answer.question_id}/answers`, answer)
);

export const updateAnswer = answer => (
    axios.patch(`/api/answers/${answer.id}`, answer)
);

export const deleteAnswer = id => (
    axios.delete(`/api/answers/${id}`)
);