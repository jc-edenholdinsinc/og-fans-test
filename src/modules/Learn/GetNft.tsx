/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const GetNft: FC = (): JSX.Element => {
   return (
      <section id="get-nft" className="pb-[7em]">
         <div className="container mx-auto max-w-screen-xl rounded-lg border-4 border-pink shadow-md p-4">
            <div className="w-full text-center">
               <label className="text-[36px] leading-[54px] font-bold text-white">
                  Get Your NFT Now
               </label>
            </div>
            <div className="mt-7 mb-7 w-full text-center">
               <Link href={`/mint`}>
                  <a className="btn-contained py-2 px-10 sm:px-12 md:px-13 lg:px-14">
                     Mint Now
                  </a>
               </Link>
            </div>
            {/* <div className="mt-7 grid gap-5 grid-cols-1 sm:grid-cols-[300px_auto] md:grid-cols-[350px_auto] lg:grid-cols-[450px_auto] md:mx-[4rem]">
               <div className="rounded-[20px] drop-shadow-[0px_4px_4px_rgba(230,198,205,0.46)] overflow-hidden h-[300px] md:w-[300px] md:h-[400px] lg:w-[384px] lg:h-[468px] m-4">
                  <figure className="relative w-full h-full">
                     <Image
                        src="/assets/images/celebrity/calendar/gabbi2.jpeg"
                        alt="Gabbi Calendar"
                        className="w-full h-full"
                        layout="fill"
                        objectFit="cover"
                     />
                  </figure>
               </div>
               <div className="m-4 relative">
                  <label className="block text-[24px] leading-[36px] font-bold text-white">
                     Gabbi Garcia NFT
                  </label>
                  <ul className="list-disc text-white text-lg mt-4 mx-4 mb-20">
                     <li>
                        Insert perks / utilities
                        here
                     </li>
                     <li>
                        Insert perks / utilities
                        here
                     </li>
                     <li>
                        Insert perks / utilities
                        here
                     </li>
                     <li>
                        Insert perks / utilities
                        here
                     </li>
                  </ul>
                  <Link href={`/mint`}>
                     <a className="btn-contained py-2 px-10 absolute bottom-0 left-0 w-full md:w-auto">
                        Mint Now
                     </a>
                  </Link>
               </div>
            </div> */}
         </div>
      </section>
   );
};

export default GetNft;
