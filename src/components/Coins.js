/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiCoin } from '../redux/coin/coin';

const Coin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiCoin());
  }, [dispatch]);

  const apix = useSelector((state) => state.coinReducer);
  return (
    <main id="coin" className="App">
      <div className="homex" />
      <div className="grid">
        {apix.map((current) => (
          <div key={current.name} className="item">
            <h3>{current.market_cap}</h3>
            <p>{current.num_tokens}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Coin;
