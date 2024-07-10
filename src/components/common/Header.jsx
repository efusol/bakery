import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {NavLink, Link, useNavigate} from 'react-router-dom';
// Navlink는 클릭을 받으면, .active 클래스가 추가됨
import { onChangeCategory } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/member';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';
import { MdGroupAdd, MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { FaShoppingCart, FaUserEdit } from "react-icons/fa";

const HeaderBlock = styled.div`
  background: #023586;
  color: #fff;
  .row { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media screen and (max-width: 1024px) {
      display: block;
      h1 {padding: 30px 0;}
    }
  }
`

const Nav = styled.nav`
@media screen and (max-width: 1024px) {
  position: fixed;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  transition: 0.3s;
  &.on {
    left: 0;
  }
}
.depth1 {
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    background: #fff;
    color: #000;
    padding-top: 102px;
  }
  display: flex;
  li {
    position: relative;
    &:hover {
      .depth2 { display: block }
    }
    a {
      padding: 40px 25px 40px 0;
      &:hover, &.active { color: #f00; }
      @media screen and (max-width: 1024px) {
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid #ddd;
        display: block;
      }
    }
    @media screen and (max-width: 1024px) {
      &:first-child {
        a {
          border-top: 1px solid #ddd;
        }
      }
    }
    .depth2 {
      position: absolute;
      top: 100%;
      left: 0;
      margin-left: -35px;
      color: #000;
      width: 150px; border: 1px solid #023586;
      display: none;
      @media screen and (max-width: 1024px) {
        display: none;
        position: static;
        margin-left: 0px;
        width: 100%;
        border: 0px solid #023586;
        background: #ddd;
      }
      li {
        a { padding: 10px }
      }
    }
  }
}
`

const OtherNav = styled.div`
@media screen and (max-width: 1024px) {
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 65px;
}
list-style-type: none;
a { padding-left: 25px; 
  &:hover, &.active { color: #f00; }
  @media screen and (max-width: 1024px) {
    padding-left: 15px;
    font-size: 30px;
  }
}
`
const OpenNav = styled.div`
position: absolute;
right: 20px;
top: 50%;
transform: translateY(-50%);
font-size: 30px;
cursor: pointer;
@media screen and (max-width: 1024px) {
  display: block;
}
`

const CloseNav = styled.div`
  position: absolute;
  top: 25px;
  right: 15px;
  font-size: 30px;
  display: none;
  color: #000;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.members.user)
  const [isUser, setIsUser] = useState(user)
  const [open, setOpen] = useState(false)
  const mobile = useMediaQuery({maxWidth:1024})
  const navigate = useNavigate()

  useEffect(()=>{
    setIsUser(user)
  }, [user])


  return (
    <HeaderBlock>
      <div className='row'>
        { mobile &&
        <OpenNav onClick={()=>setOpen(true)}>
          <span className='blind'>메뉴열기</span><GiHamburgerMenu />
        </OpenNav>
        }
        <Nav className={open ? "on" : ""}>
          <ul className='depth1'>
            <li>
              <NavLink to='/employee'>파바의 인재</NavLink>
            </li>
            <li>
              <NavLink to='/movie'>파바 매거진</NavLink>
            </li>
            <li>
              <NavLink to='/product' onClick={()=>dispatch(onChangeCategory('all'))}>상품 안내</NavLink>
              <ul className="depth2">
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
              <NavLink to='/stroe'>매장 정보</NavLink>
            </li>
          </ul>
          <CloseNav onClick={()=>setOpen(false)}>
            <span className='blind'>메뉴닫기</span><IoMdClose />
          </CloseNav>
        </Nav>
        <h1>
          <NavLink to='/'>PARIS BAGUETTE</NavLink>
        </h1>
        <OtherNav>
          <li>              
              { !isUser ?               
                <>
                  <NavLink to="/login">{mobile ? <MdOutlineLogin /> : '로그인'}</NavLink>
                  <NavLink to="/join">{mobile ? <MdGroupAdd /> : '회원가입'}</NavLink>
                </>
                :
                <>
                  <a href='#none' onClick={()=>{dispatch(userLogout()); navigate('/')}}>{mobile ? <MdOutlineLogout /> : '로그아웃'}</a>
                  <NavLink to="/join">{mobile ? <FaUserEdit /> : '정보수정'}</NavLink>
                </>
              }
              <NavLink to="/cart">{mobile ? <FaShoppingCart /> : '장바구니'}</NavLink>
          </li>
        </OtherNav>
      </div>
    </HeaderBlock>
  );
};

export default Header;