// QuestionAnswerPage.js

import React, { useState } from 'react';
import '../../src/Components/QApage.css';

const QuestionAnswerPage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer); // Assuming the backend returns { answer: '...answer text...' }
    } catch (error) {
      console.error('Error asking question:', error);
    }
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button type="submit">Ask</button>
      </form>
      {answer && <p>{answer}</p>}
    </div>
  );
};

export default QuestionAnswerPage;
