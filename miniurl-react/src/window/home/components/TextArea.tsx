import { Input, Flex, Box, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { validateUrl, API_SERVER_URL } from '../../../utilities/values';
import { UrlInputState, UrlPair } from '../../../utilities/types';
import axios from 'axios';

const TextArea = () => {
  const [urlInput, setUrlInput] = useState<string>('');
  const [currUrlInputState, setCurrUrlInputState] = useState<UrlInputState>(
    UrlInputState.INPUTTING
  );
  const [invalidMeddage, setInvalidMessage] = useState<string>('');
  const [triggerSubmit, setTriggerSubmit] = useState<boolean>(false);

  useEffect(() => {}, [invalidMeddage]);
  const redirectToStatPage = (response) => {
    console.log(response);
    setCurrUrlInputState(UrlInputState.INPUTTING);
    //if(response.staus == 201)
      
  };
  useEffect(() => {
    if (currUrlInputState == UrlInputState.SUBMITTING) {
      axios
        .post(API_SERVER_URL + '/urls/', {
          original_url: urlInput,
        })
        .then((response) => redirectToStatPage(response))
        .catch((error) => {
          setInvalidMessage("Couldn't reach the server");
          setCurrUrlInputState(UrlInputState.INPUTTING);
        });
    }
  }, [triggerSubmit]);

  const generateTinyUrl = () => {
    if (validateUrl(urlInput)) {
      setCurrUrlInputState(UrlInputState.SUBMITTING);
      setTriggerSubmit((state) => !state);
    } else {
      setInvalidMessage('Invalid URL format');
      setCurrUrlInputState(UrlInputState.INPUTTING);
    }
  };

  return (
    <Flex
      w='100vw'
      justifyContent='center'>
      <Flex
        w='640px'
        boxShadow='4px 4px 36px rgba(0, 0, 0,0.1)'
        borderRadius='32px'
        h='64px'
        p='1.6rem'
        bgColor='white'
        justifyContent='space-between'
        alignItems='center'>
        <Input
          px='1.8rem'
          variant='unstyled'
          placeholder='Paste your URL here to tinify'
          fontSize='1.6rem'
          bgColor='white'
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value.replace(/\s/g, ''))}
          onKeyPress={(e) => {
            if (
              e.key === 'Enter' &&
              UrlInputState.INPUTTING == currUrlInputState
            ) {
              setCurrUrlInputState(UrlInputState.SUBMITTING);
              generateTinyUrl();
            }
          }}
        />
        {currUrlInputState == UrlInputState.INPUTTING ? (
          <ArrowForwardIcon
            color='rgba(0, 105, 255, .75)'
            fontSize='2.8rem'
            bgColor='white'
            _hover={{
              background: 'blackAlpha.100',
              cursor: 'pointer',
            }}
            transition=' background 0.4s ease'
            borderRadius='50%'
            h='46px'
            w='46px'
            p='0.5rem'
            onClick={() => {
              if (UrlInputState.INPUTTING == currUrlInputState) {
                setCurrUrlInputState(UrlInputState.SUBMITTING);
                generateTinyUrl();
              }
            }}
          />
        ) : (
          <Button
            fontSize='2.4rem'
            isLoading={currUrlInputState == UrlInputState.SUBMITTING}></Button>
        )}
      </Flex>
    </Flex>
  );
};

export default TextArea;
