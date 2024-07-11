import React from 'react';
import styled from 'styled-components';

const PagenationBlock = styled.div`
display: flex;
justify-content: center;
margin: 50px 0;
  .goend {
    background: #000;
    color: #fff;
    padding: 5px 10px;
    margin: 0 5px;
  }
`

const PageBlock = styled.span`
  button {
    background: #ddd;
    color: #fff;
    padding: 5px 10px;
    margin: 0 5px;
  }
`

const Pagenation = ({totalItems, itemsPerPage, currentPage}) => {
  const pageList = []
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startPage = Math.max(1, currentPage - 5)
  const endPage = Math.min(totalPages, startPage + 9)

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i)
  }

  const prevPage = () => {

  }
  

  return (
    <PagenationBlock>
      <button className='goend' onClick={prevPage} disabled={currentPage==1}>이전</button>
      <PageBlock>
        {
          pageList.map(page => (
            <button key={page} type='button'>{page}</button>
          ))
        }
      </PageBlock>
      <button className='goend'>다음</button>
    </PagenationBlock>
  );
};

export default Pagenation;