import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PricingCard from './components/PricingCard/PricingCard'
import styles from './App.module.css'


function App() {

  return (

    <div className={styles.prices}>
      <PricingCard 
        label="Start-Up"
        price="$49"
        duration=' /Year'
        image="images/bike.png"
        imageAlt="Moving Bicyrcle with Clouds"
      />      
      <PricingCard 
      label="Pro"
      price="$49"
      duration=' /Year'
      image="images/car.png"
      imageAlt="Moving car with Clouds"
    />
    <PricingCard 
        label="Enterprice"
        price="$99"
        duration=' /Year'
        image="images/plane.png"
        imageAlt="Flying plane with Clouds"
      />

    </div>
  )
}

export default App
