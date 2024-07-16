import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PricingCard from './components/PricingCard/PricingCard'
import styles from './App.module.css'


function App() {
  const cards = [
    {
      label: "Start-Up",
      price: "$49",
      duration: '/Year',
      image: "/images/bike.png",
      imageAlt: "Moving Bicycle With Clouds",
      benefits: [
        "Unlimited downloads",
        "Email Support",
        "Limited Access"
      ]
    },
    {
      label: "Pro",
      price: "$49",
      duration: '/Year',
      image: "/images/car.png",
      imageAlt: "Moving car with Clouds",
      benefits: [
        "Up to 10 Users",
        "Email Support, Call Support",
        "1 Year Access"
      ]
    },
    {
      label: "Enterprise",
      price: "$99",
      duration: '/Year',
      image: "/images/plane.png",
      imageAlt: "Flying plane with Clouds",
      benefits: [
        "Unlimited downloads",
        "On Demand Request",
        "Unlimited Access"
      ]
    }
  ]
  return (

    <main>
      <div className={styles.bg}>
        <div className={styles.info}>
          <h1 className={styles.heading}>Choose Your Plan</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque porro, dolorum earum quisquam inventore quidem nam deserunt </p>
        </div>
      </div>
      <div className={`${styles.prices} container` }>
      
      {cards.map(card =>{
        return (
          <PricingCard key={card.label}  benefits={card.benefits} label={card.label}{...card}  />
        )
      })}
      

    </div>
    </main>
  )
}

export default App
