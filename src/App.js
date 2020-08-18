import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <div className="App-Container">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Banner">
        <div className="Banner-Container">
          <div className="Banner-Image">
              Image
          </div>
            <div className="Banner-Content">
              <h3>
                Hello! I'm
              </h3>
              <h1>
                Elham Naseri
              </h1>
              <h2>
                I'm a Designer
              </h2>
            </div>
        </div>
      </div>
      <div className="Content">
        <div className="Content-Container">
          <div className="Content-Content">
            <h1>
              About me
            </h1>
            <p>
              I was born and raised in Tehran,
              <br />
              I have always been interested in arts and chose it as my main
              path on life.
              <br />
              At first, I studied textile design at university,
              and then I learned user interface design and enjoy doing it.
              <br />
              Now I am here,
              <br />
              Full of ideas that are looking for somewhere to
              show themselves
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
