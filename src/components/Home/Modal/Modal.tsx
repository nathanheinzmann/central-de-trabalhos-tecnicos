import { inputsActions } from '@src/store/modules/inputs';
import { Select, Input, RangeSlider } from '@src/components/Home';
import { useDispatch } from 'react-redux';
import * as S from './Modal.style';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
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

  const handleCancel = () => {
    dispatch(inputsActions.clearFilter());
    setOpen(false);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <div>
          <S.WrapperInfoDialog>
            <Input
              label={'Nome do Autor'}
              type={'student'}
            />
            <Select options={selectOptions[0].options} />
            <FormControl>
              <RangeSlider />
            </FormControl>
          </S.WrapperInfoDialog>
          <S.Buttons>
            <S.Button onClick={handleCancel}>
              Cancel
            </S.Button>
            <S.Button onClick={handleClose}>
              Ok
            </S.Button>
          </S.Buttons>
        </div>
      </DialogContent>
    </Dialog >
  );
};

export default Modal;
