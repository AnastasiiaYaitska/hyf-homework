import Input from "./components/Input/Input";
import UsersList from "./components/UsersList/UsersList";
import { useUsers } from "./components/hooks";
import BeatLoader from "react-spinners/BeatLoader";
import "./App.css";
import { useEffect } from "react";
import { fetchingUsers } from "./components/fetchAPI";

function App() {
  const { isLoading, setIsLoading, setUsers, query, setError, error } =
    useUsers();

  useEffect(() => {
    const data = async () => {
      if (!query) {
        setError(null);
        setIsLoading(false);
        setUsers([]);
        return;
      }
      try {
        setIsLoading(true);
        const response = await fetchingUsers(query);
        setUsers(response);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    data();
  }, [query, setError, setIsLoading, setUsers]);

  return (
    <div>
      <h1>Github user searcher</h1>
      <Input />
      {error && <p>{error}</p>}
      {isLoading && <BeatLoader color="#36d7b7" />}
      <UsersList />
    </div>
  );
}

export default App;
