import React from 'react';
import BoardListSection from '../components/baord/BoardListSection';
import Title from '@/components/common/Title'

const BoardListView = () => {
  return (
    <div className='row'>
      <Title title='공지사항' />
      <BoardListSection />
    </div>
  );
};

export default BoardListView;