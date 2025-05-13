// 
// import { useState } from 'react'

import './App.css'
import Card from './component/card'
function App() {
  // const [count, setCount] = useState(0)
  let imgLink = "https://images.pexels.com/photos/31110027/pexels-photo-31110027/free-photo-of-elegant-fashion-portrait-in-london.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Shravan</h1>
     <Card userName="chai aur code" link = {imgLink} />
    </>
  )
}

export default App
