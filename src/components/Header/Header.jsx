import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <>
      <header className="home__header">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://auto-tuning.uz/uploads/vbPeghp0jlDn4af1rrUb17a_AXoubPJ6.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://auto-tuning.uz/uploads/AlRPWRvTWu30_pPR5QH9ZMZ9umUj0gcJ.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true">
              {"←"}
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true">
              {"→"}
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
