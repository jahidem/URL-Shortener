import { Flex, Box, Text, Link } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import repeat from '../../../assets/repeat.jpg';
const NavSection = () => {
  return (
    <Box
      maxW='1333px'
      mx='auto'>
      <Flex
        px='3.6rem'
        height={['43px','73px','73px']}
        alignItems='center'
        justifyContent='space-between'>
        <Flex alignItems='center'>
          <RouteLink to='/home'>
            <Text
              pt='5px'
              color='rgb(0, 105, 255)'
              fontSize={['1.8rem','3rem','3rem']}
              fontFamily='Epilogue, sans-serif'
              fontWeight='800'>
              MiniURL
            </Text>
          </RouteLink>
        </Flex>
        <Flex ml='5.4rem'>
          <RouteLink to='/stats'>
            <Text
              fontSize={['1rem','1.8rem','1.8rem']}
              cursor='pointer'
              color='rgba(36, 51, 125,0.95)'
              fontWeight='500'
              _hover={{
                'text-decoration': 'underline',
              }}>
              Statistics of URL
            </Text>
          </RouteLink>

          <Box ml='3.6rem'>
            <Link isExternal href='https://github.com/jahidem/URL-Shortener'>
            <Text
              fontSize={['1rem','1.8rem','1.8rem']}
              cursor='pointer'
              color='rgba(36, 51, 125,0.95)'
              fontWeight='500'
              _hover={{
                'text-decoration': 'underline',
              }}>
              About
            </Text>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavSection;
