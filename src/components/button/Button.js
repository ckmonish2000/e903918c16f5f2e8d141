import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import Loader from '../loader';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondaryBlue,
    width: '100%',
    height: 58,
    borderRadius: 16,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
})

export default function button({ isLoading = null, onPress, buttonTitle }) {
  return (
    <Button disabled={isLoading} style={styles.button} onPress={onPress} >
      {
        isLoading
          ? (
            <Loader />
          )
          : (
            <Text style={styles.buttonTitle}> {buttonTitle} </Text>
          )
      }
    </Button>
  )
}
