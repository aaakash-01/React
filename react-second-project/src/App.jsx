import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard.jsx'
import Kanao from './assets/kanao.jpeg'
import Mitsuri from './assets/mitsuri.jpeg'
import Hasira from './assets/Hasira.jpeg'

function App() {
  return (
    <div className="App">
      <UserCard name="kanao" image={Kanao}  desc="desc1" style={{ border: '2px solid red' , boxShadow: ' 14px 28px rgba(177, 43, 43, 1)' }}/>
      <UserCard name="mitsuri" image={Mitsuri}  desc="desc2" style={{ border: '2px solid green', boxShadow: ' 14px 28px rgba(48, 153, 118, 1)' }}/>
      <UserCard name="Hasira" image={Hasira}  desc="desc3" style={{ border: '2px solid blue' , boxShadow: ' 14px 28px rgba(48, 55, 153, 1)' }}/>
    </div>
  )
}

export default App

