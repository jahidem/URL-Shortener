import { Box, Flex, Text } from '@chakra-ui/react';
import TextWithCopyButton from '../home/components/TextWithCopyButton';
import { RepeatIcon } from '@chakra-ui/icons';
import MiniurlInputField from './MiniurlInputField';
const initialValue = {
  id: '0',
  mini_url: '',
  original_url: '',
  visit_count: 0,
};
const StatOfMiniurl = ({ miniUrlId, urlPair, setUrlPair }) => {
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
        <MiniurlInputField
          urlPair={urlPair}
          setUrlPair={setUrlPair}
          urlIdFromParam={miniUrlId}
        />

        {urlPair.mini_url && (
          <>
            <Box p='0 1.6rem'>
              <TextWithCopyButton
                textToShow={urlPair.original_url}
                textTitle='Your URL'
                titleWidth={['75px','260px','260px']}
              />
            </Box>
            <Flex
              alignSelf='center'
              mt='3.6rem'
              alignItems='center'>
              <Text
                fontSize='2rem'
                p='1.6rem'>
                This MiniURL has been visited
              </Text>
              <Box
                bgColor='rgba(0, 105, 254,.25)'
                borderRadius='9px'>
                <Text
                  color='gray.600'
                  fontSize='2rem'
                  p='0.2rem 1.6rem'>
                  {urlPair.visit_count}
                </Text>
              </Box>
              <Text
                fontSize='2rem'
                p='1.6rem'>
                times!
              </Text>
            </Flex>
            <Flex
              alignSelf='center'
              mt='3.6rem'
              alignItems='center'>
              <RepeatIcon
                fontSize='3.2rem'
                onClick={() => setUrlPair(initialValue)}
                cursor='pointer'
                color='#32B9D4'
                _hover={{
                  transform: 'rotate(185deg)'
                }}
                transition='1s transform ease'
              />
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default StatOfMiniurl;
