import { FC } from 'react';
import Layout from '@/layout/index';
import Information from '@/modules/Learn/Information';
import GetNft from '@/modules/Learn/GetNft';

const Learn: FC = (): JSX.Element => {
   return (
      <Layout
         title={`Who si Gabbi Garcia?`}
         description={`Get Your NFT Now`}
      >
         <div className="m-8">
            <Information />
            {/* <GetNft /> */}
         </div>
      </Layout>
   );
};

export default Learn;
