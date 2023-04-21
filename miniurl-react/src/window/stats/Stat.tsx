import NavSection from '../home/components/NavSection';
import { Flex, Box, Text } from '@chakra-ui/react';
import TextWithCopyButton from '../home/components/TextWithCopyButton';
import { useState } from 'react';
import { UrlPair } from '../../utilities/types';
import { API_SERVER_URL } from '../../utilities/values';
const Stat = () => {
  const [urlPair, serUrlPair] = useState<UrlPair>({
    id: '0',
    mini_url: '',
    original_url: '',
    visit_count: 100,
  });
  return (
    <>
      <NavSection />
      <hr />
      <Box
        maxW='1333px'
        mx='auto'
        mt='2.6rem'>
        <Flex
          flexDir='column'
          w='100%'
          h='100%'
          justifyContent='space-between'>
          <TextWithCopyButton
            textToShow={urlPair.mini_url}
            textTitle={API_SERVER_URL + '/'}
            titleWidth='250px'
          />
          {urlPair.mini_url && (
            <>
              <TextWithCopyButton
                textToShow={urlPair.original_url}
                textTitle='Your URL'
              />
              <Flex
                alignSelf='center'
                mt='5.6rem'
                alignItems='center'>
                <Text
                  fontSize='2.4rem'
                  p='1.6rem'>
                  This Tinyurl has been visited
                </Text>
                <Box
                  bgColor='rgba(0, 105, 254,.25)'
                  borderRadius='9px'>
                  <Text
                    color='gray.600'
                    fontSize='2.4rem'
                    p='0.4rem'>
                    {urlPair.visit_count}
                  </Text>
                </Box>
                <Text
                  fontSize='2.4rem'
                  p='1.6rem'>
                  times!
                </Text>
              </Flex>
            </>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Stat;
