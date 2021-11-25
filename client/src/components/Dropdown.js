import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { sortProduct } from '../redux/actions/cart';

const Dropdown = () => {
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setSort(e.target.value);
    dispatch(sortProduct(e.target.value));
    setSort('');
  };

  return (
    <div className="mt-3 d-flex justify-content-center align-items-center">
      <select value={sort} onChange={handleChange}>
        <option value={'none'}>Sort Price By</option>
        <option value={'asc'}>ASC</option>
        <option value={'dsc'}>DSC</option>
      </select>
    </div>
  );
};
export default Dropdown;
