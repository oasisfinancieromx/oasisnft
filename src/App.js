import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';

import { Home } from './home';
import { Login } from './login';
import { Layout } from './Layout';
import { Gallery } from './gallery';

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path=":country" element={<Layout />}>
            <Route path="" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
