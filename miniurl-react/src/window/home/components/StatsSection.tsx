import { Box, Image, Flex, Text } from '@chakra-ui/react';
import statImage from '../../../assets/stat.png';
import tree from '../../../assets/tree.png';
const StatsSection = () => {
  return (
    <Box
      w='100%'
      p='10rem 0 7.4rem 0'>
      <Box
        maxW='850px'
        mx='auto'
        py='auto'>
        <Flex justifyContent='center'>
          <Image
            position='absolute'
            src={tree}
            maxW='650px'
            m='-16rem 0 0 0rem'
            opacity='1'
            
          />
          <Image
            src={statImage}
            boxShadow='10px -10px 45px rgba(245,45,56,0.1)'
            maxW='650px'
            zIndex='100'
            _hover={{
              boxShadow :  '10px -10px 45px rgba(245,45,56,0.18)'
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default StatsSection;
