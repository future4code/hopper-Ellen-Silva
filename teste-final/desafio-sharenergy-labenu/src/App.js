import LoginPage from './Pages/Usuario/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './Pages/Usuario/User';
import CadastrarCliente from './Pages/CRUD/CadastrarCliente';
import Cat from './Pages/CatandDog/Cat';
import Dog from './Pages/CatandDog/Dog';
import ErrorPage from './ErrorPage';



function App() {
  return (
    <div >
    
   <BrowserRouter>
   <Routes>
    <Route path={'/'} element={<LoginPage/>}/>
    <Route path={'/user'} element={<User/>}/>
    <Route path={'/cadastro'} element={<CadastrarCliente/>}/>
    <Route path={'/cat'} element={<Cat/>}/>
    <Route path={'/dog'} element={<Dog/>}/>
    <Route path={'*'} element={<ErrorPage/>}/>


   </Routes>
   </BrowserRouter>
     
    </div>
  );
}

export default App;
