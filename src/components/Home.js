/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../redux/data/data';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  const apix = useSelector((state) => state.dataReducer);
  return (
    <main id="home" className="App">
      <div className="homex" />
      <div className="grid col">
        {apix.map((current) => (
          <div key={current.id} className="item">
            <h3>{current.name}</h3>
            <p>{current.symbol}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
