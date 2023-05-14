import { useContext } from "react";
import { ContextWrapper } from "./UseContext/UseContext";

export const useUsers = () => {
  const {
    users,
    setUsers,
    isLoading,
    setIsLoading,
    query,
    setQuery,
    error,
    setError,
  } = useContext(ContextWrapper);
  return {
    users,
    setUsers,
    isLoading,
    setIsLoading,
    query,
    setQuery,
    error,
    setError,
  };
};
