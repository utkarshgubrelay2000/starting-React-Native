import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import {TextInput,Appbar} from 'react-native-paper'
export default class App extends Component{
  state={
    fname:"",
    dname:""
  }
  render()

 { return (
    <View style={styles.container}>
    helo world
      <StatusBar style="auto" />
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inputField:{
    margin:8,
    padding:3,
    backgroundColor:"purple"
  }
});
