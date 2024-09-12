import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const getCampers= async (page = 1) => {
  const { data } = await axios.get(`campers?page=${page}&limit=4`);
  return data;
};

export const getAllCampers = async () => {
  const { data } = await axios.get('campers');
  return data;
};

export const getCamperById = async id => {
  const { data } = await axios.get(`campers/${id}`);
  return data;
};

export async function campersLoader() {
    const campersAll = await getAllCampers();
    return campersAll;
  }