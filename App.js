/**
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View } from 'react-native';
 import { Root } from "native-base";
 import * as Font from 'expo-font';

 import Router from "./src/routes";


 export default class App extends Component {
   state = {
     didLoad: false,
   };

   async componentWillMount() {
     await Font.loadAsync({
       Roboto: require('native-base/Fonts/Roboto.ttf'),
       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
     this.setState({ didLoad: true });
   }


   render() {
     const { didLoad } = this.state;
     if (!didLoad) return <View />;

     return (
       <Root>
           <Router />
       </Root>
     );
   }
 };
