import { useUsers } from "../hooks";
import TextField from "@mui/material/TextField";

const Input = () => {
  const { query, setQuery } = useUsers();

  const handlerChange = (e) => {
    setQuery(e.target.value);
  };
  return <TextField label="Search" value={query} onChange={handlerChange} />;
};

export default Input;
