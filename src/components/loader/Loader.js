import React from 'react';
import { ActivityIndicator, View } from "react-native";
import PropTypes from 'prop-types'

import { colors } from '../../styles'

export default function Loader({ isLoading, size, color, style }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', ...style }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

Loader.defaultProps = {
  size: 'large',
  color: colors.white
}
