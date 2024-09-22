// src/App.js
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Dropdown from './components/DropDown';
import './App.css';

const App = () => {
  const [response, setResponse] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Alphabets', 'Numbers', 'Highest alphabet'];

  const handleResponse = (data) => {
    setResponse(data);
  };

  const renderResponse = () => {
    if (selectedOptions.length === 0) return null;

    const result = selectedOptions.map((option) => {
      if (option === 'Alphabets') return `Alphabets: ${response.alphabets?.join(', ')}`;
      if (option === 'Numbers') return `Numbers: ${response.numbers?.join(', ')}`;
      if (option === 'Highest alphabet') return `Highest Alphabet: ${response.highest_lowercase_alphabet}`;
      return null;
    });

    return result.map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div className="App">
      <h1> RA2111003011135 KP VISHNU SAI</h1>
      <TextInput onResponse={handleResponse} />
      {response && (
        <Dropdown options={options} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
      )}
      <div>{renderResponse()}</div>
    </div>
  );
};

export default App;