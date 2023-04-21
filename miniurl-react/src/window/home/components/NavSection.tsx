import { Flex, Box, Text, Button } from '@chakra-ui/react';

const NavSection = () => {
  return (
    <Box
      maxW='1333px'
      mx='auto'>
      <Flex
        height='73px'
        alignItems='center'
        justifyContent='space-between'>
        <Flex alignItems='center'>
          <Box>
            <Text
              pt='5px'
              color='rgb(0, 105, 255)'
              fontSize='3rem'
              fontFamily='Epilogue, sans-serif'
              fontWeight='800'>
              MiniURL
            </Text>
          </Box>
          <Flex ml='5.4rem'>
            <Box>
              <Text fontSize='1.8rem'
              cursor='pointer'
              color='rgba(36, 51, 125,0.95)'
              fontWeight='500'
              >
                Statistics
              </Text>
            </Box>

            <Box ml='3.6rem'>
              <Text fontSize='1.8rem'
              cursor='pointer'
              color='rgba(36, 51, 125,0.95)'
              fontWeight='500'
              >
                About
              </Text>
            </Box>
          </Flex>
        </Flex>
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
