import Link from 'next/link';
import { FC } from 'react';

import ArrowRightSvg from '@/components/Icons/ArrowRight.svg';
import InstagramSvg from '@/components/Icons/Instagram.svg';
import FacebookSvg from '@/components/Icons/Facebook.svg';
import TwitterSvg from '@/components/Icons/Twitter.svg';
import DiscordSvg from '@/components/Icons/Discord.svg';

const Footer: FC = (): JSX.Element => {
   return (
      <footer className="mt-[4rem] pb-3 m-4">
         <div className="container mx-auto max-w-screen-xl">
            <div className="flex flex-wrap justify-evenly">
               <div className="m-2">
                  <label className="block text-white font-semibold text-lg">
                     Subscribe get notified on our
                     future drops.
                  </label>
                  <form className="relative mt-3">
                     <input
                        type="text"
                        className="border-[1px] rounded-xl bg-transparent px-5 py-3 text-white w-full grow-[2] outline-0 focus:border-yellow transition ease-out duration-75"
                        placeholder="Email Address"
                     />
                     <button className="absolute z-[2] bottom-[7px] right-[7px] bg-white p-[0.4em] rounded-xl hover:bg-gray-200 transition ease-linear duration-300">
                        <ArrowRightSvg className="text-black w-full h-full p-1" />
                     </button>
                  </form>
               </div>
               <div className="m-2">
                  <label className="block text-white font-semibold text-lg text-center">
                     Follow us
                  </label>
                  <div className="mt-3 flex flex-wrap items-center gap-x-[20px]">
                     <Link href="https://instagram.com/ogfansnfts">
                        <a target="_blank" className="rounded-xl border-[1px] border-white overflow-hidden w-[50px] h-[50px] p-[.8rem] group hover:border-yellow transition ease-out duration-500">
                           <InstagramSvg className="text-white fill-white group-hover:text-yellow group-hover:fill-yellow transition ease-out duration-500 w-full h-full" />
                        </a>
                     </Link>
                     <Link href="https://twitter.com/OGFansNFTS">
                        <a target="_blank" className="rounded-xl border-[1px] border-white overflow-hidden w-[50px] h-[50px] p-[.8rem] group hover:border-yellow transition ease-out duration-500">
                           <TwitterSvg className="text-white fill-white group-hover:text-yellow group-hover:fill-yellow transition ease-out duration-500 w-full h-full" />
                        </a>
                     </Link>
                     <Link href="/">
                        <a className="rounded-xl border-[1px] border-white overflow-hidden w-[50px] h-[50px] p-[.8rem] pl-[.8rem] group hover:border-yellow transition ease-out duration-500">
                           <FacebookSvg className="text-white fill-white group-hover:text-yellow group-hover:fill-yellow transition ease-out duration-500 w-full h-full" />
                        </a>
                     </Link>
                     <Link href="/">
                        <a className="rounded-xl border-[1px] border-white overflow-hidden w-[50px] h-[50px] p-[.8rem] pl-[.8rem] group hover:border-yellow transition ease-out duration-500">
                           <DiscordSvg className="text-white fill-white group-hover:text-yellow group-hover:fill-yellow transition ease-out duration-500 w-full h-full" />
                        </a>
                     </Link>
                  </div>
               </div>
               <div className="m-2">
                  <label className="block text-white font-semibold text-lg text-center">
                     For queries or concers,
                     contact us at xxxx@gmail.com.
                  </label>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
