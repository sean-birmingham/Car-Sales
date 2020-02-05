import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from "../actions";

const AddedFeature = props => {
  const handleRemoveFeature = () => {
    props.removeFeature(props.feature)
  }

  return (
    <li>
      <button onClick={handleRemoveFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
