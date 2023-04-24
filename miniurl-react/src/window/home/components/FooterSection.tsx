import { Flex, Box, Text, Link } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
const FooterSection = () => {
  return (
    <Flex
      w='100%'
      justifyContent='space-between'
      p='1rem 2.4rem 1rem 2.4rem'>
      <Box>
        <Text fontSize={['1.2rem','1.4rem','1.4rem']}>&copy;2023 Jahidem. All rights reserved.</Text>
      </Box>
      <Box>
        <Link
          href='https://github.com/jahidem'
          isExternal>
          <Flex alignItems='center'>
            <FiGithub
              color='blue'
              fontSize='16px'
            />
            <Text
              ml='.5rem'
              fontSize={['1.2rem','1.4rem','1.4rem']}
              textDecor='underline'>
              Find me on github
            </Text>
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
};

export default FooterSection;
