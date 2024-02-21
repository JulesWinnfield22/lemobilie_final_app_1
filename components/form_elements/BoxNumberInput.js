import React, { memo, useEffect, useRef, useState } from 'react'
import { View, StyleSheet, TextInput, Keyboard } from 'react-native'
import colors from '../../assets/style/colors'

function BoxNumberInput({ active = false, onFocus = f => f, onBlur = f => f, onChange = f => f }) {
  const input = useRef(null)

  useEffect(() => {
    if(active) {
      input.current.focus()
    }
  }, [active])

  return (
    <TextInput
      maxLength={1}
      ref={input}
      autoFocus={active}
      onChangeText={onChange}
      keyboardType='numeric'
      onFocus={onFocus}
      onBlur={onBlur}
      textAlign='center'
      style={{width: 35, height: 40, borderWidth: 2, borderColor: active ? colors.primary : colors['gray-300'], borderRadius: 5}}
    />
  )
}

export default memo(BoxNumberInput)
