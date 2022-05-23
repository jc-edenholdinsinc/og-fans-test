import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Loader } from '@/components/index';

const Mint = dynamic(
   () => import('@/modules/Mint'),
   {
      loading: () => <Loader />,
   }
);
const MintPage: NextPage = (): JSX.Element => (
   <Mint />
);

export default MintPage;
