import { inputsActions } from '@src/store/modules/inputs';
import { Select, Input, RangeSlider } from '@src/components/Home';
import { useDispatch } from 'react-redux';
import * as S from './Modal.style';
import Dialog from '@material-ui/core/Dialog';
import React from 'react';

const Modal = ({
  filterContent,
  open,
  setOpen,
}: any) => {
  const dispatch = useDispatch();
  const { selectOptions } = filterContent;

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearFilter = () => {
    dispatch(inputsActions.clearFilter());
  };

  const mapSelectOptions = selectOptions.map(({ options, label, type }: any) => (
    <Select key={label} label={label} options={options} type={type} />
  ));


  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={handleClose}
    >
      <S.Wrapper>

        <S.WrapperInfoDialog>
          <Input
            label={'Nome do Autor'}
            type={'student'}
          />
          {mapSelectOptions}
        </S.WrapperInfoDialog>
        <RangeSlider />
        <S.Buttons>
          <S.Button onClick={handleClose}>
            Fechar
          </S.Button>
          <S.Button onClick={handleClearFilter}>
            Limpar Filtros
          </S.Button>
        </S.Buttons>
      </S.Wrapper>
    </Dialog >
  );
};

export default Modal;
