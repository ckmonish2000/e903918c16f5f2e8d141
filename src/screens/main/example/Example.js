import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar, ScrollView, Linking } from "react-native";
import { Content, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";



import  { colors } from "../../../styles";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.palePurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    borderRadius: 16,
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 10
  },
 heading:{
   fontSize:30,
   textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
    color:"white"

 },
 body:{
  fontSize:20,
  color:"white",
  marginTop:10,
  marginBottom:50
 },
 link:{
  fontSize:30,
  textDecorationLine: "underline",
   textDecorationStyle: "solid",
   textDecorationColor: "#000",
   color:"blue"
 },

});

function Example({ navigation }) {

  const [isLoading, setIsLoading] = React.useState();
  const example  = navigation.getParam('exampleData');
  const [Data, setData] = React.useState({})
  const apiKey="clW4UBYNN3woIV0dwamZNQCxX65cT2nTR6b8gVR3"



React.useEffect(() => {
console.log(example.id);

  
  fetch(`https://api.nasa.gov/neo/rest/v1/neo/${example?.id}?api_key=${apiKey}`)
  .then(e=>e.json())
  .then(val=>{
    console.log(val);
    if(!val.error){
 setData({
   name:val?.name,
   nasa_jpl_url:val?.nasa_jpl_url,
   threat:String(val?.is_potentially_hazardous_asteroid),
   error:false
  })}
  else{
    setData({error:true})
  }
    });

}, [example])




  if(!Data.error){
  return (
    <View style={styles.root}>
    
       <Text style={styles.heading}>Name Of Astroid: </Text>
       <Text style={styles.body}>{Data.name}</Text>
    
       <Text  style={styles.heading} >Is It Threat</Text>
       <Text style={styles.body} > {Data.threat}</Text>
  

       <Text style={styles.link} onPress={()=>{Linking.openURL(Data.nasa_jpl_url)}}>Know More</Text>

       <View style={{flexDirection:"row",padding:20}}></View>
      <StatusBar backgroundColor={colors.secondaryBlue } barStyle='light-content' />
    </View>
  );}
  else{
    return <Text style={styles.heading}>Something went Wrong</Text>
  }
}

Example.propTypes = {
  navigation: PropTypes.object,
};

Example.defaultProps = {
  navigation: {},
};

module.exports = Example;
