import TextField from '@material-ui/core/TextField';
import { UserInputDataProps } from '@src/contexts';

type Props = {
  label: string;
  setInputStudent: UserInputDataProps['setInputTitle'];
  inputStudent: UserInputDataProps['inputTitle'];
};

const Input = ({
  setInputStudent,
  inputStudent,
  label
}: Props) => {

  return (
    <TextField
      onChange={({ target }) => setInputStudent(target.value)}
      label={label}
      value={inputStudent}
    />
  );
}

export default Input;
