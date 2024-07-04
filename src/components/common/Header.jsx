import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { onChangeCategory } from '../../store/product';
import { useDispatch } from 'react-redux';

const HeaderBlock = styled.div`
  background: #023586;
  color: #fff;
  .row { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
`

const Nav = styled.nav`
.depth1 {
  display: flex;
  li {
    position: relative;
    &:hover {
      .depth2 { display: block }
    }
    a {
      padding: 40px 25px 40px 0;
      font-size: 14px;
    }
    .depth2 {
      position: absolute;
      top: 100%;
      left: 0;
      margin-left: -35px;
      color: #000;
      width: 150px; border: 1px solid #023586;
      display: none;
      li {
        a { padding: 10px }
      }
    }
  }
}
`

const OtherNav = styled.div`
list-style-type: none;
a { padding-left: 25px; }
`

const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderBlock>
      <div className='row'>        
        <Nav>
          <ul className='depth1'>
            <li>
              <Link to='/employee'>파바의 인재</Link>
            </li>
            <li>
              <Link to='/movie'>파바 매거진</Link>
            </li>
            <li>
              <Link to='/product' onClick={()=>dispatch(onChangeCategory('all'))}>상품 안내</Link>
              <ul className="depth2">
                <li>
                  <Link to='/product' onClick={()=>dispatch(onChangeCategory('all'))}>전체</Link>
                </li>
                <li>
                  <Link to='/product' onClick={()=>dispatch(onChangeCategory('bread'))}>브레드</Link>
                </li>
                <li>
                  <Link to='/product' onClick={()=>dispatch(onChangeCategory('cake'))}>케이크</Link>
                </li>
                <li>
                  <Link to='/product' onClick={()=>dispatch(onChangeCategory('sandwich'))}>샌드위치</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/stroe'>매장 정보</Link>
            </li>
          </ul>
        </Nav>
        <h1>
          <Link to='/'>PARIS BAGUETTE</Link>
        </h1>
        <OtherNav>
          <li>
              <Link to="/cart">장바구니</Link>
              <Link to="/login">로그인</Link>
              <Link to="/join">회원가입</Link>
          </li>
        </OtherNav>
      </div>
    </HeaderBlock>
  );
};

export default Header;