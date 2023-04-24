import {
  Box,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Input,
} from '@chakra-ui/react';

import { FiCopy } from 'react-icons/fi';

const TextWithCopyButton = ({ textToShow, textTitle, titleWidth=['95px'] }) => {
  return (
    <>
      <Box>
        <InputGroup
          size='lg'
          colorScheme='red'>
          <InputLeftAddon
            children={textTitle}
            fontSize={['1.2rem','1.6rem','1.6rem']}
            p='1.8rem'
            w={titleWidth}
          />
          <Input
            value={textToShow}
            fontSize={['1.2rem','1.6rem','1.6rem']}
            p='1.8rem'
          />
          <InputRightAddon
            children={<FiCopy />}
            fontSize='1.6rem'
            p='1.8rem'
            cursor='pointer'
            onClick={() => {navigator.clipboard.writeText(textToShow)}}
            _hover={
                {
                    color: 'rgb(40, 209, 211)'
                }
            }
          />
        </InputGroup>
      </Box>
    </>
  );
};

export default TextWithCopyButton;
