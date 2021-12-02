import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddProduct from './components/AddProduct';
import Products from './components/Products';
import UpdatingProduct from './components/UpdateProduct';
import Detail from './components/Detail';
import Cart from './components/CartItems';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/add'} className="nav-link">
                Add
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/cart"} className="nav-link">
                <i
                  className="fa fa-shopping-cart"
                  style={{ fontSize: '38px', color: 'red' }}
                ></i>
                Cart
              </Link>
            </li>
          </div>
          <Dropdown />
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={['/', '/products']} component={Products} />
            <Route exact path="/add" component={AddProduct} />
            <Route exact path="/detail/product/:id" component={Detail} />
            <Route exact path="/products/:id" component={UpdatingProduct} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

// i am ssamik
