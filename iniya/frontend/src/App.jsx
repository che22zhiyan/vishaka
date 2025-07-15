
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Register from './assets/Register';
import Login from './assets/Login';
import Success from './assets/Success';

function App  ()  {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Navigate to ="/login"/>}/>
      <Route path ="/register" element = {<Register/>} />
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/Success" element = {<Success/>}/>
    </Routes>
    </BrowserRouter>
     )
}

export default App

