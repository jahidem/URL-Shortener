import { Flex, Box, Text, Button } from '@chakra-ui/react';
import oceanwater from '../../assets/wate.jpg';
const Home = () => {
  return (
    <>
      <Box
        maxW='1333px'
        mx='auto'>
        <Flex
          alignItems='center'
          my='1.2rem'
          justifyContent='space-between'>
          <Box>
            <Text
              color='rgb(0, 105, 255)'
              fontSize='2.8rem'
              fontFamily='Epilogue, sans-serif'
              fontWeight='800'>
              MiniURL
            </Text>
          </Box>
          <Flex alignItems='center'>
            <Box mr='1.6rem'>
              <Text
                p='0.8rem 1.6rem'
                color='rgb(36, 51, 90)'
                letterSpacing='.25px'
                fontSize='1.6rem'
                fontWeight='600'>
                Log in
              </Text>
            </Box>
            <Box
              fontSize='1.6rem'
              bgColor='rgb(0, 105, 255)'
              color='white'
              borderRadius='9px'
              fontWeight='600'>
              <Text
                p='0.8rem 1.6rem'
                textAlign='center'>
                Sign up
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <hr></hr>
      <Flex
        justify='space-between'
        bgImg={oceanwater}
        py='5.6rem'
        fontFamily='Inter, sans-serif'
        px='5.4rem'>
        <Box
          maxW='700px'
          p='1.6rem'>
          <Text
            fontSize='5.4rem'
            fontFamily='Epilogue, sans-serif'
            fontWeight='800'
            color='white'
            textShadow='1px 1px 5px blue'>
            Make it short, Make it quick!
          </Text>
          <Text
            pl='1.6rem'
            py='1.6rem'
            fontWeight='500'
            fontSize='1.8rem'>
            Have a long URL which is tedious to even copy and paste? Shorten
            your URL and also get statistics about how much engaging is it!
          </Text>
          <Text
            pl='1.6rem'
            fontWeight='400'
            fontSize='1.8rem'
            color='white'>
            Paste your URL here and get a mini URL that makes it more engaging
            and flow like waves.
          </Text>
        </Box>
        <Box>
          <Text color='white'>Your URL here</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
