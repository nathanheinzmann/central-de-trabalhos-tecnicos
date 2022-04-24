import React, { useState } from 'react';
import * as S from './Filter.style';
import { Modal } from '@src/components/Home';

const Filter = ({ filterContent }: any) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <S.Button style={{ backgroundColor: 'transparent' }} onClick={handleClickOpen}>
        <img alt="filtros" src="assets/images/filters.webp" />
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
