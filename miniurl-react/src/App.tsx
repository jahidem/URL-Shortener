import Home from './window/home/Home';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </BrowserRouter>
    </>
  );
};

export default App;