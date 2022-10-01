import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Structure from './pages/Structure';
import Profile from './pages/Profile';
import Login from './pages/Login'
import AddUser from './pages/AddUser';

function App() {
  return (    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='/structure' element={<Structure />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-user' element={<AddUser/>} />
      </Routes>
  )
}

export default App