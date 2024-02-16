import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FirsAndSecondPageWrapper from '../components/FirstAndSecondPageWrapper'
import Form from '../../../components/form/Form'
import Input from '../../../components/form_elements/Input'
import colors from '../../../assets/style/colors'
import FormSubmitButton from '../../../components/FormSubmitButton'
import FormSubmitBtnText from '../components/FormSubmitBtnText'

function Second({ navigation }) {
  const state = useState();
  
  function submitForm(values) {
    console.log("submited", values);
    navigation.navigate('home')
  }

  return (
    <FirsAndSecondPageWrapper title='Additional Information' subTitle='Please fill all the fiels below'>
      <Form
        form={({submit}) => (
          <>
            <Input
              name='job'
              label='Device Name'
              defaultValue='Huawei'
              validation="required"
            />
            <View style={{gap: 2}}>
              <Input
                name='income'
                label='Model'
                validation="required"
              />
              {/* <Text style={{
                fontSize: 11,
                fontWeight: '400',
                color: colors['gray-400']
              }}>
                ወርሓዊ ኣታዊኦም ንኻሊእ ሳልሳይ ወገን ኣሕሊፍና ከምዘይንህብ እናረጋገትፅና ትኽክለኛ ወርሓዊ ኣታዊኦም ንኸመዝግቡ ንሓትት።
              </Text> */}
            </View>
            <Input
              name='address'
              label='Address'
              validation='required'
            />
            <FormSubmitBtnText
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