import NavSection from '../home/components/NavSection';
import { Flex, Box, Text } from '@chakra-ui/react';
import TextWithCopyButton from '../home/components/TextWithCopyButton';
import { useState } from 'react';
import { UrlPair } from '../../utilities/types';
import { API_SERVER_URL } from '../../utilities/values';
import StatOfMiniurl from './StatOfMiniurl';
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
      <StatOfMiniurl miniUrlId=''/>
    </>
  );
};

export default Stat;
