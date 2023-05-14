import { useUsers } from "../hooks";
import UserItem from "../UserItem/UserItem";

const UsersList = () => {
  const { users, query } = useUsers();

  const searchUsers = users.filter(({ login }) =>
    login.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ul>
      {query === "" && searchUsers.length === 0 ? (
        <li>No results...</li>
      ) : (
        searchUsers.map(({ login, id }) => {
          return <UserItem key={id} label={login} />;
        })
      )}
    </ul>
  );
};

export default UsersList;
