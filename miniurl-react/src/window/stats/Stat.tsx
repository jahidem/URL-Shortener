import NavSection from '../home/components/NavSection';
import { useParams } from 'react-router-dom';
import StatOfMiniurl from './StatOfMiniurl';
import { UrlPair } from '../../utilities/types';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import FooterSection from '../home/components/FooterSection';
const Stat = () => {
  const { mini_url_id } = { mini_url_id: '', ...useParams() };
  const [urlPair, setUrlPair] = useState<UrlPair>({
    id: '0',
    mini_url: '',
    original_url: '',
    visit_count: 0,
  });
  return (
    <>
      <NavSection />
      <hr />
      <StatOfMiniurl
        miniUrlId={mini_url_id}
        urlPair={urlPair}
        setUrlPair={setUrlPair}
      />
      <Box width='100%' position='fixed' bottom='0' >
        <FooterSection />
      </Box>
    </>
  );
};

export default Stat;
