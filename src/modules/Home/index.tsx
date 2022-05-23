import {
   FC,
   MutableRefObject,
   useEffect,
   useRef,
   useState,
} from 'react';

import Layout from '@/layout/index';
import Banner from '@/modules/Home/Banner';
// import Mystery from '@/modules/Home/Mystery';
import Drops from '@/modules/Home/Drops';
import Calendar from '@/modules/Home/Calendar';
import Collection from '@/modules/Home/Collection';
import Join from '@/modules/Home/Join';
import Faqs from '@/modules/Home/Faqs';
import { MessageModal } from '@/components/index';
import { useRouter } from 'next/router';

const Home: FC = (): JSX.Element => {
   const drops =
      useRef() as MutableRefObject<HTMLElement>;
   const calendar =
      useRef() as MutableRefObject<HTMLElement>;

   const router = useRouter();
   const asPath = router.asPath;

   const [openModal, setOpenModal] = useState(false);
   const closeModal = () => {
      setOpenModal(false);
   }
   
   useEffect(() => {
      if (asPath === '/#drops') {
         drops.current.scrollIntoView({
            behavior: 'smooth',
         });
      } else if (asPath === '/#calendar') {
         calendar.current.scrollIntoView({
            behavior: 'smooth',
         });
      }
   }, [asPath]);

   return (
      <Layout
         title={`Be an OG FAN`}
         description={`World’s first artist supporting platform where OG Fans can buy NFTs to support their favorite personalities.`}
      >
         <MessageModal 
            isOpen={openModal} 
            title="Payment Unsuccessful"
            description="We're sorry, but your payment was unsuccessful. Please try again."
            status="error"
            buttonOneFunction={closeModal} 
            escapeFunction={closeModal}
         />

         <Banner />
         {/* <Mystery /> */}
         <div className="m-8">
            <Drops drops={drops} />
            <Join />
            <Calendar calendar={calendar} />
            <Collection />
            <Faqs />
         </div>
      </Layout>
   );
};

export default Home;
