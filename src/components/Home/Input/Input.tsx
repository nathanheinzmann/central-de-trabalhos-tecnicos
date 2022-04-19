import TextField from '@material-ui/core/TextField';

const Input = ({
  setInputStudent,
  inputStudent,
  label
}) => {

  return (
    <TextField
      onChange={({ target }) => setInputStudent(target.value)}
      label={label}
      value={inputStudent}
    />
  );
}

export default Input;
