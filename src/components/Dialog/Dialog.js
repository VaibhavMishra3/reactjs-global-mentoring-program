import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import "./Dialog.css"; // You can add styles here or inline

function Dialog({ title, children, onClose }) {
  return ReactDOM.createPortal(
    <FocusTrap>
      <div className="dialog-overlay">
        <div className="dialog-content">
          <header className="dialog-header">
            <h2>{title}</h2>
            <button className="dialog-close" onClick={onClose}>
              ×
            </button>
          </header>
          <div className="dialog-body">{children}</div>
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
}

export default Dialog;
