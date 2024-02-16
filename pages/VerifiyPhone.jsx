import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable, Image } from 'react-native'
import Screen from '../components/Screen'
import Form from '../components/form/Form'
import Input from '../components/form_elements/Input'
import colors from '../assets/style/colors'
// import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import BoxNumberInput from '../components/form_elements/BoxNumberInput'

const codeLength = Array(6).fill(0)

export default function SignIn({ navigation }) {
  const [active, setActive] = useState(0)
  const [code, setCode] = useState(codeLength)

  const route = useRoute()
  const data = route.params

  function submitForm(valeus) {
    navigation.navigate('verify_phone')
  }

  function onFocus(idx) {
    setActive(idx)
  }

  function onChange(val, idx) {
    if(val) {
      const tempCode = [...code]
      tempCode[idx] = val
      setCode(tempCode)
      setActive(idx + 1)
    }
  }

  useEffect(() => {
    if(code.every(el => el !== 0)) {
      navigation.navigate('register')
    }
  }, [code])
  return (
    <Screen>
      <View style={styles.container}>
        <View style={{justifyContent: 'center', flexGrow: 1, gap: 10, alignItems: 'center', paddingHorizontal: 30}}>
          {/* <FontAwesome size={120} name='commenting' /> */}
          <Text style={{textAlign:'center', fontWeight: '700', color: colors['gray-500'], fontSize: 18}}>Enter code</Text>
          <Text style={{textAlign:'center', color: colors['gray-500']}}>We have sent an sms with an activation code to your phone {data?.phone}.</Text>
          <View style={{marginTop: 12, gap: 5, flexDirection: 'row'}}>
            {
              codeLength.map((el, idx) => {
                return <BoxNumberInput onChange={(val) => onChange(val, idx)} onFocus={() => onFocus(idx)} active={active == idx} key={idx} />
              })
            }
          </View>
        </View>
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