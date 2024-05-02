import React, { useState } from 'react';

const PreBook = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic for integrating with a payment gateway
    // For demonstration purposes, let's just log the form data
    console.log({
      name,
      email,
      phoneNumber,
      address,
      quantity
    });
  };

  return (
    <div>
      <h1>Pre-Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label>Address:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
        </div>
        <button type="submit">Pre-Book</button>
      </form>
    </div>
  );
};

export default PreBook;
