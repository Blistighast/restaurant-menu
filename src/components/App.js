/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { PropTypes } from 'prop-types';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // set new fishes object to state
    this.setState({
      fishes,
    });
  };

  updateFish = (key, updatedFish) => {
    // 1 take a copy of current fish
    const fishes = { ...this.state.fishes };
    // 2 update state
    fishes[key] = updatedFish;
    // 3 set that to state
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    // 1 copy state
    const fishes = { ...this.state.fishes };
    // 2 delete fish
    fishes[key] = null;
    // 3 set to state
    this.setState({ fishes });
  };

  addToOrder = (key) => {
    // 1 take a copy of state
    const order = { ...this.state.order };
    // 2 either add to order or update number in order
    order[key] = order[key] + 1 || 1;
    // 3 call setstate to update state object
    this.setState({
      order,
    });
  };

  deleteFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  loadSample = () => {
    this.setState({
      fishes: sampleFishes,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                // need to pass key again for access for addToOrder
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          deleteFromOrder={this.deleteFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSample={this.loadSample}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object,
};

export default App;
