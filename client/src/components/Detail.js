import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { retriveProduct } from '../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();

  const getBack = () => {
    history.push('/');
  };

  const parseId = parseInt(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(() => retriveProduct(parseId));
    console.log(dispatch(retriveProduct(parseId)));
  }, [parseId]);

  console.log('id', id);
  console.log(typeof id);

  const product = useSelector(state => state.detailReducer);
  console.log('product', product);

  return (
    <div className="detail-page">
      <div className="home-link">
        <button onClick={() => getBack()} className="btn btn-primary">
          Get Back
        </button>
      </div>
      <div className="detail-content">
        <div>
          <img
            className="image"
            src={product.image}
            alt="image"
            height="300px"
            width="200px"
          />
          <h2 className="card-title font-weight-bold">{product.name}</h2>
          <h4 className="card-subtitle mb-2">€{product.price}</h4>
          <h4 className="card-subtitle mb-2">{product.productCode}</h4>
          <p className="card-text">Description: {product.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
