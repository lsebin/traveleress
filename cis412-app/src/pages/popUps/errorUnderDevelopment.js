import React from "react";
import './popUp.css';

const ErrorUnderDevelopment = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="msg-text">Sorry, this feature is still under development. Stay tuned!</div>
        <button className="dismiss-btn" onClick={onClose}>Dismiss</button>
      </div>
    </div>
  );
};

export default ErrorUnderDevelopment;