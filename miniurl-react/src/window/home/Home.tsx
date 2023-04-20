import NavSection from './components/NavSection';
import LandingSection from './components/LandingSection';
import { Box } from '@chakra-ui/react';
import TextArea from './components/TextArea';
import FeaturesSection from './components/FeaturesSection';
const Home = () => {
  return (
    <>
      <NavSection/>
      <LandingSection/>
      <Box position='absolute' mt='-35px'>
        <TextArea/>
      </Box>
      <FeaturesSection/>
    </>
  );
};

export default Home;
