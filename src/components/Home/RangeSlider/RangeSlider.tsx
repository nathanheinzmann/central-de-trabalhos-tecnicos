import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { inputsActions } from '@src/store/modules/inputs';
import { InputsState } from '@src/store/modules/inputs/inputs.types';
import { AppState } from '@src/store/store.types';
import { useDispatch, useSelector } from 'react-redux';

const currentYear = new Date().getFullYear();

const RangeSlider = () => {
  const inputs: InputsState = useSelector(({ inputs }: AppState) => inputs);
  const dispatch = useDispatch();

  const handleAddFilter = (value: number[]) => {
    dispatch(inputsActions.addFilter(value, 'limits'));
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={inputs.limits}
        onChange={(e, newValue) => handleAddFilter(newValue as number[])}
        min={1995}
        max={currentYear}
      />
      <p>entre {inputs.limits[0]} e {inputs.limits[1]}</p>
    </Box>
  );
};

export default RangeSlider;
