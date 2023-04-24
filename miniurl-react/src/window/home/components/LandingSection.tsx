import { Flex, Box, Text } from '@chakra-ui/react';

const LandingSection = () => {
  return (
    <Flex
      justify='center'
      bg='linear-gradient( 132.6deg,  rgba(71,139,214,1) 23.3%, rgba(37,216,211,1) 84.7% );'
      p={['4.8rem','5.6rem','8.4rem']}
     
      fontFamily='Inter, sans-serif'>
      <Box
        pl='2.4rem'
        maxW='1333px'>
        <Text
          textAlign='center'
          fontSize={['3.2rem', '4.8rem', '6.4rem']}
          fontFamily='Epilogue, sans-serif'
          fontWeight='800'
          color='white'
          letterSpacing='-2px'
          >
          Make it short, Make it quick!
        </Text>
        <Box maxW='960px'>
          <Text
            py={['0.5rem', '0.5rem','1.6rem']}
            fontWeight='500'
            fontSize={['1.2rem', '1.6rem','1.8rem']}
            lineHeight='150%'
            color='white'
            textAlign='center'>
Have you got a long URL that's difficult to copy and paste? Get statistics on how much interest it has by shortening the URL! Enter your URL here to obtain a miniURL that flows better and is more interactive          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default LandingSection;
