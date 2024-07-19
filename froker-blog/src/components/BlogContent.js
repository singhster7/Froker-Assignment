import React from 'react';
import './BlogContent.css';

const BlogContent = () => {
  return (
    <div className="blog-content">
      <div className="blog-item large">
        <img src="https://picsum.photos/700/300" alt="Large blog" />
        <p>Title: Mastering the Art of Co...</p>
        <a href="#">Read More...</a>
      </div>
      <div className="blog-grid">
        <div className="blog-item small">
          <img src="small-image-url-1" alt="Small blog 1" />
          <p>What Is Content Creation, Anyw...</p>
          <a href="#">Read More...</a>
        </div>
        <div className="blog-item small">
          <img src="small-image-url-2" alt="Small blog 2" />
          <p>Forbes 30 Under 30 India: Cele...</p>
          <a href="#">Read More...</a>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
