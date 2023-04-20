import NavSection from './components/NavSection';
import LandingSection from './components/LandingSection';
import { Box } from '@chakra-ui/react';
import TextArea from './components/TextArea';
const Home = () => {
  return (
    <>
      <NavSection/>
      <LandingSection/>
      <Box position='absolute' mt='-35px'>
        <TextArea/>
      </Box>
      <Box bgColor='#F3F3F4' h='400px'>

      </Box>
    </>
  );
};

export default Home;
