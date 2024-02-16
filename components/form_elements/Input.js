import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import InputParent from '../form/InputParent'
import InputLayout from './InputLayout'

export default function Input(props) {
  return (
    <InputParent
      Input={TextInput}
      props={{...props, style: {...(props?.style || {}), flex: 1}}}
      builder={({ Input, value, error }) => {
        return (
          <InputLayout Left={props?.Left} value={value || props?.defaultValue} error={error} label={props?.label}>
            {Input}
          </InputLayout>
        )    
      }}
    />
  )
}