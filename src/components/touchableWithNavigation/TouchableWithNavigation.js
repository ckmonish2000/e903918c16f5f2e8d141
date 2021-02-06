import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation'

function TouchableWithNavigation({ navigateTo = null, navigation, children }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(navigateTo)}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export default withNavigation(TouchableWithNavigation);
