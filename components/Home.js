import React from 'react';

const Home = () => (
  <div>
    <header>
      <h1>Vitajte na mojej stránke</h1>
      <div><img src="TUKE_logo.png" alt="TUKE Logo" /></div>
    </header>
    <nav>
      <ul className="navigation">
        <li><a href="podstranka1.html">Úvod</a></li>
        <li><a href="podstranka2.html">Záľuby</a></li>
        <li><a href="podstranka3.html">Sekcia zmien</a></li>
      </ul>
    </nav>
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repellat perferendis quod laborum molestias atque, qui suscipit corporis a itaque, ipsa dolore pariatur, quis natus consequatur quas. Id, vel facere?
      </p>
      <div><img src="TUKE.jpg" alt="TUKE Image" /></div>
    </main>
    <footer>
      <p>© 2023 Matej Novotny</p>
      <div className="social-icons">
        <a href="#" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
        <a href="#" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="#" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
      </div>
    </footer>
  </div>
);

export default Home;