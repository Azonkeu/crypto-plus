/* eslint-disable consistent-return */
/* eslint-disable quote-props */
import axios from 'axios';

const initialState = [];

export const fetchData = (payload) => ({
  type: 'FETCH_DATA',
  payload,
});

export const fetchApiData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=b83dd794-1851-4991-9ef9-6399e8254c90&start=1&limit=5000&convert=USD', {
      headers: {
        'CMC_PRO_API_KEY': 'b83dd794-1851-4991-9ef9-6399e8254c90',
        'Accept': 'application/json',
        'Content-Encoding': 'deflate, gzip',
      },
    });
    if (response) {
      const json = response.data;
      const newArr = json.data.slice(0, 30);
      dispatch(fetchData(newArr));
    }
  } catch (error) {
    return error;
  }
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload;
      /* eslint-disable no-labels, no-unreachable */
      break;
    default:
      return state;
  }
};

export default dataReducer;
