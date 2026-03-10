import './App.css'
import Navbar from './companents/Navbar'
import { Route, Routes } from 'react-router'
import Home from './companents/Home'
import Auth from './companents/Auth'
import Shop from './companents/Shop'
import Checkout from './companents/Checkout'
  
function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        <Route path='/auth' element={ <Auth /> } ></Route>
        <Route path='/shop' element={ <Shop /> } ></Route>
        <Route path='/checkout' element={ <Checkout /> } ></Route>
      </Routes>
    </>
  )
}

export default App
