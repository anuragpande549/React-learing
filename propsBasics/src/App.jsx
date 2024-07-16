import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Crad'
import './App.css'

function App() {
  const mountainImg = 'https://v1.tailwindcss.com/img/card-top.jpg';
  const mountainImg1 = 'https://th.bing.com/th/id/OIP.Nfd-_b2A1A1D6AsvReUmgAHaEc?w=4704&h=2823&rs=1&pid=ImgDetMain'

  return (
    <>
      <Card  myMassage = "Anurag" image = {mountainImg}/>
      <Card myMassage = 'Adarsh' image={mountainImg1}/>
    </>
  )
}

export default App
