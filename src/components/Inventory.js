/* eslint-disable no-unreachable */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import firebase from 'firebase/app';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';
import Logout from './Logout';

const Inventory = ({
  addFish,
  updateFish,
  deleteFish,
  loadSample,
  fishes,
  storeId,
}) => {
  const [uid, setUid] = useState(null);
  const [owner, setOwner] = useState(null);
  const authHandler = async (authData) => {
    // 1 look up the current store in the firebase database
    const store = await base.fetch(storeId, { context: this });
    // 2 claim store if there is no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    // 3 set the state of the inventory component to reflect the current user
    setUid(authData.user.uid);
    setOwner(store.owner || authData.user.uid);
    // ({
    // if this was a class componenet and not stateless
    //   uid: authData.user.uid,
    //   owner: store.owner || authData.user.uid,
    // })
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        authHandler({ user });
      }
    });
  });

  const authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(authHandler);
  };

  // 1 check if logged in
  if (!uid) {
    return (
      <div>
        <Login authenticate={authenticate} />
        <button onClick={loadSample} type="button">
          Load Sample Menu
        </button>
      </div>
    );
  }

  // 2 check if they are not owner of current store
  if (uid !== owner) {
    return (
      <div>
        <p>Sorry, you are not the owner of this store</p>
        <Logout setUid={setUid} />
      </div>
    );
  }

  // 3 they must be the owner, just render the inventory
  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Logout setUid={setUid} />
      {Object.keys(fishes).map((key) => (
        <EditFishForm
          fish={fishes[key]}
          key={key}
          index={key}
          updateFish={updateFish}
          deleteFish={deleteFish}
        />
      ))}
      <AddFishForm addFish={addFish} />
      <button onClick={loadSample} type="button">
        Load Sample Fishes
      </button>
    </div>
  );
};
Inventory.propTypes = {
  addFish: PropTypes.func,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSample: PropTypes.func,
  fishes: PropTypes.object,
  storeId: PropTypes.string,
};

export default Inventory;

// class Inventory extends React.Component {
//   render() {
//     const { addFish, loadSample } = this.props;
//     return (
//       <div className="inventory">
//         <h2>Inventory</h2>
//         <AddFishForm addFish={addFish} />
//         <button onClick={loadSample} type="submit">
//           Load Sample Fishes
//         </button>
//       </div>
//     );
//   }
// }

// export default Inventory;
