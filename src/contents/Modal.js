import React from 'react';
import { createPortal } from 'react-dom';
import htmlLogo from '../assets/html-5.png';
import arrow from '../assets/right-arrow.png';

import '../styles/Modal.css';

const Modal = ({ values, setValues, open, onClose }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!open) return null;
  return createPortal(
    <>
      <div className="overlay">
        <div className="modalStyles">
          <div className="modalMain">
            <div className="modalHeader">
              <div>
                <strong>Update Scores</strong>
              </div>
              <img src={htmlLogo} alt='HTML5' className="img" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="rowItem">
                  <span>1</span>
                  <p>
                    Update your <strong>rank</strong>
                  </p>
                </div>
                <input
                  type='number'
                  value={values.rank}
                  name='rank'
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <div className="rowItem">
                  <span>2</span>
                  <p>
                    Update your <strong>percentile</strong>
                  </p>
                </div>
                <input
                  type='number'
                  value={values.percentile}
                  name='percentile'
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <div className="rowItem">
                  <span>3</span>
                  <p>
                    Update your <strong>current score(out of 15)</strong>
                  </p>
                </div>
                <input
                  type='number'
                  value={values.score}
                  name='score'
                  onChange={handleChange}
                />
              </div>
              <div className="buttons">
                <button className="cancelBtn" onClick={onClose}>
                  Cancel
                </button>
                <button
                  className="submitBtn"
                  type='submit'
                  onClick={onClose}
                >
                  Save{' '}
                  <img src={arrow} alt='right arrow' className="arrow" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
