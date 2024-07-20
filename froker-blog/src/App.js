import React from 'react';
import './App.css';
import BlogHeader from './components/BlogHeader';
import BlogContent from './components/BlogContent';
import Regular from './components/Regular';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <BlogHeader />
      <BlogContent />
      <Regular/>
      <Footer/>
    </div>
  );
}

export default App;
