/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiGlobal } from '../redux/global/global';

const Global = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiGlobal());
  }, [dispatch]);

  const apix = useSelector((state) => state.globalReducer);
  return (
    <main id="global" className="App">
      <div className="homex" />
      <div className="grid col">
        {apix.map((current) => (
          <div key={current.id} className="item">
            <h3>{current.name}</h3>
            <p>{current.symbol}</p>
            <p>{current.slug}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Global;
