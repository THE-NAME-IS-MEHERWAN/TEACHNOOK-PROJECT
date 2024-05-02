import React from 'react';
import SE03MaxImage from '../images/images.jpeg';

function Product3() {
  return (
    <div className="Product3">
      <img src={SE03MaxImage} alt="SE03 Max" />
    </div>
  );
}

const SE03Max = () => {
  return (
    <div>
      <h1>SE03 Max</h1>
      <img src={SE03MaxImage} alt="SE03 Max" />
      <button>Buy now</button>
      {/* Add color selection buttons and textual details here */}
    </div>
  );
};

export default Product3;
