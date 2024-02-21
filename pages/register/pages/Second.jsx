import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import FirsAndSecondPageWrapper from '../components/FirstAndSecondPageWrapper'
import Form from '../../../components/form/Form'
import Input from '../../../components/form_elements/Input'
import colors from '../../../assets/style/colors'
import FormSubmitButton from '../../../components/FormSubmitButton'
import FormSubmitBtnText from '../components/FormSubmitBtnText'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'
import Checkbox from '../../../components/form_elements/Checkbox'
import { useApiRequest } from '../../../hooks/useApiRequest'
import { register } from '../api/authApi'
import { useRoute } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'
import { setLoggedInUser as setUser } from '../../auth/auth'
import { setLoggedInUser } from '../../../store/reducers/user'
import { useDispatch } from 'react-redux'

function Second({ navigation }) {
  const [gender, setGeder] = useState('Male');
  const registerReq = useApiRequest()
  const route = useRoute()

  const userInfo = route.params

  const [showPass, setShowPass] = useState(true);
  
  function submitForm(values) {
    if(registerReq.pending) return
    
    console.log("submited", values);
    registerReq.send(
      () => register({
        ...values,
        ...userInfo,
        accept: undefined,
        gender,
        userStatus: 'Active'
      }),
      res => {
        console.log(res)
        if(res.success) {
          setLoggedInUser({
            token: 'loged in man.',
            user: {
              ...values,
              ...userInfo,
              gender,
              userStatus: 'Active'
            }
          })
          useDispatch(setUser({
            token: 'loged in man.',
            user: {
              ...values,
              ...userInfo,
              gender,
              userStatus: 'Active'
            }
          }))
          navigation.replace('Third', values)
        }
      }
    )
  }

  return (
    <FirsAndSecondPageWrapper title='More Information' subTitle='Please fill all the fiels below'>
      {registerReq.error && <View style={{paddingHorizontal: 10, minHeight: 30, justifyContent: 'center', marginHorizontal: 15, backgroundColor: '#0002', borderLeftWidth: 5, borderColor: 'red'}}>
        <Text style={{color: 'red'}}>
          {registerReq.error.substring(6)}
        </Text>
      </View>}
      <Form
        form={({submit}) => (
          <>
            <Input
              name='userName'
              validation="required"
              label='Username'
            />
            <Input
              name='email'
              label='Email'
              validation="required|email"
            />
            <Input
              secureTextEntry={showPass ? true : false}
              name='password'
              Right={(
                <Pressable onPress={() => setShowPass(!showPass)}>
                  <View style={{}}>
                    {
                      showPass ?
                      <Icon size={22} name='eye' /> :
                      <IconFeather size={22} name='eye-off' />
                    }
                  </View>
                </Pressable>
              )}
              validation="required"
              label='Password'
            />
            <View style={{borderWidth: 2, borderColor: colors['gray-300'], borderRadius: 5, justifyContent: 'center', height: 50}}>
              <Picker selectedValue={gender} onValueChange={(val) => setGeder(val)} mode='dropdown'>
                <Picker.Item label='Male' value='Male' />
                <Picker.Item label='Femael' value='Female' />
              </Picker>
            </View>
            <Checkbox
              validation="required-(you have to accept our terms)"
              name="accept"
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  color: colors["gray-400"],
                }}
              >
                By checking this I agree to the {" "}
                <Text style={{ color: colors.primary }}>terms and conditions</Text> 
                
              </Text>
            </Checkbox>
            <FormSubmitBtnText
              pending={registerReq.pending}
              onPress={() => submit(submitForm)}
            />
          </>
        )}
      />
    </FirsAndSecondPageWrapper>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})
export default Second;