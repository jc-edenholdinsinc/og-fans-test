import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Loader } from '@/components/index';

const Learn = dynamic(
   () => import('@/modules/Learn'),
   {
      loading: () => <Loader />,
   }
);
const LearnPage: NextPage = (): JSX.Element => (
   <Learn />
);

export default LearnPage;
