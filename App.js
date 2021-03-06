import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { StyleSheet, Text, View,Animated } from 'react-native';
import { Appbar,TextInput,Button,Avatar } from 'react-native-paper';
import { Platform } from 'react-native';
import Preloader from './component/Preloader'
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
import './App.css'
export default class App extends Component{
  state={
    fname:"",
    city:"",err:"",temp:0,clouds:"",fadeValue: new Animated.Value(0),
    preloader:true
  }
 
 componentDidMount(){
   Animated.timing(this.state.fadeValue,{toValue:1,duration:1000}).start()

   setTimeout(() => {
    this.setState({preloader:false})
  }, 4000);

  }
  submit=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=18f9ea233fd551af72d31749f24b0658`)
    .then(response => response.json())
    .then(commits=>{
      
      console.log(commits)
      this.setState({temp:parseInt(commits.main.temp)-273,clouds:commits.weather[0].main})
    //  Animated.timing(this.state.fadeValue,{toValue:1,duration:1000}).start()
     if(commits.cod) {
       this.setState({err:commits.message})
      // console.log(this.state.err)
     }
    }
    )

  }
 

  render()

 { return (
    <View style={styles.container}>
{this.state.preloader?<Preloader  borderColor="white" zoomerBgc="white" textColor="white" />:
<div className='Drawer'>
     <Appbar.Header style={{backgroundColor:"purple"}}>
       <Appbar.Content title="Casting !!!!!! Weather Forecasting" style={styles.appBarFont} />
    </Appbar.Header>

    <View style={styles.textController}>
    <TextInput
      label="Name!!!! Your Sweet Name"
      value={this.state.fname}
      onChangeText={text => this.setState({fname:text})}
    />
    <Animated.View style={{opacity:this.state.fadeValue}}>
    <Text style={styles.Head} >
    Lets Check <br/> Hows the Weather?
    </Text>
    </Animated.View>
    <TextInput
      label="City"
      value={this.state.city}
      onChangeText={text => this.setState({city:text})}
    />
      </View>
      
          <Animated.View style={{opacity:this.state.fadeValue}}>
      <Button icon="camera" mode="contained"  style={{backgroundColor:'purple',margin:20}} onPress={() => this.submit()}>
    Press me
  </Button> </Animated.View>
 {this.state.err?<Text style={styles.Head} > {this.state.err}</Text>:
 <>
 <Text style={{justifyContent:"center",textAlign:"center"}}>
{this.state.clouds==="Rain"?
<Animated.View style={{opacity:this.state.fadeValue}}>
  <Text  style={{fontSize:20}} > {this.state.fname} looks like it is Raining Outside   
  <Avatar.Image size={124} source="https://i.pinimg.com/originals/3c/f6/b7/3cf6b70a11aa145cce6c6962b318e7e0.jpg"/>
    </Text>
</Animated.View>
  :this.state.temp>20?
  <Animated.View style={{opacity:this.state.fadeValue}}>
  <Text style={{fontSize:20}} > {this.state.fname} !!!! The Weather is {this.state.temp} degree Celius    
  <Avatar.Image size={124} source="https://i.pinimg.com/originals/46/99/ed/4699ed62b71ce4c2b51f33c4eb140f63.png"/>
   </Text>
</Animated.View>
  :this.state.temp===0?<></>:
  <Animated.View style={{opacity:this.state.fadeValue}}>
  <Text  style={{fontSize:20}} > {this.state.fname} !!!! The Weather is {this.state.temp} degree Celius  
  <Avatar.Image size={124} source="data:image/jpeg;base64,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"/>
     </Text>
  </Animated.View>
}
 </Text>
  </>
 }
<Text style={styles.footer}>
  App Build by Utkarsh Gubrelay. As a Starting Native Project
</Text>
      <StatusBar style="auto" /> </div>
}
    </View>
  );}
}

const styles = StyleSheet.create({
 footer:{
  clear: "both",
  position: "relative",
  marginTop:100,
 width:400,padding:20,fontSize:12
 },
  Head:{
    margin:20,
    padding:7,
    fontSize:30,
    alignItems:"center",
  fontFamily:"Open Sans",
  textAlign:"center",marginTop:100
  },
  appBarFont:{
    alignItems:"center",
    fontWeight:"600",fontFamily:"cursive"
  },
  textController:{
    marginTop:100,
    width:300,
    margin:'auto'
  },container:{
    minHeight:100
  }
});
