import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []); // Run once on component mount

  const getQuote = () => {
    const quotableAPI = 'https://api.quotable.io/random';

    axios.get(quotableAPI)
      .then(response => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`);
  };

  return (
    <div className="container text-center">
      <h1>Random Quote Machine</h1>
      <h2>By <a href="https://www.youtube.com/c/traveldev">travelDev</a></h2>

      <div className="quotes text-center">
        <span className="quote">{quote}</span>
        <br />
        <span className="author">-{author}</span>
      </div>

      <button className="btn btn-default" onClick={getQuote}>New Quote</button>
      <button className="btn btn-default" onClick={handleTweet}>Twitter</button>
      <br />
      <br />
      <p>Made with <a href="https://quotable.io/">Quotable API</a>.</p>
    </div>
  );
};

export default RandomQuoteMachine;
