/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { FC } from 'react';

const Join: FC = (): JSX.Element => {
   return (
      <section id="join" className="py-[7rem]">
         <div className="container mx-auto max-w-screen-xl">
            <label className="block text-[30px] md:text-[36px] leading-[54px] text-white font-bold">
               Why be an OG Fan?
            </label>
            <div className="flex flex-col md:flex-row justify-evenly gap-8 my-8">

               <div className="flex-[0_0_30%] bg-[#252525] rounded-xl mt-12">
                  <div className="relative block text-center p-5 lg:p-8">
                     <img src="/assets/images/svg/crown.svg" alt="crown" className="absolute top-[-50px] left-0 right-0 ml-auto mr-auto" />
                     <p className="text-[#CCCCCC] text-md md:text-xl leading-[25px] md:leading-[30px] mt-12">
                        Be the first to{' '}
                        <span className="text-yellow">
                           own artist-approved
                           NFTs and unlock
                           fan-exclusive perks and
                           benefits.
                        </span>
                     </p>
                  </div>
               </div>

               <div className="flex-[0_0_30%] bg-[#252525] rounded-xl mt-12">
                  <div className="relative block text-center p-5 lg:p-8">
                     <img src="/assets/images/svg/gift.svg" alt="crown" className="absolute top-[-50px] left-0 right-0 ml-auto mr-auto" />
                     <p className="text-[#CCCCCC] text-md md:text-xl leading-[25px] md:leading-[30px] mt-12">
                        Ownership of these digital
                        collectibles{' '}
                        <span className="text-yellow">
                           unlock quarterly
                           hand-picked gifts from
                           the artist.
                        </span>
                     </p>
                  </div>
               </div>

               <div className="flex-[0_0_30%] bg-[#252525] rounded-xl mt-12">
                  <div className="relative block text-center p-5 lg:p-8">
                     <img src="/assets/images/svg/community.svg" alt="crown" className="absolute top-[-50px] left-0 right-0 ml-auto mr-auto" />
                     <p className="text-[#CCCCCC] text-md md:text-xl leading-[25px] md:leading-[30px] mt-12">
                        <span className="text-yellow">
                           Be part of the OG
                           community
                        </span>{' '}
                        and connect with your
                        favorite artists.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Join;
