import React from 'react';
import { useGetCurrenciesQuery } from './redux/data/data';
import './App.css';

const App = () => {
  const {
    data,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetCurrenciesQuery();
  return (
    <div>
      <h1>Hello</h1>
      {isLoading && 'Loading...'}
      {isError && error.message}
      {isSuccess && data && data.map((curren) => <h2 key={curren.id}>{curren.name}</h2>)}
    </div>
  );
};

export default App;
