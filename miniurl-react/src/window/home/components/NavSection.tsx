import { Flex, Box, Text, Button } from '@chakra-ui/react';

const NavSection = () => {
  return (
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
              p='0.8rem 2rem'
              textAlign='center'>
              Sign up
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavSection;
