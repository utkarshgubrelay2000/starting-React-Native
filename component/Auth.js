import 'react-native-gesture-handler';

import React, { Component, useState} from 'react';
import { StyleSheet, Text, View,Animated,Button } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import {  createStackNavigator  } from '@react-navigation/stack';

 function Login({navigation}) {
    return (
      <View>
          <Text>
              Login
          </Text>
              <Button onPress={()=>{
                  navigation.navigate("Home",{userName:"Utkarsh"})
              }} title="LoGin"/>
      </View>
    );
  }
  function SignUp({navigation}) {
    return (
      <View>
          <Text>
              SignUp
          </Text>
              <Button onPress={()=>{
                  navigation.navigate("Login")
              }} title="Register"/>
      </View>
    );
  }
  const Stack =  createStackNavigator();
const ContactStackNavigator = ({route,navigation}) => {
     // console.log(route.params.details)
      const [authType,setAuthType]=useState("Login")
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: authType,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerRight:()=>(
          <FontAwesome name="sign-in" size={24} color="black"   onPress={()=>{
            if(authType==='Register'){
               setAuthType('Login');
            navigation.navigate('Login',{userName:"Utkarsh"})}
            else{
                setAuthType("Register")
                navigation.navigate('SignUp',{userName:"Utkarsh"})
            }
    }}/>
           
            
        )
        }}>    
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
export default ContactStackNavigator;