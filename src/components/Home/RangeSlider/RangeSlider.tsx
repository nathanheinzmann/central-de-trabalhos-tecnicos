import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './RangeSlider.style';
import { inputsActions } from '@src/store/modules/inputs';
import { InputsState } from '@src/store/modules/inputs/inputs.types';
import { AppState } from '@src/store/store.types';

const currentYear = new Date().getFullYear();

const RangeSlider = () => {
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);
  const dispatch = useDispatch();

  const handleAddFilter = (value: number[]) => {
    dispatch(inputsActions.addFilter(value, 'limits'));
  };

  return (
    <S.Wrapper>
      <Slider
        value={inputs.limits}
        onChange={(e, newValue) => handleAddFilter(newValue as number[])}
        min={1995}
        max={currentYear}
      />
      <p>entre {inputs.limits[0]} e {inputs.limits[1]}</p>
    </S.Wrapper>
  );
};

export default RangeSlider;
