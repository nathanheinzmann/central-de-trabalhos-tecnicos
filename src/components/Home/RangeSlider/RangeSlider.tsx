import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Select from '../Select';
import Input from '../Input';
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

  // create an array of numbers from 1995 to the current year
  const firstOptions = Array.from({ length: inputs.limits[1] - 1995 + 1 }, (v, i) => i + 1995);

  const secondOptions = Array.from({ length: currentYear - inputs.limits[0] + 1 }, (v, i) => i + inputs.limits[0]);

  return (
    <S.Wrapper>
      <Slider
        value={inputs.limits}
        onChange={(e, newValue) => handleAddFilter(newValue as number[])}
        min={1995}
        max={currentYear}
      />
      <p>entre {inputs.limits[0]} e {inputs.limits[1]}</p>
      {/* <Input
        position={0}
        type="limits"
      />
      <Input
        position={1}
        type="limits"
      /> */}
      {/* <Select
        type="limits"
        year={{
          value: inputs.limits[0],
          position: 0,
        }}
        options={firstOptions}
      /> */}
      {/* <Select
        type="limits"
        year={{
          value: inputs.limits[1],
          position: 1,
        }}
        options={secondOptions}
      /> */}
    </S.Wrapper>
  );
};

export default RangeSlider;
