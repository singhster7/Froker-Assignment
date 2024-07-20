import React from 'react';
import './Regular.css';

const Regular = () => {
  return (
    <div className="blog-content">
      <h2>Recent Posts</h2>
      <div className="blog-grid">
        <div className="blog-item">
          <img src="https://picsum.photos/400/300?1" alt="Blog post 1" />
          <div className="blog-info">
          <div className='blog-author'>by Varshita - 23 April 2024</div>
            <h3>Delegating Social Media Tasks ...</h3>
            <p>In today's digital age, maintaining a vibrant social media presence is crucial for businesses and individuals alike</p>
            <a  className="blog-link"  href="#">Read More...</a>
          </div>
        </div>
        <div className="blog-item">
          <img src="https://picsum.photos/400/300?2" alt="Blog post 2" />
          <div className="blog-info">
          <div className='blog-author'>by Varshita - 23 April 2024</div>
            <h3>Summer Fashion Tips: Dressing ...</h3>
            <p>Summer has arrived, bringing with it the perfect opportunity to shed those heavy layers and embrace the light, breezy vibes of the season...</p>
            <a href="#" className="blog-link" >Read More...</a>
          </div>
        </div>
        <div className="blog-item">
          <img src="https://picsum.photos/400/300?3" alt="Blog post 3" />
          <div className="blog-info">
          <div className='blog-author'>by Varshita - 23 April 2024</div>
            <h3>Why Brands Should Partner with...</h3>
            <p>In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it's transforming the way businesses connect with...</p>
            <a className="blog-link" href="#">Read More...</a>
          </div>
        </div>
        <div className="blog-item">
          <img src="https://picsum.photos/400/300?3" alt="Blog post 3" />
          <div className="blog-info">
          <div className='blog-author'>by Varshita - 23 April 2024</div>
            <h3>Why Brands Should Partner with...</h3>
            <p>In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it's transforming the way businesses connect with...In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it's transforming the way businesses connect with...In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it's transforming the way businesses connect with...</p>
            <a href="#" className="blog-link" >Read More...</a>
          </div>
        </div><div className="blog-item">
          <img src="https://picsum.photos/400/300?3" alt="Blog post 3" />
          <div className="blog-info">
            <div className="blog-author">by shita - 23 April 2024</div>
            <h3>Why Brands Should Partner with...</h3>
            <p>In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it's transforming the way businesses connect with...</p>
            <a href="#" className="blog-link" >Read More...</a>
          </div>
        </div><div className="blog-item">
          <img src="https://picsum.photos/400/300?3" alt="Blog post 3" />
          <div className="blog-info">
            <div className='blog-author'>by Varshita - 23 April 2024</div>
            <h3>Why Brands Should Partner with...</h3>
            <p>In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it's transforming the way businesses</p>
            <a href="#" className="blog-link" >Read More...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regular
