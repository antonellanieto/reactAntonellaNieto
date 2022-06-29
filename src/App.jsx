
import './App.css';



import NavBar from './components/navbar/NavBar.jsx';
import ItemDetailContainer from './containers/ItemDetaileContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className=''>
       
    <NavBar/>
    {/* <ItemListContainer/> */}
    <ItemDetailContainer/>
     
    
    </div>
    
     
  );
}

export default App;
