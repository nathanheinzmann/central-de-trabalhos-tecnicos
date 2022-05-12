import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as S from './Input.style';
import { AppState } from '@src/store/store.types';
import { inputsActions } from '@src/store/modules/inputs';
import { InputsState, InputsTypes } from '@src/store/modules/inputs/inputs.types';
import { translate } from '@src/utils';

type Props = {
  type: InputsTypes;
}

const Input = ({ type }: Props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleOnFocus = () => {
    setSelected(true);
  };

  const handleOnBlur = () => {
    setSelected(false);
  };

  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);

  const handleAddFilter = (value: string) => {
    dispatch(inputsActions.addFilter(value, type));
  };

  useEffect(() => {
    setFilled(inputs[type as keyof typeof inputs].length > 0);
  }, [inputs, type]);

  return (
    <S.Wrapper>
      <S.Label className={`${selected || filled ? 'out' : 'in'}${selected ? ' selected' : ''}`}>{translate(type)}</S.Label>
      <S.Input
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={({ target }) => handleAddFilter(target.value)}
        value={String(inputs[type])}
      />
    </S.Wrapper>
  );
};

export default Input;
