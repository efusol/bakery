import React from 'react';
import Title from '@/components/common/Title'
import BoardWriteSection from '../components/baord/BoardWriteSection';

const BoardWriteView = () => {
  return (
    <div className='row'>
      <Title title='글쓰기'></Title>
      <BoardWriteSection />
    </div>
  );
};

export default BoardWriteView;