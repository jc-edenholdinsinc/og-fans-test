import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Loader } from '@/components/index';

const Custom404 = dynamic(
   () => import('@/modules/Custom404'),
   {
      loading: () => <Loader />,
   }
);
const Custom404Page: NextPage =
   (): JSX.Element => <Custom404 />;

export default Custom404Page;
