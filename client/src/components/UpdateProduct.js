import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../redux/actions/products';
import ProductService from '../services/services';

export const UpdatingProduct = () => {
  const initialProductState = {
    id: null,
    image: ' ',
    name: '',
    price: '',
    description: '',
    productCode: ''
  };

  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const getProduct = id => {
    ProductService.getProduct(id)
      .then(response => {
        setCurrentProduct({
          id: response.data.id,
          image: response.data.image,
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
          productCode: response.data.productCode
        });
        console.log(currentProduct);
      })
      .catch(e => {
        console.error(e);
      });
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  const handleProductChange = e => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const updateProduct1 = () => {
    let data = {
      id: currentProduct.id,
      image: currentProduct.image,
      name: currentProduct.name,
      price: currentProduct.price,
      description: currentProduct.description,
      productCode: currentProduct.productCode
    };

    dispatch(updateProduct(id, data))
      .then(response => {
        setCurrentProduct({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
          image: response.data.image,
          productCode: response.data.productCode
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  };

  const newProduct = () => {
    setCurrentProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Product Updated!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <button className="btn btn-success" onClick={newProduct}>
            Update
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
              value={currentProduct.name}
              onChange={handleProductChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              required
              value={currentProduct.image}
              onChange={handleProductChange}
              name="image"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={currentProduct.price}
              onChange={handleProductChange}
              name="price"
              default
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="productCode"> ProductCode </label>
            <input
              type="text"
              className="form-control"
              id="productCode"
              required
              value={currentProduct.productCode}
              onChange={handleProductChange}
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
              value={currentProduct.description}
              onChange={handleProductChange}
              name="description"
              default
            />
          </div>

          <button onClick={updateProduct1} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdatingProduct;
