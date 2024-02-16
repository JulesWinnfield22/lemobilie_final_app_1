import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Pressable, ImageProps } from 'react-native'
import colors from '../assets/style/colors';
import Screen from '../components/Screen';
import Slider from '../components/Slider';

function Intro({ image, title, text }){
  const windowWidth = Dimensions.get('window').width;
  return ( 
    <View style={[styles.intro, {width: windowWidth}]}>
      <View style={{justifyContent: 'flex-end', borderRadius: 10, borderColor: colors.lightPrimary}}>
        <View style={{backgroundColor: 'transparent', justifyContent: 'center', height: 300}}>
          <Image style={{height: 200, width: '100%'}} source={image} />
        </View>
        <View style={{paddingVertical: 20, padding: 10, alignItems: 'center', gap: 15}}>
          <Text style={{textAlign: 'center', color: colors['gray-500'], fontWeight: 'bold', fontSize: 35}}>{ title }</Text>
          <Text style={{fontSize: 18, color: colors['gray-500'], textAlign: 'center'}}>
            {text}
          </Text>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
          
          </Text>
        </View>
      </View>
    </View>
  )
}

function Intro1(){
  return ( 
    <Intro
      title='Subscribe Mobile Insurance'
      image={require("../assets/images/ethio_tele.png")}
      text="It's always better to protect your mobile with insurance. It can be usefull for old as well as new phones."
    />
  )
}

function Intro2(){
  return (
    <Intro
      title='Mobile Insurance'
      image={require("../assets/images/ethio_tele.png")}
      text="Nyala insurance covers loss and damages to your phone. For high priced smart phones, this insurance cover is even more important."
    />
  )
}

function Intro3(){
  return (
    <Intro
      title='Nyala Insurance Covers'
      image={require("../assets/images/ethio_tele.png")}
      text="Nyala insurance covers loss and damages to your phone. For high priced smart phones, this insurance cover is even more important."
    />
  )
}

export default function Introduction({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Slider
          onPress={() => {
            navigation.navigate('signin')
          }}
          pages={[Intro2, Intro1, Intro3]}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    position: 'relative'
    // backgroundColor: colors.lightPrimary
  },
  intro: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    padding: 10,
    textAlign: 'center'
  },
  btn: {
    position: 'absolute',
    bottom: 50,
    height: 60,
    width: '100%',
    flex: 1,
    gap: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 10
  }
})