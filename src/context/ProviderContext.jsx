import React from 'react'
import ThemeContextProvider from './ThemeContext'

const ProviderContext = ({children}) => {
  return (
    <ThemeContextProvider>{children}</ThemeContextProvider>
  )
}

export default ProviderContext