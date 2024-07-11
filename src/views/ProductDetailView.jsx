import React from 'react';
import ProductDetailSection from '../components/product/ProductDetailSection';
import { useLocation } from 'react-router-dom';

const ProductDetailView = () => {
  const location = useLocation()
  const {item, index} = location.state
  return (
    <div className='row'>
      <ProductDetailSection item={item} index={index} />
    </div>
  );
};

export default ProductDetailView;