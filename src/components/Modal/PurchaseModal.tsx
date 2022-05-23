/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FC, Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import XSvg from '@/components/Icons/X.svg';
import MinusSvg from '@/components/Icons/MInus.svg';
import PlusSvg from '@/components/Icons/Plus.svg';
import Image from 'next/image';

export const usePurchaseModal = () => {
   const [isShowing, setIsShowing] = useState(false);

   function toggle() {
      setIsShowing(!isShowing);
   }

   return {
      isShowing,
      toggle,
   };
};

interface PurchaseModalInterface {
   isOpen?: boolean;
   escapeFunction?: () => void;
   closeFunction: () => void;
}

const PurchaseModal: FC<PurchaseModalInterface> = ({
   isOpen = true,
   escapeFunction = () => {
      return false;
   },
   closeFunction
}): JSX.Element => {
   const buyNowButtonRef = useRef(null);

   const total = 5;
   const price = 0.02;
   const [counter, setCounter] = useState(1);
   const incrementCounter = () => setCounter(counter + 1);
   const decrementCounter = () => setCounter(counter - 1);

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newValue = parseInt(value);
      if (isNaN(newValue) || newValue > total) {
         setCounter(1);
      } else {
         setCounter(newValue);
      }
   };

   return (
      <Transition.Root show={isOpen} as={Fragment}>
         <Dialog
            as="div"
            className="relative z-10"
            initialFocus={buyNowButtonRef}
            onClose={escapeFunction}
         >
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
               <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                     enterTo="opacity-100 translate-y-0 sm:scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                     leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                     <Dialog.Panel className="relative bg-[#252525] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl sm:w-full">
                        <div className="bg-[#252525] px-8 py-8">
                           <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <Dialog.Title
                                 as="h3"
                                 className="relative text-4xl leading-[54px] font-bold text-white"
                              >
                                 Purchase NFT
                                 <button
                                    className="float-right text-gray-500 hover:text-yellow transition ease-out duration-500"
                                    onClick={closeFunction}
                                 >
                                    <XSvg className="h-4 w-4" />
                                 </button>
                              </Dialog.Title>
                              <div className="mt-5">
                                 <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row justify-between">
                                    <div className="relative h-full w-full m-[0_auto]">
                                       <Image
                                          src="/assets/images/nft/gabbi.png"
                                          alt="Gabbi NFT"
                                          width={376}
                                          height={376}
                                          layout="intrinsic"
                                          objectFit="cover"
                                       />
                                    </div>
                                    <div className="text-center sm:text-left">
                                       <label className="block text-lg text-[#B3B3B3]">
                                          Anything but Love Collection by
                                       </label>
                                       <label className="block text-4xl leading-[54px] font-bold text-yellow">
                                          Gabbi Garcia
                                       </label>
                                       <p className="text-sm leading-[24px] font-medium text-[#B3B3B3]">
                                          Gabbi Garcia NFT is a collection of
                                          1000 generative NFTs. This represents
                                          your membership in the exclusive Gabbi
                                          Garcia OG Fans community
                                       </p>
                                       <label className="block text-xl font-bold text-yellow mt-8">
                                          PRICE: {price} ETH
                                       </label>
                                       <p className="text-sm leading-[24px] font-medium text-[#B3B3B3]">
                                          1 Gabbi Garcia NFT = {price} ETH{' '}
                                          <br />
                                          Maximum of {total} NFTs per
                                          transaction
                                       </p>
                                       <div className="my-4">
                                          <button
                                             type="button"
                                             disabled={counter <= 1}
                                             className={`inline-block align-middle bg-white hover:bg-gray-200 transition ease-linear duration-300 rounded-lg p-2 disabled:opacity-75 hover:opacity-100 disabled:cursor-not-allowed`}
                                             onClick={decrementCounter}
                                          >
                                             <MinusSvg className="h-6 w-6" />
                                          </button>
                                          <input
                                             type="text"
                                             value={counter}
                                             className="inline-block align-middle rounded-lg !bg-white mx-2 h-6 w-24 px-3 py-5 outline-0 text-center"
                                             onChange={onChange}
                                             onKeyPress={(event) => {
                                                if (!/[0-9]/.test(event.key)) {
                                                   event.preventDefault();
                                                }
                                             }}
                                             readOnly={true}
                                          />
                                          <button
                                             type="button"
                                             disabled={counter >= total}
                                             className={`inline-block align-middle bg-white hover:bg-gray-200 transition ease-linear duration-300 rounded-lg p-2 disabled:opacity-75 disabled:cursor-not-allowed`}
                                             onClick={incrementCounter}
                                          >
                                             <PlusSvg className="h-6 w-6" />
                                          </button>
                                       </div>
                                       <button className="btn-contained px-8 py-2 mt-3" ref={buyNowButtonRef} onClick={closeFunction}>
                                          Buy Now
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   );
};

export default PurchaseModal;
