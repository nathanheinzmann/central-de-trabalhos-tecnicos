import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import UserInputContext from '@src/contexts';
import { useContext } from 'react';

const currentYear = new Date().getFullYear();

const RangeSlider = () => {
  const context = useContext(UserInputContext);
  const { inputLimits, setInputLimits } = context;

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={inputLimits}
        onChange={(e, newValue) => setInputLimits(newValue as number[])}
        min={1995}
        max={currentYear}
      />
      <p>entre {inputLimits[0]} e {inputLimits[1]}</p>
    </Box>
  );
}

export default RangeSlider;
