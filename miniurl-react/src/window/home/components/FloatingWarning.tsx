import { Box, Text } from '@chakra-ui/react';
const FloatingWarning = ({ errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <Box
          pos='fixed'
          bottom='1rem'
          right='1rem'
          w='240px'
          borderRadius='9px'
          bgColor='rgba(255, 255, 255,.45)'
          boxShadow='2px 4px 5px rgba(0, 0, 0,.095)'
          
          >
          <Text
            fontSize='1.4rem'
            textAlign='center'
            p='.6rem'
            color='red'>
            {errorMessage}
          </Text>
        </Box>
      )}
    </>
  );
};

export default FloatingWarning;
