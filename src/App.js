// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import Product from './components/Product';


function App() {
  return (
    <div className='App' >
      <Navbar></Navbar>
      <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='products' element={<Products/>}>
      <Route path=':id' element={<Product/>}/>
      </Route>
      </Routes>
     {/* NESTED ROUTES 
     <Route path='products/*' element={<Products/>}/>
     
     
     */}

    </div>
  );
}





export default App;
