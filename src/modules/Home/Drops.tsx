import { FC, MutableRefObject } from 'react';
import Image from 'next/image';

import gabbiDrops from '@/public/assets/images/celebrity/drops/gabbi-drops.png';
import Link from 'next/link';

const Drops: FC<{
   drops: MutableRefObject<HTMLElement>;
}> = ({ drops }): JSX.Element => {
   return (
      <section
         ref={drops}
         id="drops"
         className="py-[7rem]"
      >
         <div className="container mx-auto max-w-screen-xl">
            <label className="block text-[30px] md:text-[36px] leading-[54px] text-white font-bold">
               Coming Soon
            </label>
            <div className="lg:m-4">
               <div className="bg-white rounded-[20px] p-8 flex flex-wrap aligns-center mt-6">
                  <div className="grow-0 self-center m-[0_auto] my-2 sm:mx-2 w-[160px] height-[160px]">
                     <Image
                        src={gabbiDrops}
                        alt="gabbi drops"
                        layout="intrinsic"
                        className="rounded-full"
                     />
                  </div>
                  <div className="grow-[1] self-center">
                     <div className="my-2 sm:mx-2 px-2 text-center sm:text-left">
                        <label className="block text-[30px] md:text-[33px] lg:text-[36px] leading-[54px] font-bold text-[#323232]">
                           Gabbi Garcia
                        </label>
                        <p className="text-[20px] md:text-[22px] lg:text-[24px] leading-[36px] text-[#666666]">
                           Anything but Love
                           Collection
                        </p>
                     </div>
                  </div>
                  <div className="grow-[3] self-center">
                     <div className="flex-1 my-2 sm:mx-2">
                        <div className="border-[3px] border-yellow rounded-xl lg:h-[56px]">
                           <div className="flex justify-end">
                              <label className="text-[18px] md:text-[24px] leading-[40px] lg:leading-[50px] font-semibold text-[#B67E20] bg-yellow/40 opacity-[.62] px-10 rounded-tl-[20px] rounded-bl-[20px]">
                                 7 days, 3 hours
                              </label>
                           </div>
                        </div>
                        <div className="flex justify-between flex-col lg:flex-row">
                           <Link href="/gabbi-garcia">
                              <a className="btn-outline py-2 w-full mt-2 lg:mr-3 leading-[25px] lg:leading-[35px] h-[45px] lg:h-[56px]">
                                 Learn More
                              </a>
                           </Link>
                           <Link href="/gabbi-garcia">
                              <a className="btn-contained py-2 w-full mt-2 lg:ml-3 leading-[25px] lg:leading-[35px] h-[45px] lg:h-[56px]">
                                 Buy Now
                              </a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="flex flex-wrap justify-between rounded-xl bg-white mt-6  overflow-hidden">
                  <div className="text-center py-2 px-2 grow">
                     <label className="font-bold text-[20px] md:text-[24px] leading-[36px] text-[#000000]">
                        Anne Curtis
                     </label>
                  </div>
                  <div className="grow bg-pink opacity-[.62] sm:rounded-tl-[20px] sm:rounded-bl-[20px] text-center py-2 px-2">
                     <label className="font-bold text-[20px] md:text-[24px] leading-[36px] text-white">
                        13 days, 3 hours
                     </label>
                  </div>
               </div> */}
            </div>
         </div>
      </section>
   );
};

export default Drops;
