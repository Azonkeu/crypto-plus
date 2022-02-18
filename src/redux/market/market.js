/* eslint-disable consistent-return */
/* eslint-disable quote-props */
import axios from 'axios';

const initialState = [];

export const fetchMarket = (payload) => ({
  type: 'FETCH_MARKET',
  payload,
});

export const fetchApiMarket = () => async (dispatch) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/fiat/map?CMC_PRO_API_KEY=b83dd794-1851-4991-9ef9-6399e8254c90', {
      headers: {
        'CMC_PRO_API_KEY': 'b83dd794-1851-4991-9ef9-6399e8254c90',
        'Accept': 'application/json',
        'Content-Encoding': 'deflate, gzip',
      },
    });
    if (response) {
      const json = response.data;
      const newArr = json.data.slice(0, 30);
      dispatch(fetchMarket(newArr));
    }
  } catch (error) {
    return error;
  }
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MARKET':
      return action.payload;
      /* eslint-disable no-labels, no-unreachable */
      break;
    default:
      return state;
  }
};

export default marketReducer;
