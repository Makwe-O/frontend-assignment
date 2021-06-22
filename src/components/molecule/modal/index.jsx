import React from "react";
import CloseIcon from "../../../images/close-icon.svg";
import Heading from "../../atoms/heading";
import { formatDate } from "../../../util/formatDate";
const Modal = ({ closeModal, showModal, modalData }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="modal-header">
          <Heading content={modalData.title} size="medium" />
          <button onClick={closeModal} className="close-icon">
            <img src={CloseIcon} alt="close-icon"></img>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image">
            <img
              src={`https://image.tmdb.org/t/p/original${modalData?.poster_path}`}
              width="266px"
            />
          </div>
          <div className="modal-movie-description">
            <p>
              <span className="release-date">Release Date:</span>{" "}
              {formatDate(modalData.release_date)}
            </p>
            <p className="modal-movie-description-detail">
              {modalData.overview}
            </p>
            <p>
              <span className="modal-movie-rating">
                {modalData.vote_average}
              </span>{" "}
              /10 ({modalData.vote_count} total votes)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
