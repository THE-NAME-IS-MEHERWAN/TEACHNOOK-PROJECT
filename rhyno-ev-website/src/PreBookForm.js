import React from 'react';
import { useForm } from 'react-hook-form';

const PreBookForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        ref={register({ required: 'Name is required' })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        ref={register({ required: 'Email is required' })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        ref={register({ required: 'Phone is required' })}
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <label htmlFor="product">Product</label>
      <select name="product" ref={register({ required: 'Product is required' })}>
        <option value="SE03 Lite">SE03 Lite</option>
        <option value="SE03">SE03</option>
        <option value="SE03 Max">SE03 Max</option>
      </select>
      {errors.product && <p>{errors.product.message}</p>}

      <label htmlFor="color">Color</label>
      <select name="color" ref={register({ required: 'Color is required' })}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      {errors.color && <p>{errors.color.message}</p>}

      <button type="submit">Pre-Book</button>
    </form>
  );
};

export default PreBookForm;