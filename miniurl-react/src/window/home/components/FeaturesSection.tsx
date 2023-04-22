import { Box, Text, Flex } from '@chakra-ui/react';

const FeaturesSection = () => {
  return (
    <Box
      w='100%'
      p='7.4rem 0 7.4rem 0'>
      <Box
        maxW='1200px'
        mx='auto'
        py='auto'>
        <Flex justifyContent='space-between' flexWrap='wrap' >
          <Box maxW='360px' p='1.6rem'>
            <Text
              fontSize='2.4em'
              fontFamily='Epilogue, sans-serif'
              fontWeight='500'
              letterSpacing='-1px'>
              Know more about your URL
            </Text>
            <Text
              fontSize='1.6rem'
              fontFamily='Inter, sans-serif'
              m='1.2rem 0 0 0'>
              Get to know how your URL is being used by people. For every
              shotened URL you can see the frequency of visit also the time when
              it is visited the most.
            </Text>
          </Box>
          <Box maxW='360px' p='1.6rem'>
            <Text
              fontSize='2.4em'
              fontFamily='Epilogue, sans-serif'
              fontWeight='500'
              letterSpacing='-1px'>
              Why waste time typing long when fewer do the trick? 
            </Text>
            <Text
              fontSize='1.6rem'
              fontFamily='Inter, sans-serif'
              m='1.2rem 0 0 0'>
              Well, Make your URL shorten it's makes it easy to use and sleek.
              
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
