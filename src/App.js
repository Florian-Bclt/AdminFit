import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Structure from './pages/Structure';
import Profile from './pages/Profile';
import Login from './pages/Login'
import AddUser from './pages/AddUser';
import GuardedRoute from './components/GuardedRoute';



// const Protected = props => (
//   <button onClick={props.logoutUser}>Déconnexion</button>)

function App() {
  // const navigate = useNavigate();

  // const loginUser = (login, password) => {
  //   const userCredentials = {
  //     login,
  //     password
  //   }

  //   return authenticationService.login(userCredentials)
  //   .then(loginData => {
  //     if(!loginData) {
  //       localStorage.setItem('token', loginData.token);
  //     }
  //   });    
  // };
  //   const logoutUser = () => {
  //     authenticationService.logout()
  //       .then(response => {
  //         if(response !== undefined) {
  //           localStorage.removeItem('token');
  //           navigate.push('/login')
  //         }
  //       })
  //   }
  return (    
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/structure' element={<Structure />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-user' element={<AddUser/>} />
        {/* <GuardedRoute path='/protected' component={() => <Protected logoutUser={logoutUser} />} auth={localStorage.getItem('token')}/> */}
      </Routes>
  )
}

export default App