import React from 'react';
import Title from '@/components/common/Title'
import BoardModifySection from '../components/baord/BoardModifySection';
import { useLocation } from 'react-router-dom';

const BoardModifyView = () => {
  const location = useLocation()
	const {item} = location.state
  return (
    <div className='row'>
      <Title title='공지사항' />
      <BoardModifySection item={item} />
    </div>
  );
};

export default BoardModifyView;