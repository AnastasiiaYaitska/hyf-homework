import { createContext, useState } from "react";
import PropTypes from "prop-types";
// import { fetchingUsers } from "../fetchAPI";

export const ContextWrapper = createContext({});

const UseContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <ContextWrapper.Provider
      value={{
        users,
        setUsers,
        isLoading,
        setIsLoading,
        query,
        setQuery,
        error,
        setError,
      }}
    >
      {children}
    </ContextWrapper.Provider>
  );
};

UseContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UseContext;
