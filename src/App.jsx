import React from 'react'
import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { About } from './Components/About/About'

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
