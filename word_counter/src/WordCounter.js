import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  }

  const countWords = () => {
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
  }

  return (
    <div>
      <h1>Word Counter</h1>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        rows="4"
        cols="50"
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;
