import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import Screen from '../../../components/Screen';
import colors from '../../../assets/style/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import AsynStorage from '@react-native-async-storage/async-storage';
export default function Footer({navigation}) {
  const user = useSelector(state => state.user);
  function editprofile() {
    navigation.navigate('editProfile');
  }

  return (
    <Screen>
      <View
        style={{backgroundColor: colors['gray-300'], height: '100%', gap: 10}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 60,
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
            }}>
            <AntDesign
              onPress={() => navigation.goBack()}
              name="back"
              size={24}
              color="#212529"
            />

            <Text style={{color: '#212529', fontSize: 20, fontWeight: '700'}}>
              Account
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            height: '100%',
            borderRadius: 10,
            flexDirection: 'column',
          }}>
          <View style={{alignItems: 'center', margin: 20}}>
            <Image
              style={{width: 80, height: 80, borderRadius: 100}}
              source={require('../../../assets/images/Messi.jpg')}></Image>
            <Text style={{color: '#212529', fontWeight: '700', fontSize: 20}}>
              Lionel Messi
            </Text>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: '400'}}>
                Acount Credit:
              </Text>
              <Text style={{color: colors['gray-500'], fontSize: 20}}>652</Text>
            </View>
          </View>

          <View style={{gap: 10, margin: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#e6ecf2',
                padding: 15,
                borderRadius: 100,
              }}>
              <Text style={{color: 'black'}}>Haben tesfay</Text>
              <Pressable onPress={editprofile}>
                <Entypo name="edit" size={20} color="black"></Entypo>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#e6ecf2',
                padding: 15,
                borderRadius: 100,
              }}>
              <Text style={{color: 'black'}}>09486321578</Text>
              <Pressable onPress={editprofile}>
                <Entypo name="edit" size={20} color="black"></Entypo>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#e6ecf2',
                padding: 15,
                borderRadius: 100,
              }}>
              <Text style={{color: 'black'}}>haben@gmail.com</Text>
              <Pressable onPress={editprofile}>
                <Entypo name="edit" size={20} color="black"></Entypo>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#e6ecf2',
                padding: 15,
                borderRadius: 100,
              }}>
              <Text style={{color: 'black'}}>Bole</Text>
              <Pressable onPress={editprofile}>
                <Entypo name="edit" size={20} color="black"></Entypo>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#e6ecf2',
                padding: 15,
                borderRadius: 100,
              }}>
              <Text style={{color: 'black'}}>Male</Text>
              <Pressable onPress={editprofile}>
                <Entypo name="edit" size={20} color="black"></Entypo>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}
