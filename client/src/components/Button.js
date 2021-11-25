import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { retriveProduct } from '../redux/actions/products';

const Button = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/detail/product/${id}`}>
      <button
        onClick={() => dispatch(retriveProduct(id))}
        className="btn btn-info"
      >
        Detail
      </button>
    </Link>
  );
};

export default Button;
