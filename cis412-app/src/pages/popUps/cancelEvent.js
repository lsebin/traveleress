import React from "react";
import './popUp.css';

const CancelEvent = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="msg-text">You have canceled the event. We will let the host know!</div>
        <button className="dismiss-btn" onClick={onClose}>Dismiss</button>
      </div>
    </div>
  );
};

export default CancelEvent;