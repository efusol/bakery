import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { userLogin } from '../../store/member';
import { useNavigate } from 'react-router-dom';

const LoginSectionBlock = styled.div`
  max-width: 600px;
  margin: 50px auto;
  form {
    .idpw {
      p {
        display: flex;
        margin: 10px 0;
        align-items: center;
        label {
          width: 100px;
          text-align: right;
        }
        input {
          flex: 1;
          height: 40px;
          text-indent: 1em;
          border: 1px solid #ddd;
        }
      }
    }
    .btn {
      margin-top: 30px;
      text-align: center;
      button {
        background: red;
        width: 200px;
        height: 80px;
        color: #fff;
        font-size: 20px;
      }
    }
  }
`

const LoginSection = () => {
/* 
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')

  const handleIdChange = (e) => {
    setUserId(e.target.value)
  }
  const handlePwChange = (e) => {
    setUserPw(e.target.value)
  }
 */
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userIdPw, setUserIdPw] = useState({
    userEmail: '',
    userPw: ''
  })

  const handleIdPwChange = (e) => {
    const {value, name} = e.target
    setUserIdPw(userIdPw=>({...userIdPw, [name]:value}))
  }

  const onLogin = (e) => {
    e.preventDefault()
    dispatch(userLogin(userIdPw))
    navigate('/')
  }

  return (
    <LoginSectionBlock>
      <form onSubmit={onLogin}>
        <div className="idpw">
          <p>
            <label htmlFor="userEmail">이메일 : </label>
            <input type="text" id='userEmail' name='userEmail' value={userIdPw.userEmail} onChange={handleIdPwChange} />
          </p>
          <p>
            <label htmlFor="userPw">비밀번호 : </label>
            <input type="password" id='userPw' name='userPw' value={userIdPw.userPw} onChange={handleIdPwChange} autoComplete="off" />
          </p>
        </div>
        <div className="btn">
          <button type='submit'>로그인</button>
        </div>
      </form>
    </LoginSectionBlock>
  );
};

export default LoginSection;