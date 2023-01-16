import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <>
      <header className="home__header">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://auto-tuning.uz/uploads/vbPeghp0jlDn4af1rrUb17a_AXoubPJ6.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://auto-tuning.uz/uploads/AlRPWRvTWu30_pPR5QH9ZMZ9umUj0gcJ.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true">{"←"}</span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true">{"→"}</span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </header>
    </>
  );
};

export default Header;
