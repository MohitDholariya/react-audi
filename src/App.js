import React, { Component } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Audi from './Pages/Audi'
import Service from './Pages/Service'
import Shop from './Pages/Shop'
import Testdrive from './Pages/Testdrive'
import Booknow from './Pages/Booknow'
import './App.css';
import Login from './Pages/Login';

class App extends Component {


  
  render() {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Audi></Audi>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/testdrive' element={<Testdrive></Testdrive>}></Route>
          <Route path='/booknow' element={<Booknow></Booknow>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    )
  }
}
export default App;
