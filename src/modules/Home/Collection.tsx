import Image from 'next/image';
import React, { FC } from 'react';

const Collection: FC = () : JSX.Element => {
   return (
      <section id="collection" className="py-[7rem]">
         <div className="container mx-auto max-w-screen-xl">
            <div className="bg-[#252525] rounded-2xl">
               <div className="grid gap-10 grid-cols-1 md:grid-cols-[auto_300px] p-8 md:p-10 lg:py-14 lg:px-16 text-center md:text-left">
                  <div className="md:py-5">
                     <label className="text-white font-bold text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] leading-[40px] md:leading-[54px]">
                        Want to start your own
                        collection?
                     </label>
                     <p className="text-white text-md md:text-xl mt-5">
                        Are you a celebrity or artist that wants to release your own NFT collection? Leave your email and let’s talk!
                     </p>
                     <form className="relative mt-10 flex flex-col sm:flex-row w-full lg:w-[80%] pb-3">
                        <input
                           type="text"
                           className="rounded-xl px-5 h-[45px] md:h-[56px] text-white grow-[2] outline-0 bg-[#4D4D4D] focus:border-pink transition ease-out duration-75 w-full"
                           placeholder="Email Address"
                        />
                        <button className="btn-contained h-[45px] md:h-[56px] px-5 transition ease-linear duration-300 sm:ml-4 mt-3 sm:mt-0">
                           SUBMIT
                        </button>
                     </form>
                  </div>
                  <div className="relative w-full h-full justify-self-end p-0 hidden md:block">
                     <Image 
                        src="/assets/images/svg/collection.svg"
                        alt="Collection"
                        className="p-0"
                        layout="fill"
                        objectFit="contain"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Collection;
