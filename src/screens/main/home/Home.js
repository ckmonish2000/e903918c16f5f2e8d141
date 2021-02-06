import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar } from "react-native";
import { Content, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";


import { colors } from "../../../styles";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.hawkesBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    borderRadius: 16,
    backgroundColor: colors.white,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: '80%',
    height: '60%'
  },
  input: {
    marginVertical: 10,
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: 70
  }
});

function Home({ navigation }) {
  const [isLoadingSubmit, setIsLoadingSubmit] = React.useState();
  const [example, setExample] = React.useState();
  const [exampleData, setExampleData] = React.useState({});

  function handleExampleResponse(exampleData) {
    navigation.navigate('Example', { exampleData });
  }

  function handleSubmit() {
    if (!Validator.validateFeild(example)) return Toast.warning("please fill the ...");
    setIsLoadingSubmit(true);
      // .catch(Toast.error)
      // .finally(() => setIsLoadingSubmit(false));
      handleExampleResponse(exampleData)
  };

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={colors.secondaryBlue} barStyle='light-content' />

      <View style={styles.inputContainer}>

        <Item rounded style={styles.input} >
          <Input
            placeholder='Enter Input'
            placeholderTextColor={colors.warmGrey}
            value={example}
            onChangeText={example =>{setExampleData({id:example}); setExample(example)}}
          />
        </Item>
        <View style={styles.buttonContainer}>
          <Button isLoading={isLoadingSubmit} onPress={handleSubmit} buttonTitle='SUBMIT FORM' />
          <Button isLoading={isLoadingSubmit} onPress={()=>{ 
            
            
  fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=clW4UBYNN3woIV0dwamZNQCxX65cT2nTR6b8gVR3`)
  .then(e=>e.json())
  .then(val=>{
    var objs=val?.near_earth_objects;
    var randomIdx=Math.floor(Math.random()*objs?.length)
    // working random id generator
    setIsLoadingSubmit(true);
    console.log(objs[randomIdx].id);
    navigation.navigate('Example',{exampleData:{ id:objs[randomIdx].id}} );
    
    });
           }} buttonTitle='Random' />
        </View>

      </View>

    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.object,
};

Home.defaultProps = {
  navigation: {},
};

module.exports = Home;
