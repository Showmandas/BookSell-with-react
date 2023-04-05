import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     {/* header  */}
     <Header/>
     <Outlet/>
     {/* footer  */}
    </div>
  )
}

export default App
