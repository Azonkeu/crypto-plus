/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiMarket } from '../redux/market/market';

const Fiat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiMarket());
  }, [dispatch]);

  const apix = useSelector((state) => state.marketReducer);
  return (
    <main id="fiat" className="App">
      <div className="homex" />
      <div className="grid col">
        {apix.map((current) => (
          <div key={current.name} className="item">
            <h3>{current.symbol}</h3>
            <p>{current.sign}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Fiat;
