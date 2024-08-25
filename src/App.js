import './App.css';

import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'; 

import Principal from './screens/Vista/Principal';

function App() {
  return (
    <>

        <Navbar />
        <Outlet />

       <Principal />
    </>
  );
}

export default App;
