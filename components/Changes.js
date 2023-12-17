
import React from 'react';

const Hobbies = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="podstranka1.html">Úvod</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="podstranka2.html">Záľuby</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="podstranka3.html">Sekcia zmien</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#football">Football</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#computer_games">Computer games</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#airsoft">Airsoft</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="jumbotron jumbotron-fluid text-center text-white">
      <div className="container">
        <h1 className="display-4">Moje Záľuby</h1>
      </div>
    </div>

    <div className="container" id="football">
      <h2 className="text-center mb-4">Football</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src="football.png" className="card-img-top" alt="Football Image" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text-black-background">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container" id="computer_games">
      <h2 className="text-center mb-4">Computer games</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text-black-background">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="computer_games.png" className="card-img-top" alt="Computer Games Image" />
          </div>
        </div>
      </div>
    </div>

    <div className="container" id="airsoft">
      <h2 className="text-center mb-4">Airsoft</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src="airsoft.png" className="card-img-top" alt="Airsoft Image" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text-black-background">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </div>
);

export default Hobbies;
