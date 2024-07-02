import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.div`
  border: 1px solid red;
`

const Header = () => {
  return (
    <HeaderBlock>
      <nav>
        <ul>
          <li>
            <Link to="/cart">장바구니</Link>
          </li>
          <li>
            <Link to='/employee'>점원관리</Link>
          </li>
          <li>
            <Link to='/'>메인</Link>
          </li>
          <li>
            <Link to='/movie'>영화목록</Link>
          </li>
          <li>
            <Link to='/detail'>상품상세</Link>
          </li>
          <li>
            <Link to='/product'>상품목록</Link>
          </li>
          <li>
            <Link to='/stroe'>매장관리</Link>
          </li>
        </ul>
      </nav>
    </HeaderBlock>
  );
};

export default Header;