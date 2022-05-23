/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { FC } from 'react';
import CalendarSvg from '@/components/Icons/Calendar.svg';
import PurchaseModal, {
   usePurchaseModal,
} from '@/components/Modal/PurchaseModal';

const Information: FC = (): JSX.Element => {
   const { isShowing: isBuyNowModalShowed, toggle: toggleBuyNowModal } =
      usePurchaseModal();
   return (
      <>
         <PurchaseModal isOpen={isBuyNowModalShowed} closeFunction={toggleBuyNowModal} escapeFunction={toggleBuyNowModal}/>
         <section id="information" className="py-[7rem]">
            <div className="container mx-auto max-w-screen-xl">
               <div className="flex gap-10 lg:gap-20 flex-col-reverse lg:flex-row">
                  <div className="relative">
                     <div className="mb-[4em]">
                        <label className="block text-base font-bold text-yellow ">
                           WHO IS GABBI GARCIA
                        </label>
                        <p className="text-[20px] leading-[32px] text-white mt-4">
                           Gabriella Louise Ortega Lopez (born December 2,
                           1998), known professionally as Gabbi Garcia, is a
                           Filipino actress, global endorser, singer, host and
                           vlogger. Currently an artist of the GMA Network, her
                           first acting role was as Nicole Perez on GMA
                           Network&apos;s primetime series My Destiny, Pia Sta.
                           Maria in Let The Love Begin. She then played
                           Sang&apos;gre Alena in the reboot of Encantadia. This
                           series gave her massive popularity and rose to fame.
                        </p>
                     </div>

                     <div className="mb-[4em]">
                        <label className="block text-base font-bold text-yellow ">
                           ABOUT THE NFT COLLECTION
                        </label>
                        <p className="text-[20px] leading-[32px] text-white mt-4">
                           This is the 1st ever NFT collection of Gabbi Garcia
                           which aims to connect and reward her truest fans and
                           supporters. It features her... Holding this NFT
                           grants you access to a tightknit, private community
                           where you’ll be able to easily connect with Gabbi.
                           Holders will also be eligible to receive (4)
                           hand-picked gifts from Gabbi to be distributed every
                           quarter.
                        </p>
                     </div>

                     <div className="mb-[4em]">
                        <label className="block text-base font-bold text-yellow ">
                           | ROADMAP
                        </label>
                        <p className="text-[20px] leading-[32px] text-white mt-4">
                           Holding the NFT will give you exclusive access to
                           perks and benefits like; meet and greet with Gabbi,
                           video shuoutouts on your birthday depending on the
                           NFT tier you have. We will offer two passes: Member
                           Pass for 0.05 ETH and Premium Pass for 0.1 ETH, each
                           pass has different benefits that come with it.
                        </p>
                     </div>
                  </div>
                  <div>
                     <div className="relative w-[100%] lg:w-[450px] h-[250px] xs:h-[350px] sm:h-[400px] md:h-[450px] mb-4">
                        <Image
                           src="/assets/images/nft/gabbi.png"
                           alt="Gabbi NFT"
                           layout="fill"
                           objectFit="contain"
                        />
                     </div>

                     <div className="text-center lg:text-left">
                        <label className="block text-[#CACACA] text-lg">
                           Anything but Love Collection by
                        </label>
                        <label className="block text-white text-4xl font-bold">
                           Gabbi Garcia
                        </label>
                        <label className="block text-yellow text-xl font-bold">
                           PRICE: 0.02 ETH
                        </label>

                        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 lg:gap-0 lg:justify-between mt-2 sm:mt-6">
                           <button className="btn-default px-8 py-2 mt-4">
                              <CalendarSvg className="inline-block mr-3 h-6 w-6" />{' '}
                              Add to Calendar
                           </button>
                           <button className="btn-contained px-8 py-2 mt-4" onClick={toggleBuyNowModal}>
                              Buy Now
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Information;
