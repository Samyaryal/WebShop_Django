import axios from '../axios';

const getAll = () => {
  return axios.get('/products');
};

const getProduct = id => {
  return axios.get(`/products/${id}`);
};

const create = data => {
  return axios.post('/products', data);
};

const update = (id, data) => {
  return axios.put(`/products/${id}`, data);
};

const remove = id => {
  return axios.delete(`/products/${id}`);
};

const findByName = name => {
  return axios.get(`/products?name=${name}`);
};
const findByCode = productCode => {
  return axios.get(`/products?name=${productCode}`);
};

const ProductService = {
  getAll,
  getProduct,
  create,
  update,
  remove,
  findByName,
  findByCode
};

export default ProductService;
