import axios from 'axios';

const API_KEY = '37546000-163427a723a8f35beaea42345';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getPhotosByQuery = async (searchQuery, page) => {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: 12,
    },
  });

  return response.data.hits;
};
