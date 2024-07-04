import React from 'react';
import styled from 'styled-components';
import { onChangeCategory } from '../../store/product';
import { useDispatch } from 'react-redux';

const ProductCategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 100px;
    height: 40px;
    margin: 0 20px;
    background: blue;
    color: #fff;
    &.on {
      background: red;
    }
  }
`

const ProductCategory = ({title}) => {
  const dispatch = useDispatch()
  const category = ['all', 'bread', 'cake', 'sandwich']
  return (
    <ProductCategoryBlock>
      {
        category.map((value, index) => <button type='button' key={index} className={title == value ? 'on' : ''} onClick={()=>dispatch(onChangeCategory(value))}>{value}</button>)
      }
    </ProductCategoryBlock>
  );
};

export default ProductCategory;