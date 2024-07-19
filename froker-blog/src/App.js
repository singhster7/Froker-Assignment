import React from 'react';
import './App.css';
import BlogHeader from './components/BlogHeader';
import BlogContent from './components/BlogContent';
import Regular from './components/Regular';
function App() {
  return (
    <div className="App">
      <BlogHeader />
      <BlogContent />
      <Regular/>
    </div>
  );
}

export default App;
