import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Layout from './Layout';
import HomeView from './views/HomeView';
import CartView from './views/CartView';
import EmployeeView from './views/EmployeeView';
import MovieView from './views/MovieView';
import ProductDetailView from './views/ProductDetailView';
import ProductView from './views/ProductView';
import StoreView from './views/StoreView';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/employee' element={<EmployeeView />} />
        <Route path='/movie' element={<MovieView />} />
        <Route path='/detail' element={<ProductDetailView />} />
        <Route path='/product' element={<ProductView />} />
        <Route path='/stroe' element={<StoreView />} />
      </Route>
    </Routes>
  );
};

export default App;