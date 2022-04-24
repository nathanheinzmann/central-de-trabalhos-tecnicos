import React, { useState } from 'react';
import * as S from './Filter.style';
import { Modal } from '@src/components/Home';

const Filter = ({ selectOptions, content }: any) => {
  const {
    image,
  } = content;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <S.Wrapper>
      <S.Button onClick={handleClickOpen}>
        <S.Image alt={image.alt} src={image.src} />
      </S.Button>
      <Modal
        open={open}
        selectOptions={selectOptions}
        setOpen={setOpen}
      />
    </S.Wrapper>
  );
};

export default Filter;
