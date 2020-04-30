import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Project';
import Footer from './Footer';

function App() {
  return (
    <div className="layout">
      <main>
        <div className="project_contianer">
          <Project>项目1</Project>
          <Project>项目2</Project>
          <Project>项目3</Project>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
