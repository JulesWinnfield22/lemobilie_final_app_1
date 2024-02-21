import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

export async function setLoggedInUser(data) {
  try {
    await AsyncStorage.setItem('@userSession', JSON.stringify(data))
    return true
  } catch(err) {
    return false
  }
}

export function getLoggedInUser() {
  const [pending, setPending] = useState(false)
  const [user, setUser] = useState('')

  async function getUser() {
    try {
      setPending(true)
      const data = await AsyncStorage.getItem('@userSession')
      setPending(false)
      if(data) {
        setUser(JSON.parse(data))
      }
      return false
    } catch(err) {
      return false
    }
  }

  return {
    pending,
    getUser,
    user
  }
}
