import NavSection from '../home/components/NavSection';
import { useParams } from 'react-router-dom';
import StatOfMiniurl from './StatOfMiniurl';
import { UrlPair } from '../../utilities/types';
import { useState } from 'react';
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
    </>
  );
};

export default Stat;
