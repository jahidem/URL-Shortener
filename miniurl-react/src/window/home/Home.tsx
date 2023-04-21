import { Box } from '@chakra-ui/react';
import NavSection from './components/NavSection';
import LandingSection from './components/LandingSection';
import TextArea from './components/TextArea';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';
const Home = () => {
  return (
    <>
      <NavSection />
      <LandingSection />
      <Box
        position='absolute'
        mt='-35px'>
        <TextArea />
      </Box>
      <FeaturesSection />
      <FooterSection/>
    </>
  );
};

export default Home;
