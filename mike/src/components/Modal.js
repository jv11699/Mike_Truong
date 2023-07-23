import React from "react";
import "../css/Modal.css";
import Forms from "./form";
function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                    onClick={() => {
                        setOpenModal(false);
                      }}>
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Personal Contact Form</h1>
                </div>
                <div className="body">
                    <Forms />
                </div>

            </div>
        </div>
    );
}

export default Modal;