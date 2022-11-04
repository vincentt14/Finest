import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT: `${CONFIG.BASE_URL_RESTAURANT}/list`,
  THEMEAL: `${CONFIG.BASE_URL_THEMEAL}`,
  DETAIL: (id) => `${CONFIG.BASE_URL_RESTAURANT}/detail/${id}`,
};

export default API_ENDPOINT;
