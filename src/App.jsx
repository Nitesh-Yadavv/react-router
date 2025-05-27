import Header from "./header/Header"
import Footer from "./footer/Footer"
import { Outlet } from "react-router-dom"
import React from "react"

function App() {
 return (
  <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
 )
}

export default App
