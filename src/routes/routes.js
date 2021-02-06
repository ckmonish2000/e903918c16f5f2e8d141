import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage  from "@react-native-community/async-storage";

import { createAppContainer } from 'react-navigation';
import { authNavigator } from './navigator/stacks';
import tabNavigator from './navigator/tabs';

import Loader from '../components/loader';

import { colors } from '../styles';

class Routes extends React.PureComponent {

  render() {
    const App = createAppContainer(tabNavigator);
    return <App />;
  }
}


export default Routes;
