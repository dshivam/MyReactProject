import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore' ;

import App from './App';

require('./aem');
// const apiai = require('apiai');
// import ManageAccount from './widgetcomponents/ManageAccount/ManageAccount';

// import OverlayModal from './components/OverlayModal/OverlayModal';
// import BalancesServices from './widgetcomponents/BalancesServices/BalancesServices';

// require('./sass/base/base.scss');

const store = configureStore();
window.store = store;
// window.apiai = apiai;

ReactDOM.render(
  <Provider store={store}>
  <IntlProvider locale="en">
    <App />
  </IntlProvider></Provider>,
  document.getElementById('root')
);
