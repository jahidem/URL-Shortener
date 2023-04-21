import { Flex, Box, Text, Button } from '@chakra-ui/react';
import repeat from '../../../assets/repeat.jpg'
const NavSection = () => {
  return (
    <Box
      maxW='1333px'
      mx='auto'
      >
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
        </Flex>
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
    </Box>
  );
};

export default NavSection;
