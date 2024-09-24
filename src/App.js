import React, { useState } from 'react';

import './App.css'; 

function App() {
  const [text, setText] = useState('');
  const [replaceFrom, setReplaceFrom] = useState('');
  const [replaceTo, setReplaceTo] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleReplaceFromChange = (event) => {
    setReplaceFrom(event.target.value);
  };

  const handleReplaceToChange = (event) => {
    setReplaceTo(event.target.value);
  };

  const getUniqueLetters = (text) => {
    const letters = text.replace(/[^a-zA-Z]/g, '').split('');
    return Array.from(new Set(letters)).join('');
  };

  const replaceText = (text) => {
    const uniqueLetters = getUniqueLetters(text);
    return uniqueLetters.replace(new RegExp(replaceFrom, 'g'), replaceTo);
  };

  const getCharacterCount = (text) => {
    return text.replace(/[^\w]/g, '').length;
  };

  const processedText = replaceText(text);
  const uniqueLetterCount = getUniqueLetters(text).length;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Real-Time Text Analysis</h1>
      <textarea
        rows="10"
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />
      <div className="statistics">
        <h2>Statistics:</h2>
        <p>Unique Letter Count: {uniqueLetterCount}</p>
        <p>Character Count (excluding spaces and punctuation): {getCharacterCount(processedText)}</p>
      </div>
      <div>
        <h2>String Replacement</h2>
        <input
          type="text"
          value={replaceFrom}
          onChange={handleReplaceFromChange}
          placeholder="Replace from..."
        />
        <input
          type="text"
          value={replaceTo}
          onChange={handleReplaceToChange}
          placeholder="Replace to..."
        />
      </div>
      <h2>Processed Text:</h2>
      <textarea
        rows="10"
        value={processedText}
        readOnly
      />
      <footer className="footer">
        <p>&copy; 2024 Text Analysis Dhanush kumar Tool</p>
      </footer>
    </div>
  );
  
}

export default App;

