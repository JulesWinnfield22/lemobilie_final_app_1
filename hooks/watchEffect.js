import { useEffect, useState } from 'react'

export function watchEffect() {
  
  function watch(fn, dep) {
    const [first, setFirst] = useState(0)
    useEffect(() => {
      if(first != 0) {
        fn()
      } else {
        setFirst(1)
      }
    }, dep)
  }

  return {watch}
}