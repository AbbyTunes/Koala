import axios from 'axios';

export const fetchAnswers = optionId => {
    if (optionId.userId) {
        return axios.get(`/api/users/${optionId.userId}/answers`);
    } else if (optionId.questionId) {
        return axios.get(`/api/questions/${optionId.questionId}/answers`);
    }
};

export const fetchAnswer = id => (
    axios.get(`/api/answers/${id}`)
);

export const createAnswer = answer => (
    axios.post(`/api/questions/${answer.question}/answers`, answer)
);

export const updateAnswer = answer => (
    axios.patch(`/api/answers/${answer._id}`, answer)
);

export const deleteAnswers = () => (
    axios.delete('/api/answers/')
);

export const deleteAnswer = id => (
    axios.delete(`/api/answers/${id}`)
);
