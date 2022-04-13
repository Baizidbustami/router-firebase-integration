
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers/Headers';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <Headers></Headers>
     
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='register' element={<Reviews></Reviews>}></Route>
     </Routes>
    </div>
  );
}

export default App;
