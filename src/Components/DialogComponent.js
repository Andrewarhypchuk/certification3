import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Dialog = ({ isOpen, onClose, isModal, header, body, footer }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    onClose && onClose();
  };
  const content = (
    <>
      {header}
      {body}
      {footer}
      {isModal && <button onClick={handleClose}>Close</button>}
    </>
  );
  if (isModal && isVisible) {
    return createPortal(
      <div className="modal-wrapper">
        <div className="modal">{content}</div>
      </div>,
      document.body
    );
  }

  return !isModal && <div>{content}</div>;
};

export default Dialog;
