import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/actions/products';

const AddProduct = () => {
  const initialProductState = {
    id: null,
    name: '',
    price: '',
    description: '',
    image: ' ',
    productCode: ''
  };
  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = () => {
    const { name, description, price, image, productCode } = product;

    dispatch(createProduct(name, price, description, image, productCode))
      .then(data => {
        setProduct({
          name: data.name,
          price: data.price,
          description: data.description,
          image: data.image,
          productCode: data.productCode
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>successfully Added!</h4>
          <button className="btn btn-success" onClick={newProduct}>
            Add More
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={product.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={product.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="productCode">Poduct Code</label>
            <input
              type="text"
              className="form-control"
              id="productCode"
              required
              value={product.productCode}
              onChange={handleInputChange}
              name="productCode"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={product.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              placeholder="text"
              className="form-control"
              id="image"
              required
              value={product.image}
              onChange={handleInputChange}
              name="image"
            />
          </div>

          <button onClick={saveProduct} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
