import React from 'react';
import './../styles/plans.css'; // Ensure to import the CSS

const Plans = () => {
  return (
    <div className="plans-container">
      <h2 className="plans-title">Choose Your Plan</h2>
      <div className="plans">
        {/* Basic Plan */}
        <div className="plan-card">
          <h3 className="plan-name">Basic</h3>
          <p className="plan-price">₹199/month</p>
          <p className="plan-description">
            Enjoy limited content in standard quality. Perfect for occasional streaming.
          </p>
          <button className="plan-btn">Subscribe</button>
        </div>

        {/* Standard Plan */}
        <div className="plan-card featured">
          <h3 className="plan-name">Standard</h3>
          <p className="plan-price">₹399/month</p>
          <p className="plan-description">
            Watch content in HD quality with access to a variety of genres.
          </p>
          <button className="plan-btn">Subscribe</button>
        </div>

        {/* Premium Plan */}
        <div className="plan-card">
          <h3 className="plan-name">Premium</h3>
          <p className="plan-price">₹599/month</p>
          <p className="plan-description">
            Get full access to all content in 4K quality with extra features for an enhanced experience.
          </p>
          <button className="plan-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
