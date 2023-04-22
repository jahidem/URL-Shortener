import Home from './window/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Stat from './window/stats/Stat';
import { Navigate } from 'react-router-dom';
const App = () => {
  return (
    <>
      <style>
        {`
    body{
      background-color : #F3F3F4;
    }
      `}
      </style>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/home'
              element={<Home />}
            />
            <Route
              path='/:mini_url_id/stats'
              element={<Stat />}
            />
            <Route
              path='/stats'
              element={<Stat />}
            />
            <Route
              path='*'
              element={
                <Navigate
                  to='/'
                  replace
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default App;
