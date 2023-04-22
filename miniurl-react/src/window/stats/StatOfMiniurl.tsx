import { Box, Flex, Text } from '@chakra-ui/react';
import TextWithCopyButton from '../home/components/TextWithCopyButton';
import { API_SERVER_URL } from '../../utilities/values';
import { useState } from 'react';
import { UrlPair } from '../../utilities/types';
import MiniurlInputField from './MiniurlInputField';

const StatOfMiniurl = ({ miniUrlId }) => {
  const [urlPair, setUrlPair] = useState<UrlPair>({
    id: '0',
    mini_url: miniUrlId,
    original_url: '',
    visit_count: 0,
  });
  return (
    <Box
      maxW='1333px'
      mx='auto'
      mt='2.6rem'>
      <Flex
        flexDir='column'
        w='100%'
        h='100%'
        justifyContent='space-between'>
        <MiniurlInputField urlPair={urlPair} />

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
  );
};

export default StatOfMiniurl;
