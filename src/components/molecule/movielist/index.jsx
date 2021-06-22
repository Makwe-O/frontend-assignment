import React, { useState } from "react";
import Card from "../card";
import Heading from "../../atoms/heading";
import Modal from "../modal";
const MovieList = ({ movies, isSearchingMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const handleClick = (movie) => {
    setModalData(movie);
    setShowModal(true);
  };
  return (
    <>
      <Heading
        content={isSearchingMode ? "Search Results" : "Most Recent Movies"}
        size={"large"}
      />
      {movies.length === 0 ? (
        <Heading content={"No results found"} />
      ) : (
        <>
          <div className="movielist">
            {movies.map((movie) => {
              return (
                <Card
                  movie={movie}
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                />
              );
            })}
          </div>
          {showModal && (
            <Modal
              closeModal={() => setShowModal(false)}
              modalData={modalData}
            />
          )}
        </>
      )}
    </>
  );
};

export default MovieList;
