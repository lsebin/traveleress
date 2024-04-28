import React from "react";
import './popUp.css';

const SubmitSuccessful = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="msg-text">Your question is submitted</div>
        <button className="dismiss-btn" onClick={onClose}>Dismiss</button>
      </div>
    </div>
  );
};

export default SubmitSuccessful;