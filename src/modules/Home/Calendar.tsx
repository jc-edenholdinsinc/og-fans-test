/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { FC, MutableRefObject } from 'react';

const Calendar: FC<{
   calendar: MutableRefObject<HTMLElement>;
}> = ({ calendar }): JSX.Element => {
   return (
      <section
         ref={calendar}
         id="calendar"
         className="py-[7rem]"
      >
         <div className="container mx-auto max-w-screen-xl">
            <label className="block text-[30px] md:text-[36px] leading-[54px] text-white font-bold">
               Launch Calendar
            </label>
            <div className="flex flex-nowrap justify-between overflow-hidden overflow-x-auto items-start mt-6">
               <Link href="/gabbi-garcia">
                  <a className="flex flex-[1_0_50%] sm:flex-[1_0_40%] md:flex-[1_0_30%] lg:flex-[1_0_20%] rounded-[20px] hover:opacity-70 transition-all ease-linear duration-300 overflow-hidden cursor-pointer mx-4 w-[256px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
                     <figure className="relative flex justify-center items-center w-full h-full">
                        {/* <img
                           src="/assets/images/celebrity/calendar/gabbi.jpeg"
                           alt="Gabbi Calendar"
                           className="w-full h-full"
                        /> */}
                        <Image
                           src="/assets/images/celebrity/calendar/gabbi.jpeg"
                           alt="Gabbi Calendar"
                           layout="fill"
                           objectFit="cover"
                        />
                        <div className="absolute left-0 bottom-0 p-4 w-full bg-linear-gradient">
                           <span className="block text-white text-sm">
                              By Gabbi Garcia
                           </span>
                           <span className="font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white">
                              Life is Paradise
                           </span>
                        </div>
                        <div className="bg-yellow rounded-full px-2 absolute top-4 right-4">
                           <span className="text-[#1A1A1A] font-bold text-sm">
                              June 20
                           </span>
                        </div>
                     </figure>
                  </a>
               </Link>
               <Link href="/gabbi-garcia">
                  <a className="flex flex-[1_0_50%] sm:flex-[1_0_40%] md:flex-[1_0_30%] lg:flex-[1_0_20%] rounded-[20px] hover:opacity-70 transition-all ease-linear duration-300 overflow-hidden cursor-pointer mx-4 w-[256px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
                     <figure className="relative flex justify-center items-center w-full h-full">
                        {/* <img
                           src="/assets/images/celebrity/calendar/juli.jpeg"
                           alt="Gabbi Calendar"
                           className="w-full h-full"
                        /> */}
                        <Image
                           src="/assets/images/celebrity/calendar/juli.jpeg"
                           alt="Julie Calendar"
                           layout="fill"
                           objectFit="cover"
                        />
                        <div className="absolute left-0 bottom-0 p-4 w-full bg-linear-gradient">
                           <span className="block text-white text-sm">
                              By Julianne San Jose
                           </span>
                           <span className="font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white">
                              Love, life
                           </span>
                        </div>
                        <div className="bg-yellow rounded-full px-2 absolute top-4 right-4">
                           <span className="text-[#1A1A1A] font-bold text-sm">
                              July 20
                           </span>
                        </div>
                     </figure>
                  </a>
               </Link>

               <Link href="/gabbi-garcia">
                  <a className="flex flex-[1_0_50%] sm:flex-[1_0_40%]  md:flex-[1_0_30%] lg:flex-[1_0_20%] rounded-[20px] hover:opacity-70 transition-all ease-linear duration-300 overflow-hidden cursor-pointer mx-4 w-[256px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
                     <figure className="relative flex justify-center items-center w-full h-full">
                        {/* <img
                           src="/assets/images/celebrity/calendar/sarah.jpeg"
                           alt="Gabbi Calendar"
                           className="w-full h-full"
                        /> */}
                        <Image
                           src="/assets/images/celebrity/calendar/sarah.jpeg"
                           alt="Sarah Calendar"
                           layout="fill"
                           objectFit="cover"
                        />
                        <div className="absolute left-0 bottom-0 p-4 w-full bg-linear-gradient">
                           <span className="block text-white text-sm">
                              By Sarah Lahbati
                           </span>
                           <span className="font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white">
                              Living the Dream
                           </span>
                        </div>
                        <div className="bg-yellow rounded-full px-2 absolute top-4 right-4">
                           <span className="text-[#1A1A1A] font-bold text-sm">
                              August 20
                           </span>
                        </div>
                     </figure>
                  </a>
               </Link>

               <Link href="/gabbi-garcia">
                  <a className="flex flex-[1_0_50%] sm:flex-[1_0_40%]  md:flex-[1_0_30%] lg:flex-[1_0_20%] rounded-[20px] hover:opacity-70 transition-all ease-linear duration-300 overflow-hidden cursor-pointer mx-4 w-[256px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
                     <figure className="relative flex justify-center items-center w-full h-full">
                        {/* <img
                           src="/assets/images/celebrity/calendar/sanya.jpeg"
                           alt="Gabbi Calendar"
                           className="w-full h-full"
                        /> */}
                        <Image
                           src="/assets/images/celebrity/calendar/sanya.jpeg"
                           alt="Sanya Calendar"
                           layout="fill"
                           objectFit="cover"
                        />
                        <div className="absolute left-0 bottom-0 p-4 w-full bg-linear-gradient">
                           <span className="block text-white text-sm">
                              By Sanya Lopez
                           </span>
                           <span className="font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-white">
                              Better Together
                           </span>
                        </div>
                        <div className="bg-yellow rounded-full px-2 absolute top-4 right-4">
                           <span className="text-[#1A1A1A] font-bold text-sm">
                              September 20
                           </span>
                        </div>
                     </figure>
                  </a>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Calendar;
