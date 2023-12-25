import React, { useState } from 'react';
import useLocalStorage from '../useLocalStorage';

const ComponentA = () => {
  const { setLocalStorage } = useLocalStorage();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setLocalStorage('exampleKey', inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Set localStorage Value</button>
    </div>
  );
};

export default ComponentA;
