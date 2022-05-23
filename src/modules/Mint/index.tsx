import { ChangeEvent, FC, useState } from 'react';
import Layout from '@/layout/index';
import MinusSvg from '@/components/Icons/MInus.svg';
import PlusSvg from '@/components/Icons/Plus.svg';
import Image from 'next/image';

declare let window: any;
const disableMint = async() => {
   const mintBtn: HTMLButtonElement | null = document.querySelector("#mintBtn");
   if(mintBtn){
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      mintBtn.disabled = (accounts.length === 0) ? true : false;
   }
}

const Mint: FC = (): JSX.Element => {
   const total = 5;
   const totalMint = 0;
   const maximumTotalMint = 5000;
   const [counter, setCounter] = useState(1);
   const incrementCounter = () =>
      setCounter(counter + 1);
   const decrementCounter = () =>
      setCounter(counter - 1);
   const onChange = (
      e: ChangeEvent<HTMLInputElement>
   ) => {
      const { value } = e.target;
      const newValue = parseInt(value);

      if (isNaN(newValue) || newValue > total) {
         setCounter(1);
      } else {
         setCounter(newValue);
      }
   };

   return (
      <Layout
         title={`Gabbi Garcia Mint`}
         description={`Public sale is now live`}
      >
         <div className="m-4" onLoad={disableMint}>
            <section
               id="mint"
               className="py-[7rem] flex justify-center"
            >
               <div className="max-w-xl text-center">
                  <label className="mt-7 text-white font-bold text-[25px] md:text-[29px] lg:text-[36px] leading-[54px]">
                     MINT A GABBI GARCIA NFT
                     PUBLIC SALE IS NOW LIVE
                  </label>
                  <div className="mt-7 rounded-[20px] bg-pink p-6">
                     <label className="text-white font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[54px] my-3">
                        GABBI GARCIA NFT
                     </label>
                     <div className="flex justify-center my-4">
                        <div className="bg-gray-200 rounded-[20px] overflow-hidden w-[250px] h-[300px] m-4 border-4 border-[#8E8E8E]">
                           <figure className="relative w-full h-full px-4">
                              {/* <img
                                 src="/assets/images/logo/og-fans-logo.png"
                                 alt="Gabbi Calendar"
                                 className="mt-[50%] rotate-[-45deg]"
                              /> */}
                              <Image
                                 src="/assets/images/logo/og-fans-logo.png"
                                 alt="OG Fans"
                                 layout="fill"
                                 objectFit="contain"
                                 className="rotate-[-45deg]"
                              />
                           </figure>
                        </div>
                     </div>
                     <label className="text-white font-bold text-[24px] leading-[36px] my-4">
                        {totalMint}/{maximumTotalMint}
                     </label>
                     <p className="text-white font-medium text-lg my-4">
                        1 Gabbi Garcia NFT = 0.1
                        ETH
                        <br />
                        Maximum of 5 NFTs per
                        transaction
                     </p>
                     <div className="flex justify-center my-4">
                        <button
                           type="button"
                           disabled={counter <= 1}
                           className={`bg-white hover:bg-gray-200 transition ease-linear duration-300 rounded-full p-2 disabled:opacity-75 hover:opacity-100 disabled:cursor-not-allowed`}
                           onClick={
                              decrementCounter
                           }
                        >
                           <MinusSvg className="h-6 w-6" />
                        </button>
                        <input
                           type="text"
                           value={counter}
                           className="rounded-full !bg-white mx-2 h-6 w-24 px-3 py-5 outline-0 text-center"
                           onChange={onChange}
                           onKeyPress={(
                              event
                           ) => {
                              if (
                                 !/[0-9]/.test(
                                    event.key
                                 )
                              ) {
                                 event.preventDefault();
                              }
                           }}
                        />
                        <button
                           type="button"
                           disabled={
                              counter >= total
                           }
                           className={`bg-white hover:bg-gray-200 transition ease-linear duration-300 rounded-full p-2 disabled:opacity-75 disabled:cursor-not-allowed`}
                           onClick={
                              incrementCounter
                           }
                        >
                           <PlusSvg className="h-6 w-6" />
                        </button>
                     </div>
                     <button id="mintBtn" className="bg-white hover:bg-gray-200 transition ease-linear duration-300 rounded-xl w-48 py-1 text-center text-black font-bold text-[24px] leading-[36px] my-4 disabled:cursor-not-allowed">
                        MINT
                     </button>
                     <p className="text-white text-xs">Please make sure you are connected to the right network (Etherium Mainnet) and the correct address.</p>
                     <p className="text-white text-xs mt-3"><b>PLEASE NOTE:</b> You&apos;ll get a random NFT of the artist upon purchase. Once you make the purchase, you cannot undo this action.</p>
                  </div>
               </div>
            </section>
         </div>
      </Layout>
   );
};

export default Mint;
