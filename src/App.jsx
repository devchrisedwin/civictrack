import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Leaderspage from './pages/Leaderspage'
import {LeaderContextProvider} from './context/LeaderContext'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Forum from './pages/Forum'
import About from './pages/About'

function App() {

  return (
   <div className='lg:w-[80%] lg:m-[auto] w-[100%] overflow-x-hidden'>
      <Navbar/>
      <LeaderContextProvider>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/project-tracker' element={<Leaderspage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forum' element={<Forum/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
      </LeaderContextProvider>
       
   </div>
  )
}

export default App
