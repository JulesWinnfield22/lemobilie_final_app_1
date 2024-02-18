import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import monthlyRate from '../utils/mobileMonthlyRate'
import Form from '../components/form/Form'
import Input from '../components/form_elements/Input'
import Screen from '../components/Screen'
import { useRoute } from '@react-navigation/native'
import { formatCurrency } from '../utils/utils'
import colors from '../assets/style/colors'
import FormSubmitBtnText from './register/components/FormSubmitBtnText'

export default function Premium({ navigation }) {
  const route = useRoute()
  const data = route.params

  function getRate() {
    return monthlyRate.find(el => parseFloat(data?.devicePrice) >= el.minLimit &&  parseFloat(data?.devicePrice) <= el.maxLimit).rate
  }

  function goHome() {
    navigation.navigate('home')
  }
  return (
    <Screen>
      <View style={styles.container}>
        <View style={{justifyContent: 'center', 'alignItems': 'center'}}>
          <Text style={{ fontSize: 30, color: '#000', fontWeight: '600'}}>Montly Premium</Text>
          <Text style={{color: colors.primary, fontWeight: '600', fontSize: 25}}>
            {
              formatCurrency(getRate() * data?.devicePrice / 1000)
            }
          </Text>
        </View>
        <FormSubmitBtnText
          onPress={goHome}
          style={{ width: '100%' }}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 30
  }
})