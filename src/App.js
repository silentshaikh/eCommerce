import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Product from './Product/Product';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import CardGallery from './Product/CardGallery';
import Cart from './Cart/Cart';
import Error from './Error/Error';

function App() {
  return (
   <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Product/>}/>
        <Route path='/product' element={<CardGallery/>}>
        <Route path=':productId' element={<CardGallery/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
