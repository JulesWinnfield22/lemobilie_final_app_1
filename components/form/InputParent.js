import React, { useEffect, useState } from 'react'
import  { useForm } from './Form'
import { getValidators } from "./util/validators.js";
import { validationKeys } from "./util/validationUtils";
import { watchEffect } from '../../hooks/watchEffect.js'

export default function InputParent({ Input, props, builder, ...rest }) {
  const form = useForm()
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState()
  const [value, setValue] = useState(props?.defaultValue || '')
  const [asyncValidating, setAsyncValidating] = useState(false)

  const { watch } = watchEffect()

  function validate() {
    if(!dirty) setDirty(true)

    if(!props?.validation) {
      form.changeValue(props.name, {
        name: props?.name,
        valid: true
      })
      return true
    }

    let validators = getValidators();
    let validator = validators[props?.type?.split('-')[0] || 'text']
    
    function getValidation(validation) {
      return validation instanceof Object
        ? validation
        : (validationKeys(validation));
    }
    
    let validation = getValidation(props?.validation)

    let keys = Object.keys(validation || {});

    for (let key of keys) {
      if (!validation[key]?.args && !validation[key]?.message) {
        validation[key] = {
          args: validation[key],
          message: null
        }
      }
      const [res, msg] = validator[key](value, validation[key]?.args, form.id, validation[key]?.message);
      if (!res) {
        setError(msg) 
      } else {
        setError('') 
      }
    }
  }

  let ModInput
  if(['TextInput'].includes(Input && Input?.displayName)) {
    ModInput = React.createElement(Input, {
      ...props,
      onChangeText: (val) => {
        if(dirty) validate()
        setValue(val.trim())
        form.changeValue(props.name, {
          value: val.trim(),
          name: props?.name
        })
      },
      onBlur: handleBlur
    })
  }

  function changeValue(value) {
    form.changeValue(props?.name, {
      value,
      name: props?.name
    })
    setValue(value)
  }

  function handleBlur() {
    !dirty && validate()
  }

  useEffect(() => {
    form.setInput(
      {
        name: props.name,
        value: props?.defaultValue || '',
        valid: false
      }
    )
  }, [])

  watch(() => {
    if(form.validateAll.validate) {
      validate()
    }
  }, [form.validateAll])
  
  useEffect(() => {
    if(dirty) validate()
  }, [value])
  
  watch(() => {
    if(error) {
      form.changeValue(props?.name, {
        value: value || props?.defaultValue,
        valid: false,
        name: props?.name
      })
    } else {
      form.changeValue(props?.name, {
        value: value || props?.defaultValue,
        valid: true,
        name: props?.name
      })
    }
  }, [error])

  return (
    <>
      {builder({error, value, changeValue, Input: ModInput})}
    </>
  )
}
