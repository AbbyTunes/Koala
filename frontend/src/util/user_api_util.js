import axios from 'axios';

export const fetchUsers = () => (
    axios.get('/api/users')
);

export const fetchUser = id => (
    axios.get(`/api/users/${id}`)
);

export const updateUser = user => (
    axios.patch(`/api/items/${user._id}`, user)
);

export const deleteUser = id => (
    axios.delete(`/api/items/${id}`)
);