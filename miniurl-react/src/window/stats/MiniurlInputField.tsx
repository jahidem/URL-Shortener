import {
  InputGroup,
  Box,
  InputLeftAddon,
  InputRightAddon,
  Input,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_SERVER_URL } from '../../utilities/values';
const MiniurlInputField = ({ urlPair, setUrlPair, urlIdFromParam }) => {
  const [triggerSubmit, setTriggerSubmit] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(urlIdFromParam);

  useEffect(() => {
    const getUrlPairDetail = async () => {
      try {
        const response = await axios.get(API_SERVER_URL + '/urls/' + inputText);
        setUrlPair(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (inputText) {
      getUrlPairDetail();
    }
  }, [triggerSubmit]);

  return (
    <Box p='1.6rem'>
      <InputGroup
        size='lg'
        colorScheme='red'>
        <InputLeftAddon
          children='https://minifyurl.onrender.com/'
          fontSize='1.6rem'
          p='1.8rem'
          w='260px'
        />
        <Input
          value={urlPair.mini_url ? urlPair.mini_url : inputText}
          onChange={(e) => setInputText(e.target.value.replace(/\s/g, ''))}
          fontSize='1.6rem'
          p='1.8rem'
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setTriggerSubmit((state) => !state);
            }
          }}
          placeholder='Enter the rest of your MiniURL'
        />
        <InputRightAddon
          children={<ChevronRightIcon />}
          fontSize='2.4rem'
          p='1.8rem'
          cursor='pointer'
          onClick={() => {
            setTriggerSubmit((state) => !state);
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
