import React from 'react'
import { View, StyleSheet } from 'react-native'
import Screen from '../../../components/Screen'
import FirsAndSecondPageWrapper from '../components/FirstAndSecondPageWrapper'
import Form from '../../../components/form/Form'
import Input from '../../../components/form_elements/Input'
import FormSubmitBtnText from '../components/FormSubmitBtnText'

export default function Third({ navigation }) {

  function submitForm(values) {
    navigation.navigate('getrare', values)
  }

  return (
    <FirsAndSecondPageWrapper title='Mobile Information' subTitle='Please fill all the fiels below'>
      <Form 
        form={({ submit }) => {
          return (
            <>
              <Input
                keyboardType='numeric'
                name='devicePrice'
                label='Mobile Price'
                autoFocus={true}
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
          )
        }}
      />
    </FirsAndSecondPageWrapper>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})