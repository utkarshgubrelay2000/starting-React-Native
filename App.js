import 'react-native-gesture-handler';

import React, { Component} from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';

import { Platform } from 'react-native';
//import Preloader from './component/Preloader'
import { NavigationContainer } from '@react-navigation/native';
import {  createDrawerNavigator  } from '@react-navigation/drawer';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import  Auth from './component/Login'

function HomeScreen({route,navigation}) {
 //const [count, setCount] = React.useState(0);
//  React.useLayoutEffect(() => {
//   navigation.setOptions({
//     headerLeft: () => (
//       <Button onPress={navigation.toggleDrawer()} title='Menu'/>
//     ),
//   });
// }, [navigation]);
  return (
    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen Screen {route.params!==undefined?<Text> {route.params.userName}</Text>:null} </Text>
      <Button
        title="Auth"
        onPress={() => navigation.navigate('Auth',{details:"helo"})}
      />
    <Image
        source={{
          uri: 'https://ekluvya.odw.rocks/assets/images/class/class-9.jpg',
        }}
      />
    </View>
  );
}

const Drawer =  createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}  
        options={{title:()=> <Ionicons name="md-home" size={22} color="purple" >Home</Ionicons> }} />
        <Drawer.Screen name="Auth" component={Auth} 
          options={{title:()=><AntDesign name="user" size={24} color="purple" >Auth</AntDesign> }}
        />
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