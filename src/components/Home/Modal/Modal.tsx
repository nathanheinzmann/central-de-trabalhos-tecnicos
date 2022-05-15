import { useDispatch } from 'react-redux';
import React from 'react';
import * as S from './Modal.style';
import { inputsActions } from '@src/store/modules/inputs';
import { Select, Input, RangeSlider } from '@src/components/Home';

type ModalProps = {
  open: boolean;
  selectOptions: {
    type: string;
    options: string[];
  }[];
  setOpen: (value: boolean) => void;
};

const Modal = ({
  selectOptions,
  open,
  setOpen,
}: ModalProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearFilter = () => {
    dispatch(inputsActions.clearFilter());
  };

  const mapSelectOptions = selectOptions.map(({ options, type }: any) => (
    <Select key={type} options={options} type={type} />
  ));

  return (
    <S.Modal className={open ? 'open' : ''}>
      <S.Wrapper>
        <S.WrapperInfoDialog>
          {mapSelectOptions}
          <Input type={'student'} />
          <Input type={'teacher'} />
          <Input type={'knowledge'} />
          <Input type={'keywords'} />
        </S.WrapperInfoDialog>
        <RangeSlider />
        <S.Buttons>
          <S.Button onClick={handleClearFilter}>
            Limpar Filtros
          </S.Button>
          <S.Button isBlue onClick={handleClose}>
            Fechar
          </S.Button>
        </S.Buttons>
      </S.Wrapper>
    </S.Modal >
  );
};

export default Modal;
