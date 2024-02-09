import Loginn from './pages/Loginn';
import Registerr from './pages/Registerr';
import Otpp from './pages/Otpp';
import Errorz from "./pages/Errorz";
import Homee from './pages/Homee';
import Headerr from './components/Headerr';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
function App() {
  return (
    <>
    <Headerr/>
    <Routes>
      <Route path='/' element={<Loginn />} />
      <Route path='/register' element={<Registerr />} />
      <Route path='/user/otp' element={<Otpp />} />
      <Route path='/home' element={<Homee />} />
      <Route path='*' element={<Errorz />} />
    </Routes>
    </>
  );
}

export default App;
