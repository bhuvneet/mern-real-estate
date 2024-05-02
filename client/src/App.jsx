import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/About' element={<About/>}/>
        <Route element={<PrivateRoute/>}></Route>

      </Routes>
      </BrowserRouter>
    );
}
