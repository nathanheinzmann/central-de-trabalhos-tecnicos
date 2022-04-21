import { createStyles, makeStyles } from '@material-ui/core/styles';
import * as S from './Modal.styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import React, { useState } from 'react';
import Input from '../Input';
import RangeSlider from '../RangeSlider';
import { useDispatch } from 'react-redux';
import { inputsActions } from '@src/store/modules/inputs';
import Select from '../Select';

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
          </S.WrapperInfoDialog>
          <S.WrapperInfoDialog>
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
