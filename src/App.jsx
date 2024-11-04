import { useState } from 'react'
import Home from './pages/Home'
import Scroll from './pages/Scroll'
import Cursor from './components/Cursor'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-screen bg-white flex flex-col md:flex-row md:overflow-hidden' style={{backgroundColor: '#242424'}}> 
      <Cursor />

      <div className='w-full md:w-1/2'>
        <Home />
      </div>

      <div className='w-full md:w-1/2  '>
        <Scroll/> 
      </div>

    </div>
    </>
  )
}

export default App
