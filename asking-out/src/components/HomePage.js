import React, { useState } from 'react';
import '../component.css';
import { useNavigate } from 'react-router-dom';
import YesClick from './YesClick';

function HomePage({ text, gif }) {
  const [clickedYes, setClickedYes] = useState(false);
  const navigate = useNavigate();

  const handleYesClick = () => {
    console.log('Yes, Of Course!! Clicked');
    setClickedYes(true);
    navigate('/Yay');
  };

  const handleUmmmClick = () => {
    console.log('Ummm... Clicked');
    navigate('/hmpf')
  };

  return (
    <div className="centered-form">
      <div className="form-box">
        <form>
          <h2 className="question">{text}</h2>
          <div className="button-container">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleYesClick}
              >
                Yes, Of Course!!
              </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleUmmmClick}
            >
              Ummm...
            </button>
          </div>
          <div className="mb-3">
            <img src={gif} alt="Funny GIF" className="gif-image" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
