import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PropTypes } from 'prop-types';
import { formatPrice } from '../utils';

const Order = ({ fishes, order, deleteFromOrder }) => {
  const renderOrder = (key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status === 'available';
    const transitionOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };
    // make sure fish is loaded before we continue
    if (!fish) return null;
    if (isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition
                  classNames="count"
                  key={count}
                  timeout={{ enter: 500, exit: 500 }}
                >
                  <span>{count}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs {fish.name}
              {formatPrice(count * fish.price)}
              <button type="button" onClick={() => deleteFromOrder(key)}>
                &times;
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          Sorry, {fish ? fish.name : 'fish'} is no longer available
        </li>
      </CSSTransition>
    );
  };

  const orderIds = Object.keys(order);

  const total = orderIds.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <TransitionGroup component="ul" className="order">
        {orderIds.map(renderOrder)}
      </TransitionGroup>
      <div className="total">
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

Order.propTypes = {
  fishes: PropTypes.object,
  order: PropTypes.object,
  deleteFromOrder: PropTypes.func,
};

export default Order;

// class Order extends React.Component {

//   render() {
//     return (
//       <div className="order">
//         <p>Order</p>

//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// }

// export default Order;
