import React from 'react';
import SE03LiteImage from '../images/images.jpeg'; // Importing default export directly

function Products() {
  return (
    <div className="Products">
      <img src={SE03LiteImage} alt="SE03 Lite" />
    </div>
  );
}

const SE03Lite = () => {
  return (
    <div>
      <h1>SE03 Lite</h1>
      <img src={SE03LiteImage} alt="SE03 Lite" />
      <button>Buy now</button>
      {/* Add color selection buttons and textual details here */}
    </div>
  );
};

export default Products;
