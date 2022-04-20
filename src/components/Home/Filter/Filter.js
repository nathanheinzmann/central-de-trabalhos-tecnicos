import UserInputContext from '@src/contexts';
import React, { useContext, useState } from 'react';
import Modal from '../Modal';
import * as S from './styles';

const Filter = ({ filterContent }) => {
  const [open, setOpen] = useState(false);
  const { clearAllFilters } = useContext(UserInputContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    clearAllFilters();
  };

  return (
    <div>
      <S.Button style={{ backgroundColor: 'transparent' }} onClick={handleClickOpen}>
        <img src="assets/images/filters.webp" />
      </S.Button>

      <Modal
        open={open}
        handleClose={handleClose}
        filterContent={filterContent}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Filter;
