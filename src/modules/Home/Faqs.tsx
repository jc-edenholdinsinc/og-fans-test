/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from 'react';

interface IAccordion {
   title: string;
   content: string;
   open: boolean;
}

const Faqs: FC = (): JSX.Element => {
   const [accordion, setAccordion] = useState<
      IAccordion[]
   >([
      {
         title: 'What is OG Fans?',
         content:
            'OG Fans is the World’s first artist-supporting platform where OG Fans can buy NFTs to support their favorite personalities.  OG Fans is the best way for celebrities and influencers to connect with their most intimate fans using NFTs.',
         open: false,
      },
      {
         title: 'What is an NFT?',
         content:
            'NFT stands for Non-Fungible Tokens. These are unique assets whose ownership is stored on a digital ledger also known as the Blockchain. An NFT is also considered as “the modern-day collectibles”.',
         open: false,
      },
      {
         title: 'How to buy an NFT?',
         content:
            'We have two ways of owning your very first NFT.  We have a Private Sale (exclusively for our early bird OG Fans) and a Public Sale. By connecting your Crypto Wallet and going to the OG Fans “mint page”, you can now simply own your favorite artist and influencers’ NFT.',
         open: false,
      },
      {
         title: 'What is NFT Minting?',
         content:
            'Minting is the process of converting special digital data (image files, music files, etc.) into digital assets recorded on the Blockchain.',
         open: false,
      },
      {
         title: 'What mode of payment can I use in purchasing an OG Fans NFT?',
         content:
            'OG Fans accept both credit card payments and Matic/Ether/Sol payments.',
         open: false,
      },
      {
         title: 'When is the sale?',
         content:
            'We keep our OG Fans community updated.  We post our NFT Sale schedule via OG Fans Launch Calendar and through our social media (Facebook, Twitter, Instagram, and Discord).',
         open: false,
      },
      {
         title: 'What are the benefits for OG Fans NFT holders?',
         content: 'OG Fans NFT holders are entitled to EXCLUSIVE PERKS & GIFTS which they can receive from the artist or influencer that they’re supporting.',
         open: false,
      },
      {
         title: 'Can I sell my NFT?',
         content: 'Yes, you can.  Through the secondary market, via OpenSea Marketplace. OpenSea is a decentralized marketplace that allows users to buy and sell NFTs.',
         open: false,
      },
   ]);

   const toggleAccordion = (
      index: number
   ): void => {
      const newArr = [...accordion];
      newArr[index].open = !newArr[index].open;
      setAccordion(newArr);
   };

   return (
      <section id="faqs" className="py-[7rem]">
         <div className="container mx-auto max-w-screen-xl">
            <label className="block text-[30px] md:text-[36px] leading-[54px] text-white font-bold">
               FAQs
            </label>
            <div className="mt-6">
               <div
                  id="accordion-collapse"
                  data-accordion="collapse"
               >
                  {accordion.map(
                     (item, index) => (
                        <div
                           key={`faqs-${index}`}
                           className="border-line"
                        >
                           <h2
                              id={`accordion-collapse-heading-${index}`}
                           >
                              <button
                                 onClick={() =>
                                    toggleAccordion(
                                       index
                                    )
                                 }
                                 type="button"
                                 className="flex justify-between items-center text-left p-5 w-full text-white text-md md:text-2xl font-medium"
                                 data-accordion-target={`#accordion-collapse-body-${index}`}
                                 aria-expanded="true"
                                 aria-controls={`accordion-collapse-body-${index}`}
                              >
                                 <span>
                                    {item.title}
                                 </span>
                                 <img
                                    src={`/assets/images/svg/down.svg`}
                                    alt="FAQ Icon"
                                    className={`inline-block w-[15px] md:w-[20px] transform transition ease duration-300 ${
                                       item.open
                                          ? `rotate-[180deg]`
                                          : ``
                                    }`}
                                 />
                              </button>
                           </h2>
                           <div
                              id={`accordion-collapse-body-${index}`}
                              className={
                                 item.open
                                    ? `slide-down`
                                    : 'slide-up'
                              }
                              aria-labelledby={`accordion-collapse-heading-${index}`}
                           >
                              <div className="pb-5 px-5">
                                 <p className="mb-2 text-sm md:text-base text-[#F1ECF9] tracking-tight font-light">
                                    {item.content}
                                 </p>
                              </div>
                           </div>
                        </div>
                     )
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Faqs;
