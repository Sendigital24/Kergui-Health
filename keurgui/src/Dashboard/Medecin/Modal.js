import React from "react";

const Modal = ({ onClose, size, children }) => {
  const modalSizeClass = size === "small" ? "modal-sm" : "";
  return (
    <div className="modal fade show d-block" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className={`modal-dialog ${modalSizeClass}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"></h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
