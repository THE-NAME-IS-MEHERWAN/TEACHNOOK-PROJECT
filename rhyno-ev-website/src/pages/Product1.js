import React from 'react';
import SE03Image from '../images/Rhyno-electric-scooter-1024x576.jpg';

const SE03 = () => {
  return (
    <div>
      <h1>SE03</h1>
      <img src={SE03Image} alt="SE03" />
      <button>Buy now</button>
      {/* Add color selection buttons and textual details here */}
    </div>
  );
};

function Product1() {
  return (
    <div className="Product1">
      <img src={SE03Image} alt="SE03" /> {/* Use the image directly */}
    </div>
  );
}

export default Product1;
