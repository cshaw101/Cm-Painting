import React from 'react';
import './CardComponent.css'; // Optional: For styling, you can create a CSS file

const CardComponent = ({ name, email, phone, address, profileImage }) => {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <img src={profileImage} alt={`${name}'s profile`} className="contact-image" />
        <h2>{name}</h2>
      </div>
      <div className="contact-body">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

export default CardComponent;
