import React from "react";
import "./Modal.scss";
import cancel from "../../image/cancel.png";

const ModalPhoto = (props) => {
  const changeModalFlag = function () {
    props.func(false);
  };

  return (
    <>
      {props.modalFlag && (
        <div className="Modal-Photo-Background">
          <div className="Modal-Photo">
            <div className="Modal-Cancel">
              <img
                src={cancel}
                className="Modal-Photo-Cancel-Image"
                alt="Modal-Cancel"
                onClick={changeModalFlag}
              />
            </div>
            <div className="Modal-Photo-area">
              <img
                src={props.imageUrl}
                className="Modal-Photo-Image"
                alt="Modal"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalPhoto;
