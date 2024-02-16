import React, { createContext, useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

const FormContext = createContext(null)
export const useForm = () => useContext(FormContext)

export default function Form({form, style}) {
  const [values, setValues] = useState([])
  const [validateAll, setValidateAll] = useState({
    validate: false,
    first: true
  })

  function setInput(input) {
    const idx = values.findIndex(el => el.name == input.name)
    if(idx > -1) {
      values.splice(idx, 1, input)
    } else {
      values.push(input)
    }
    setValues([...values])
  }

  function changeValue(name, value) {
    const idx = values.findIndex(el => el.name == name)
    if(idx > -1) {
      values.splice(idx, 1, {
        ...values[idx],
        ...value
      })
      setValues([...values])
    }
  }

  function submit(cb = f => f) {
    setValidateAll({
      ...validateAll,
      validate: true
    })

    setTimeout(() => {
      const res = values.reduce((state, payload) => {
        state.values[payload.name] = payload.value
        state.valid.push(payload.valid)
        return state
      }, {
        values: {},
        valid: []
      })

      if(res.valid.every(el => el)) {
        cb(res.values)
      }
      setValidateAll({
        first: false,
        validate: false
      })
    }, 0)
  }

  useEffect(() => {
    // console.log('vv', values)
  }, [values])

  const id = "form_" + Math.floor(Math.random() * 10000);
  return (
    <FormContext.Provider value={{
        id,
        setInput,
        changeValue,
        validateAll
      }}
    >
      <View style={[styles.container, style]}>
        {form({submit})}
      </View>
    </FormContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 20
  }
})