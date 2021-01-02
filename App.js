import 'react-native-gesture-handler';

import React, { Component} from 'react';
import { StyleSheet, Text, View,Animated,Button } from 'react-native';

import { Platform } from 'react-native';
//import Preloader from './component/Preloader'
import { NavigationContainer } from '@react-navigation/native';
import {  createDrawerNavigator  } from '@react-navigation/drawer';
import {  createStackNavigator  } from '@react-navigation/stack';

function Prelouder ({navigation}){
  
  return(

    <>
      <View style={styles.preloader} >
        <Text style={styles.preloaderh3}>
          WelCome To Navigation
        </Text>
       <Button
      title="Proceed"

      onPress={() => navigation.navigate('Home',{ otherParam: 'anything you want here',name:'guv'}) }
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
function HomeScreen({route,navigation}) {
 console.log(route)
 const [count, setCount] = React.useState(0);
 React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => setCount(c => c + 1)} title="Update count" />
    ),
  });
}, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen screem  {count} </Text>
      <Button
        title="Go to Details"
        
        onPress={() => navigation.navigate('Home2')}
      />
    </View>
  );
}

const Drawer =  createDrawerNavigator();
const Stack =  createStackNavigator();
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={Prelouder}>
      <Stack.Screen name="Contact" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home" component={ContactStackNavigator} />
        <Drawer.Screen name="Home2" component={Contact} />
      </Drawer.Navigator>
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