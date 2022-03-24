import firebase from 'firebase';
import { PropTypes } from 'prop-types';

const Logout = ({ setUid }) => {
  const logout = async () => {
    await firebase.auth().signOut();
    setUid(null);
  };
  return (
    <div>
      <button type="button" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

Logout.propTypes = {
  setUid: PropTypes.func,
};

export default Logout;
