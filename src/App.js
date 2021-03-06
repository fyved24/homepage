import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Project';
import Footer from './Footer';
import TypedReact from './TypedReact';
import Socials from './Socials';

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
            'rm -rf /* ^1000\n' +
            '5...^300 ' +
            '4...^300 ' +
            '3...^300 ' +
            '2...^300 ' +
            '1...^300 ' +
            '\nBoom!!! ^300'
          ]} loop="true"
        />
        <div className="project_contianer">
          <Project href="https://ironz.cn">主页</Project>
          <Project href="https://dl.ironz.cn">下载站</Project>
          <Project href="https://cloud.ironz.cn">云盘</Project>
        </div>
        <Socials />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
