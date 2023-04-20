import { Input, Flex, Box } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
const TextArea = () => {
  return (
    <Flex
      w='100vw'
      justifyContent='center'>
      <Flex
        w='640px'
        boxShadow='4px 4px 36px rgba(0, 0, 0,0.1)'
        borderRadius='32px'
        h='64px'
        p='1.6rem'
        bgColor='white'
        justifyContent='space-between'
        alignItems='center'>
        <Input
          px='1.8rem'
          variant='unstyled'
          placeholder='Paste your URL here to tinify'
          fontSize='1.6rem'
          bgColor='white'
        />
        <ArrowForwardIcon
          color='rgba(0, 105, 255, .75)'
          fontSize='2.8rem'
          bgColor='white'
          _hover={{
            'background': 'blackAlpha.100',
            'cursor' : 'pointer', 
          }}
          transition=' background 0.4s ease'
          borderRadius='50%'
          h='46px'
          w='46px'
          p='0.5rem'
        />
      </Flex>
    </Flex>
  );
};

export default TextArea;
