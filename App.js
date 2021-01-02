import 'react-native-gesture-handler';

import React, { Component} from 'react';
import { StyleSheet, Text, View,Animated,Button } from 'react-native';

import { Platform } from 'react-native';
//import Preloader from './component/Preloader'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function Prelouder ({navigation}){
  return(
    <>
      <View style={styles.preloader} >
        <Text style={styles.preloaderh3}>
          WelCome To Navigation
        </Text>
       <Button
      title="Proceed"
      onPress={() => navigation.navigate('Home')}
      />
      </View>
      </>
) 
}
function Contact (){
  return(
      <View >
         <Text>
           aao bhai
           </Text> 
      </View>
) 
}
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen screem</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="About" component={Prelouder} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
//import './App.css'

const styles = StyleSheet.create({

  
  preloader:{
      
      backgroundColor: "black",
     
      flex:1
    },
   button:{
   backgroundColor:"green"
   },
  
    
  preloaderh3:{
      color: "white",
      position: "relative",
      fontWeight: "300",
      top:30
    }
});
export default App