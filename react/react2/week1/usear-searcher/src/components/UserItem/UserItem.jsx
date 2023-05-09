import PropTypes from "prop-types";

const UserItem = ({ label }) => {
  return <li>{label}</li>;
};

UserItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default UserItem;
