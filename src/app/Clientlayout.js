import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

const ClientLayout = ({children}) => {
  return (
    <>
    <Header/>
    <>{children}</>
    <Footer/>
    </>
  )
}

export default ClientLayout