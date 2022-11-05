import axios from 'axios';

axios.defaults.baseURL = 'https://6366cee179b0914b75d7d36a.mockapi.io';

export async function contactsAPI() {
  const { data } = await axios.get('/contacts');
  return data;
}

export const createContact = async values => {
  const { data } = await axios.post('/contacts', values);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
