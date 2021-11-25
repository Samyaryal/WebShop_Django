import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import { addToCart } from '../redux/actions/cart';
import {
  retrieveProducts,
  findProductByName,
  deleteProduct
} from '../redux/actions/products';

function Products() {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const history = useHistory();

  const products = useSelector(state => state.productReducer);
  const addProuctTOCart = product => dispatch(addToCart(product));

  useEffect(() => {
    dispatch(retrieveProducts());
  }, []);

  const onChangeSearchName = e => {
    setSearchName(e.target.value);
  };

  const deleteProduct1 = id => {
    dispatch(deleteProduct(id))
      .then(() => {
        retrieveProducts();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const submitHandler = e => {
    e.preventDefault();
    if (searchName) {
      history.push(`/products?name=${searchName}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };

  const handleUpdateClick = id => {
    history.push(`/products/${id}`);
  };

  const findByName = () => {
    dispatch(findProductByName(searchName));
  };

  return (
    <div>
      <div className="list row">
        <h2 className="card-title font-weight-bold">Products List</h2>
        <form onSubmit={submitHandler} className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="product-grid">
        {products.length !== 0 &&
          products.map((product, index) => (
            <div className="product-content">
              <div>
                <img
                  className="image"
                  src={product.image}
                  alt="image"
                  height="300px"
                  width="200px"
                />
                <h2 className="card-title font-weight-bold">{product.name}</h2>
                <h4 className="card-subtitle mb-2">{product.productCode}</h4>
                <h4 className="card-subtitle mb-2">€{product.price}</h4>
              </div>
              <div className="card-button">
                <div
                  className="btn-group justify-content-around w-75 mb-1 "
                  data-toggle="buttons"
                >
                  <span>
                    <button
                      className="btn btn-info"
                      onClick={() => handleUpdateClick(product.id)}
                    >
                      Update
                    </button>
                  </span>
                  <span>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct1(product.id)}
                    >
                      Delete
                    </button>
                  </span>

                  <span>
                    <button
                      className="btn btn-info"
                      onClick={() => addProuctTOCart(product)}
                    >
                      To cart
                    </button>
                  </span>
                  <span>
                    <Button id={product.id} />
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
