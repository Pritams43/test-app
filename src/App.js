import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header title="Simple React App" />
      <main>
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
