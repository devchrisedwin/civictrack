import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Leaderspage from './pages/Leaderspage'
import {LeaderContextProvider} from './context/LeaderContext'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Forum from './pages/Forum'

function App() {

  return (
   <div className='w-[80%] m-[auto]'>
      <Navbar/>
      <LeaderContextProvider>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/project-tracker' element={<Leaderspage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forum' element={<Forum/>}/>
          </Routes>
      </LeaderContextProvider>
       
   </div>
  )
}

export default App
