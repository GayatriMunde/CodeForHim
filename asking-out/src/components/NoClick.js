import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

const NoClick = () => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    console.log('Try Again');
    navigate('/');
  };

  return (
    <div className="centered-form">
      <div className="form-box">
        <form>
          <h2 className="question">Mister Think before you click!!!</h2>
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleTryAgain}
            >
              Try Again
            </button>
          </div>
          <div className="mb-3">
            <img
              src="https://media.giphy.com/media/vySkPlXaNO0ElMIkeo/giphy.gif"
              alt="Funny GIF"
              className="gif-image"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoClick;
