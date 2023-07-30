import React,{useState} from 'react';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'

// react-router 
import { BrowserRouter as Router ,Route,Routes  } from 'react-router-dom';
//
import {ToastContainer} from 'react-toastify'

//firebase
// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


//componenets

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PageNotFound from './pages/Pagenotfound'
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import FirebaseConfig from './config/FirebaseConfig';
//init firebase
firebase.initializeApp(FirebaseConfig)

function App() {

  const [user,setUser] = useState(null)
  // here the default value should be null {learn more about it}
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value = {{user,setUser}}>
          <Header/>
          <Routes>
          
            <Route path='/' element={user ? <Home/>:<Signin/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
          <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
