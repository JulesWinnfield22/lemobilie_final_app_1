import { createContext, useContext } from 'react'

const Context = createContext(null)
export const useState = () => useContext(Context)

function GlobalContext({ children }) {
  return (
    <Context.Provider value={{name: 'hallo'}}>
      {children}
    </Context.Provider>
  )
}

export default GlobalContext