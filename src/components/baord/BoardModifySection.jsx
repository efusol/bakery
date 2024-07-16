import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {modifyNotice} from '@/store/board'

const BoardModifyBlock = styled.div`
max-width: 600px;
margin: 0 auto 50px;
  table {
    col:nth-child(1) {width: 100px;}
    col:nth-child(2) {width: auto;}
    td {
      padding: 5px;
      input {
        width: 100%;
        border: 1px solid #ddd;
        height: 30px;
        padding: 5px;
      }
      textarea {
        width: 100%;
        border: 1px solid #ddd;
        padding: 5px;
        height: 200px;
      }
    }
  }
  .btn {
    text-align: center;
    margin-top: 20px;
    button, a {
      margin: 0 10px;
      padding: 10px 20px;
      background: #ddd;
      font-size: 14px;
    }
  }
`

const BoardModifySection = ({item}) => {
  const subjectRef = useRef()
  const contentRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [board, setBoard] = useState({
    writer: item.writer,
    subject: item.subject,
    content: item.content
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setBoard(board=>({...board, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!board.subject) {
      alert('제목을 입력하세요')
      subjectRef.current.focus()
      return
    }
    if (!board.content) {
      alert('내용을 입력하세요')
      contentRef.current.focus()
      return
    }
    const editNotice = {...board, date: item.date, hit: item.hit}
    dispatch(modifyNotice(editNotice))
    navigate('/boardlist')
  }

  return (
    <BoardModifyBlock>
      <form onSubmit={handleSubmit}>
        <table border='1'>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>
                <input type="text" name='writer' value={board.writer} disabled />
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <input ref={subjectRef} type="text" name='subject' value={board.subject} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea ref={contentRef} name="content" value={board.content} onChange={handleChange}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn">
          <button type='submit'>작성</button>
          <Link to='/boardlist'>목록</Link>
        </div>
      </form>
    </BoardModifyBlock>
  );
};

export default BoardModifySection;