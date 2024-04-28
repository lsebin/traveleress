import React from "react";
import './popUp.css';

const SignUpSuccessful = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="msg-text">You are signed up!</div>
        <button className="dismiss-btn" onClick={onClose}>Dismiss</button>
      </div>
    </div>
  );
};

export default SignUpSuccessful;