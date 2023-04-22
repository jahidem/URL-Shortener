import {
  InputGroup,
  Box,
  InputLeftAddon,
  InputRightAddon,
  Input,
} from '@chakra-ui/react';
import { FiCopy } from 'react-icons/fi';
const MiniurlInputField = ({ urlPair }) => {
  return (
    <Box>
      <InputGroup
        size='lg'
        colorScheme='red'>
        <InputLeftAddon
          children='https://getminiurl.onrender.com/'
          fontSize='1.6rem'
          p='1.8rem'
          w='128px'
        />
        <Input
          value={urlPair.mini_url}
          fontSize='1.6rem'
          p='1.8rem'
        />
        <InputRightAddon
          children={<FiCopy />}
          fontSize='1.6rem'
          p='1.8rem'
          cursor='pointer'
          onClick={() => {
            navigator.clipboard.writeText(
              'https://getminiurl.onrender.com/' + urlPair.mini_url
            );
          }}
          _hover={{
            color: 'rgb(40, 209, 211)',
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default MiniurlInputField;
