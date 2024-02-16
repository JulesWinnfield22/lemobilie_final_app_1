import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import Form from '../components/form/Form'
import Input from '../components/form_elements/Input'
import Screen from '../components/Screen'
import colors from '../assets/style/colors'
import FormSubmitBtnText from './register/components/FormSubmitBtnText'

export default function Login({ navigation }) {

  function submitForm({values}) {
    navigation.navigate('home')
  }
  return (
    <Screen style={{relative: 'relative', flexDirection: 'column', justifyContent: 'center'}}> 
      <View style={{position: 'absolute',  backgroundColor: colors.primary, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, top: 1, width: '100%', zIndex: -1, height: '70%'}}></View>
      <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 35, justifyContent: 'center'}}>
        <View style={{height: '100%', width: '100%'}}>
          <View style={{height: 250, gap: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: 'white', fontWeight: '800'}}>LEMOBILIE</Text>
            <Text style={{color: 'white', fontSize: 15}}>Fill the below information to login.</Text>
          </View>
          <View style={{backgroundColor: 'white', paddingVertical: 10, height: 350, elevation: 2, borderRadius: 20, width: '100%'}}>
            <Text style={{textAlign: 'center', fontSize: 25, fontWeight: '700', padding: 10, color: 'black'}}>Login Account</Text>
            <Form style={{}} form={({submit}) => {
              return (
                <>
                  <Input
                    auto
                    name='phone'
                    label='Phone'
                    validation='required|phone'
                  />
                  <Input
                    name='password'
                    label='Password'
                    validation='required'
                  />
                  <FormSubmitBtnText
                    onPress={() => submit(submitForm)}
                    style={{borderRadius: 100}}
                    text='Login' />
                </>
              )
            }}>
            </Form>
          </View>
          <View style={{flexGrow: 1, gap: 6, padding: 20, alignItems: 'center'}}>
            <Text style={{justifyContent: 'center', color: colors['gray-500'], fontSize: 16, alignItems: 'center', color: colors['gray-500']}}>Don't Have an Account?</Text>
            <Pressable onPress={() => navigation.navigate('register')}>
              <Text style={{color: colors.primary, fontSize: 18, fontWeight: '800'}}>REGISTER</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  }
})