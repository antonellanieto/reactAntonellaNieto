
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar.jsx';
import ItemDetailContainer from './containers/ItemDetaileContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import NotFound from './components/NotFound/NotFound';
import Cart from './containers/Cart/cart';


function App() {
  return (
    <BrowserRouter>
    
     <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
      <Route path='/detail/:productoId' element={<ItemDetailContainer/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      
    </Routes>
     </BrowserRouter>  
  );
}

export default App;
