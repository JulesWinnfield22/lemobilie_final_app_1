import React from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import Screen from '../components/Screen'
import Form from '../components/form/Form'
import Input from '../components/form_elements/Input'
import colors from '../assets/style/colors'
// import { AntDesign } from '@expo/vector-icons'

export default function SignIn({ navigation }) {

  function submitForm(values) {
    navigation.navigate('verify_phone', {phone: `+251${values.phone}`})
  }

  return (
    <Screen>
      <View style={styles.container}>
        <View style={{justifyContent: 'flex-end', flexGrow: 1, gap: 10, alignItems: 'center', paddingHorizontal: 60}}>
          <Text style={{textAlign:'center', color: colors['gray-500'], fontWeight: '700', fontSize: 18}}>Your phone number</Text>
          <Text style={{textAlign:'center', color: colors['gray-500']}}>Please confirm your country code and enter your phone number.</Text>
        </View>
        <Form
          style={{flexGrow: 1}}
          form={({ submit }) => {
            return (
              <>
                <Input
                  Left={<Text style={{fontSize: 16, color: colors['gray-500'],}}>+251</Text>}
                  name='phone'
                  autoFocus={true}
                  validation='required|phone_251'
                  label='Phone number'
                  placeholder='00 000 000'
                  keyboardType='phone-pad'
                />
                <Pressable style={{position: 'absolute', bottom: 20, right: 20}} onPress={() => submit(submitForm)}>
                  <View style={{justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 40, backgroundColor: colors.primary}}>
                    {/* <AntDesign color='white' size={20} name='arrowright' /> */}
                  </View>
                </Pressable>
              </>
            )
          }}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    gap: 20,
    position: 'relative'
  }
})