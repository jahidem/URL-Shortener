import { Box, Text, Flex } from '@chakra-ui/react';

const FeaturesSection = () => {
  return (
    <Box
      w='100%'
      p='7.4rem 0 7.4rem 0'>
      <Box
        maxW='1200px'
        mx='auto'
        py='auto'
        textAlign='center'>
        <Flex
          px='1.6rem'
          justifyContent='space-between'
          alignItems='center'
          flexDir={['column', 'column', 'row']}>
          <Box
            maxW='460px'
            p='1.6rem'>
            <Text
              fontSize={['1.8rem', '1.8rem', '2.4em']}
              fontFamily='Epilogue, sans-serif'
              fontWeight='500'
              letterSpacing='-1px'>
              Why waste time typing long when fewer do the trick?
            </Text>
            <Text
              fontSize='1.6rem'
              fontFamily='Inter, sans-serif'
              m='1.2rem 0 0 0'>
              Shorten your URL to simplify its management and facilitate
              sharing.
            </Text>
          </Box>
          <Box
            maxW='560px'
            p='1.6rem'>
            <Text
              fontSize={['1.8rem', '1.8rem', '2.4em']}
              fontFamily='Epilogue, sans-serif'
              fontWeight='500'
              letterSpacing='-1px'>
              Know more about your URL
            </Text>
            <Text
              fontSize='1.6rem'
              fontFamily='Inter, sans-serif'
              m='1.2rem 0 0 0'>
              Gain insights into how your shortened URLs are being utilized by
              tracking the number of visits they receive. This information can
              help you understand the effectiveness of your marketing campaigns
              or other initiatives.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
