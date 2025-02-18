import React from 'react';
import styled from 'styled-components'

const PagenationBlock = styled.div`
  display:flex;
  justify-content: center; margin:50px 0; 
  .goend { background:#000; color:#fff; 
    padding:5px 10px; margin:0 5px;
    &:disabled {background: #555; cursor: default;}
  }
`
const PageBlock = styled.span`
  button { background:#ddd; margin:0 2px; 
    border-radius:2px; width:30px; height:20px;
    &.on {background: #f00; color: #fff;}
  }
`
const Pagenation = ({totalItems, itemsPerPage, currentPage, categoryClick, changeType, keyword, onSearch}) => {
  const pageList = []
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startPage = Math.max(1, currentPage - 5)
  const endPage = Math.min(totalPages, startPage + 9)

  for (let i=startPage; i<=endPage; i++) {
    pageList.push(i);
  }

  const prevPage = ()=>{
    if (keyword) {
      onSearch(keyword, currentPage-1)
    } else {
      categoryClick(changeType, currentPage-1)
    }
  }
  const nextPage = ()=>{
    if (keyword) {
      onSearch(keyword, currentPage+1)
    } else {
      categoryClick(changeType, currentPage+1)
    }
  }

  return (
    <PagenationBlock>
      <button className="goend" onClick={prevPage} disabled={currentPage==1}>이전</button>
      <PageBlock>
        {
          pageList.map(page=>(
            <button key={page} type="button" className={currentPage == page ? 'on' : ''} onClick={keyword ? ()=>onSearch(keyword, page) : ()=>categoryClick(changeType, page)}>{page}</button>
          ))
        }
      </PageBlock>
      <button className="goend" onClick={nextPage}>다음</button>
    </PagenationBlock>
  );
};

export default Pagenation;