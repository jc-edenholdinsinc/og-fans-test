import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Loader } from '@/components/index';

const Home = dynamic(
   () => import('@/modules/Home'),
   {
      loading: () => <Loader />,
   }
);
const HomePage: NextPage = (): JSX.Element => (
   <Home />
);

export default HomePage;
