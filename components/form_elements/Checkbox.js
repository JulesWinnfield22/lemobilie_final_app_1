import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import colors from '../../assets/style/colors'
import InputParent from '../form/InputParent'
import ErrorMessage from '../ErrorMessage'
import Icon from 'react-native-vector-icons/AntDesign'
export default function Checkbox(props) {
  const [checked, setChecked] = useState(false)

  function handle(change) {
    setChecked(!checked)
    change(!checked)
  }

  return (
    <InputParent
      props={props}
      builder={({ changeValue, error }) => {
        return (
          <View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <TouchableOpacity style={styles.container} onPress={() => handle(changeValue)}>
                { checked ? <Text style={{color: '#000'}}>
                  <Icon name='check' />
                </Text> :  ''}
              </TouchableOpacity>
              {props?.children}
            </View>
            <ErrorMessage error={error} />
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: .5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors['gray-300'],
  }
})