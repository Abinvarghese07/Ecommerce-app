import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Products from './components/Products';
import Signup from './components/Signup';
import Register from './components/Register';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/product/:name' element={<SingleProduct/>}></Route>
      <Route path='/cart/:name' element={<Cart/>}></Route>
    </Routes> 

     
    </div>
  );
}

export default App;
