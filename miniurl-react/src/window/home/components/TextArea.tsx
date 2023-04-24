import { Input, Flex, Text, Button, Box } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { validateUrl, API_SERVER_URL } from '../../../utilities/values';
import { UrlInputState, UrlPair } from '../../../utilities/types';
import axios from 'axios';
import TextWithCopyButton from './TextWithCopyButton';
import { CloseIcon } from '@chakra-ui/icons';
import FloatingWarning from './FloatingWarning';

const TextArea = () => {
  const [urlInput, setUrlInput] = useState<string>('');
  const [currUrlInputState, setCurrUrlInputState] = useState<UrlInputState>(
    UrlInputState.INPUTTING
  );
  const [invalidMessage, setInvalidMessage] = useState<string>('');
  const [triggerSubmit, setTriggerSubmit] = useState<boolean>(false);
  const [triggerInvalid, setTriggerInvalid] = useState<boolean>(false);
  const [urlPair, serUrlPair] = useState<UrlPair>({
    id: '0',
    mini_url: 'miniurl',
    original_url: 'Uour URL',
    visit_count: 0,
  });
  useEffect(() => {
    if (invalidMessage) {
      console.log(invalidMessage);
      window.setTimeout(function () {
        setInvalidMessage('');
      }, 3000);
    }
  }, [triggerInvalid]);
  const showResponse = (response) => {
    console.log(response);
    setCurrUrlInputState(UrlInputState.INPUTTING);
    if (response.status == 201) {
      serUrlPair(response.data);
      setCurrUrlInputState(UrlInputState.SUCCESS);
    }
  };
  const makeInvalid = (message: string) => {
    setInvalidMessage(message);
    setTriggerInvalid((state) => !state);
  };
  useEffect(() => {
    if (currUrlInputState == UrlInputState.SUBMITTING) {
      axios
        .post(API_SERVER_URL + '/urls/', {
          original_url: urlInput,
        })
        .then((response) => showResponse(response))
        .catch((error) => {
          makeInvalid("Couldn't connext to server");
          setCurrUrlInputState(UrlInputState.INPUTTING);
        });
    }
  }, [triggerSubmit]);

  const generateTinyUrl = () => {
    if (validateUrl(urlInput)) {
      setCurrUrlInputState(UrlInputState.SUBMITTING);
      setTriggerSubmit((state) => !state);
    } else makeInvalid('Invalid URL format');
  };

  return (
    <>
      <Flex
        w='100vw'
        justifyContent='center'>
        <Flex
          w='640px'
          borderRadius='13px'
          h={currUrlInputState == UrlInputState.SUCCESS ? '128px' : '64px'}
          p='1.6rem'
          mx='1.6rem'
          bgColor='white'
          justifyContent='space-between'
          alignItems='center'
          boxShadow={
            currUrlInputState == UrlInputState.SUCCESS
              ? '8px 8px 25px rgba(0, 0, 0,0.3)'
              : '4px 4px 36px rgba(0, 0, 0,0.1)'
          }>
          {currUrlInputState == UrlInputState.SUCCESS ? (
            <Flex
              flexDir='column'
              w='100%'
              h='100%'
              justifyContent='space-between'>
              <CloseIcon
                fontSize='3.8rem'
                alignSelf='flex-end'
                position='absolute'
                zIndex='100'
                mt='-32px'
                mr='-24px'
                bgColor='rgba(255,255,255,0.85)'
                color='black'
                _hover={{
                  color: 'rgb(40, 209, 211)',
                  cursor: 'pointer',
                }}
                p='1rem'
                borderRadius='9px'
                boxShadow='4px -4px 6px rgba(0, 0, 0,0.1)'
                onClick={() => setCurrUrlInputState(UrlInputState.INPUTTING)}
              />
              <TextWithCopyButton
                textToShow={urlPair.original_url}
                textTitle='Your URL'
              />
              <TextWithCopyButton
                textToShow={API_SERVER_URL + '/' + urlPair.mini_url}
                textTitle='miniurl'
              />
            </Flex>
          ) : (
            <>
              <Input
                px='1.8rem'
                variant='unstyled'
                placeholder='Paste your URL here to Minify'
                fontSize='1.6rem'
                bgColor='white'
                h='100%'
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value.replace(/\s/g, ''))}
                onKeyPress={(e) => {
                  if (
                    e.key === 'Enter' &&
                    UrlInputState.INPUTTING == currUrlInputState
                  ) {
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
                      generateTinyUrl();
                    }
                  }}
                />
              ) : (
                <Button
                  fontSize='2.4rem'
                  isLoading={
                    currUrlInputState == UrlInputState.SUBMITTING
                  }></Button>
              )}
            </>
          )}
        </Flex>
      </Flex>
      <FloatingWarning errorMessage={invalidMessage} />
    </>
  );
};

export default TextArea;
