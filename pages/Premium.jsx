import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import monthlyRate from '../utils/mobileMonthlyRate'
import Form from '../components/form/Form'
import Input from '../components/form_elements/Input'
import Screen from '../components/Screen'
import { useRoute } from '@react-navigation/native'
import { formatCurrency } from '../utils/utils'
import colors from '../assets/style/colors'
import FormSubmitBtnText from './register/components/FormSubmitBtnText'
import Select from '../components/form_elements/Select'
import { Picker } from '@react-native-picker/picker'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Premium({ navigation }) {
  const [selected, setSelected] = useState('monthly')
  const route = useRoute()
  const data = route.params

  function getRate() {
    return monthlyRate.find(el => parseFloat(data?.devicePrice) >= el.minLimit &&  parseFloat(data?.devicePrice) <= el.maxLimit)?.[selected]
  }

  function goHome() {
    navigation.navigate('home')
  }
  return (
    <Screen barStyle='dark-content'>
      <View style={{alignItems: 'center', justifyContent: 'center', height: 200}}>
        <MaterialIcons name='payments' size={100} color={'#000'} />
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Text style={{color: colors.primary, fontSize: 15}}>Premium Type</Text>
          <View style={{flex: 1, justifyContent: 'center', height: 35, borderRadius: 5, overflow: 'hidden', borderWidth: 2, borderColor: colors['gray-300']}}>
            <Picker
              mode='dropdown'
              style={{flex: 1, justifyContent: 'center', height: 35}}
              selectedValue={selected}
              onValueChange={(itemValue) => {
                setSelected(itemValue)
              }}
            >
              <Picker.Item label='Monthly' value='monthly' />
              <Picker.Item label='Annualy' value='annual' />
              <Picker.Item label='Semi Annualy' value='semiAnnual' />
              <Picker.Item label='Daily' value='daily' />
            </Picker>
          </View>
        </View>
        <View style={{justifyContent: 'center', 'alignItems': 'center'}}>
          <Text style={{ textTransform: 'capitalize', fontSize: 30, color: '#000', fontWeight: '600'}}>{ selected } Premium</Text>
          <Text style={{color: colors.primary, fontWeight: '600', fontSize: 25}}>
            {
              formatCurrency(getRate())
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
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 30
  }
})