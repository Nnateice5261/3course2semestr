import './App.css';
import {Routes, Route} from "react-router-dom";
import CardPage from "./components/CardPage";
import {createContext, useState} from "react";
import GridSetka from "./components/GridSetka";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from './components/ShoppingCart'

export const NameContext = createContext(null);
function App() {
    const [arrayOfShoppingCart, setArrayOfShoppingCart] = useState([]);
    const [mainItem, setMainItem] = useState('');
    console.log(arrayOfShoppingCart)
    return (
    <div className="App">
        <NameContext.Provider value={{mainItem, setMainItem}}>
            <Header/>
            <Routes>
                <Route path='/' element={<GridSetka/>}/>
                <Route path={`/${mainItem.name}`} element={<CardPage array={arrayOfShoppingCart} setArray={setArrayOfShoppingCart}/>}/>
                <Route path='/shoppingCart' element={<ShoppingCart array={arrayOfShoppingCart} setArray={setArrayOfShoppingCart}/>}/>
            </Routes>
            <Footer/>
        </NameContext.Provider>
    </div>
  );
}

export default App;
