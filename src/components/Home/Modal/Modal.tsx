import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect, useRef } from 'react';
import * as S from './Modal.style';
import { inputsActions } from '@src/store/modules/inputs';
import { Select, Input, RangeSlider } from '@src/components/Home';

const Modal = ({
  filterContent,
  open,
  setOpen,
}: any) => {
  const dispatch = useDispatch();
  const { selectOptions } = filterContent;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearFilter = () => {
    dispatch(inputsActions.clearFilter());
  };

  const handleOutsideClick = useCallback(
    (e: any) => {
      if (open && modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    },
    [open, setOpen],
  );

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const mapSelectOptions = selectOptions.map(({ options, type }: any) => (
    <Select key={type} options={options} type={type} />
  ));

  return (
    <S.Modal open={open}>
      <S.Wrapper ref={modalRef}>
        <S.WrapperInfoDialog>
          <Input type={'student'} />
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
    </S.Modal >
  );
};

export default Modal;
