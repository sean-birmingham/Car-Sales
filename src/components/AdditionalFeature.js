import React from 'react';
import { connect } from "react-redux";
import { buyItem } from '../actions';

const AdditionalFeature = props => {
  const handleBuyItem = () => {
    props.buyItem(props.feature)
  }
  return (
    <li>
      <button onClick={handleBuyItem} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { buyItem })(AdditionalFeature);
