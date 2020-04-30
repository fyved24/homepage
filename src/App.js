import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Project';
import Footer from './Footer';
import TypedReact from './TypedReact';

function App() {
  return (
    <div className="layout">
      <main>
        <h1>
          <TypedReact
            strings={[
              '奇妙的世界'
            ]}
          /></h1>
        <TypedReact
          strings={[
            '`rm -rf /* `^1000\n' +
            '5...^300 ' +
            '4...^300 ' +
            '3...^300 ' +
            '2...^300 ' +
            '1...^300 '
          ]}
        />

        <div className="project_contianer">
          <Project>主页</Project>
          <Project>下载站</Project>
          <Project>云盘</Project>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
