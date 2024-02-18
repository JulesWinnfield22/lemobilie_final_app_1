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
    navigation.navigate('getrare', values)
  }

  return (
    <FirsAndSecondPageWrapper title='Mobile Information' subTitle='Please fill all the fiels below'>
      <Form
        form={({submit}) => (
          <>
            <Input
              name='deviceName'
              label='Device Name'
              defaultValue='Huawei'
              validation="required"
            />
            <Input
              name='deviceModel'
              label='Device Model'
              validation="required"
            />
            <Input
              keyboardType='numeric'
              name='devicePrice'
              label='Mobile Price'
              validation={{
                required: true,
                price: true,
                num_minmax: [15001, 200000]
              }}
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