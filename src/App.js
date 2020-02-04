import React from 'react';
import { carReducer as reducer } from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const store = createStore(reducer);
const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures car={state.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
