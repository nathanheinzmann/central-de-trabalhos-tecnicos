import { createStyles, makeStyles } from '@material-ui/core/styles';
import * as S from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import React, { useContext, useState } from 'react';
import UserInputContext from '@src/contexts';
import Input from '../Input';
import RangeSlider from '../RangeSlider';

const useStyles = makeStyles((theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const Modal = ({
  filterContent,
  open,
  handleClose,
  handleCancel,
}) => {
  const context = useContext(UserInputContext);
  const { inputStudent, setInputStudent } = context;
  const { selectOptions } = filterContent;
  const classes = useStyles();
  const [state] = useState({
    age: '',
    name: 'hai',
  });

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
            <FormControl className={classes.formControl}>
              <Input
                setInputStudent={setInputStudent}
                label={'Nome do Autor'}
                inputStudent={inputStudent}
              />
            </FormControl>
          </S.WrapperInfoDialog>
          <S.WrapperInfoDialog>
            {selectOptions.map((item) => (
              <FormControl className={classes.formControl}>
                <InputLabel>{item.label}</InputLabel>
                <NativeSelect
                  value={state.age}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-helper',
                  }}
                >
                  {item.options.map((option) => (
                    <option value={option}>
                      {option}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            ))}
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
    </Dialog>
  );
};

export default Modal;
