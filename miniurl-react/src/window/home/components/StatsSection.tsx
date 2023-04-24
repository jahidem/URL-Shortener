import { Box, Image, Flex, Text } from '@chakra-ui/react';
import statImage from '../../../assets/stat.png';
import tree from '../../../assets/tree.png';
const StatsSection = () => {
  return (
    <Box
      w='100%'
      p='10rem 0 7.4rem 0'>
      <Box
        maxW={['280px', '450px', '650px']}
        mx='auto'
        py='auto'>
        <Flex justifyContent='center'>
          <Image
            alt='cheery blossom'
            maxW={['280px', '450px', '650px']}
            position='absolute'
            src={tree}
            m='-16rem 0 0 0rem'
            opacity='1'
          />
          <Image
          alt='Stat Page'
            src={statImage}
            boxShadow='10px -10px 45px rgba(245,45,56,0.1)'
            zIndex='100'
            _hover={{
              boxShadow: '10px -10px 45px rgba(245,45,56,0.18)',
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default StatsSection;
