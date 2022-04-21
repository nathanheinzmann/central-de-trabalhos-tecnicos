import React, { useState } from 'react';
import Modal from '../Modal';
import * as S from './styles';

const Filter = ({ filterContent }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <S.Button style={{ backgroundColor: 'transparent' }} onClick={handleClickOpen}>
        <img src="assets/images/filters.webp" />
      </S.Button>

      <Modal
        open={open}
        filterContent={filterContent}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Filter;
