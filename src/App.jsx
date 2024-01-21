import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Pages/Home'
import Carts from './Components/Pages/Carts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './Components/Store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Carts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
