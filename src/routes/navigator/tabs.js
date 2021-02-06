import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, icons } from '../../styles';
import Constants from '../../utils/Constants';

const { NAVIGATION: { headers, routes } } = Constants;

// stack navigators
import { homeNavigator } from './stacks';

const tabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: homeNavigator,
      navigationOptions: { title: headers.Tabs.HOME_TAB },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case "HomeTab":
            return (
              <MaterialCommunityIcons name='home' size={28} color={tintColor} />
            )
          default:
            return <View />
        }
      },
      initialRouteName: headers.Tabs.HOME_TAB,
      tabBarOptions: {
        showLabel: true,
        activeTintColor: colors.primaryBlue,
        inactiveTintColor: colors.blueGrey,
        style: {
        },
        tabStyle: {
        },
        labelStyle: {
        },
      },
      swipeEnabled: false,
    }),
  }
)

export default tabNavigator;
