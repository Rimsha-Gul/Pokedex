import './App.css';
import PokeList from './pages/pokelist';
import PokeDetails from './pages/pokedetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={< PokeList />}></Route>
      <Route exact path='/pokedetails/:key' element={< PokeDetails />}></Route>
      </Routes>
    </BrowserRouter>
    );
}
export default App;