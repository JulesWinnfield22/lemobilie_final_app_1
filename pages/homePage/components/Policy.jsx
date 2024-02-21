import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Screen from "../../../components/Screen";
import colors from "../../../assets/style/colors";
import { LinearGradient } from 'expo-linear-gradient';
import { getId } from "../../../utils/utils";
// import { Entypo } from '@expo/vector-icons'

const data = [
  {
    icon: '',
    name: 'How It Works'
  }
]

export default function Footer() {
  return (
    <Screen barStyle="dark-content">
      {/* <View style={styles.imageContainer}>
        <Image style={{resizeMode: 'cover', height: '100%', width: '100%'}} source={require('../../../assets/images/phone.jpg')} />
        <Text style={{lineHeight: 40, color: 'white',  fontSize: 40, fontWeight: '800'}}>
          Mobile
        </Text>
        <Text style={{lineHeight: 40, color: 'white',  fontSize: 40, fontWeight: '800'}}>
          Insurance
          </Text>
      </View>
      <View style={{backgroundColor: '#000', flex: 1, gap: 10, padding: 5}}>
        {
          data.map((el) => {
            return (
              <View style={{elevation: 2, shadowOpacity: .25, shadowColor: '#fff', shadowRadius: 6, borderRadius: 10, gap: 10, width: 100, height: 130, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff1'}} key={getId.next().value}>
                <Text style={{color: 'white'}}>{ el.name }</Text>
              </View>
            )
          })
        }
      </View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '43%',
    width: '100%',
    position: 'relative',
    // borderBottomWidth: 1,
    borderBottomColor: colors['gray-300']
  },
  container: {
    flexGrow: 1,
  },
});
