import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MessageModal, { useWarningModal, } from '@/components/Modal/MessageModal';

declare let window: any;

const truncateWalletAddress = (walletAddress: string) => {
   return walletAddress.length > 5 ? `${walletAddress.substring(0, 4)}...${walletAddress.substring(walletAddress.length - 4)}` : walletAddress;
}

const onClickConnect = async () => {
   const connectWalletBtn: HTMLButtonElement | null = document.querySelector("#connectWallet");
   if(connectWalletBtn){
      try {
         await window.ethereum.request({ method: 'eth_requestAccounts' });
         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
         connectWalletBtn.innerHTML = truncateWalletAddress(accounts[0]) || 'Error encountered';
      } catch (error) {
         console.error(error);
      }
   }
};

const isPolygonNetwork = () => {
   const polygonNetworkId = "137";
   const networkId = window.ethereum.networkVersion;
   return (polygonNetworkId != networkId) ? false : true;   
}

const redirectToMetamask = () => {

   window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en", "_blank");
}

const isMetaMaskInstalled = () => {
   const { ethereum } = window as any;
   return Boolean(ethereum && ethereum.isMetaMask);
};

const MetaMaskClientCheck = async () => {

   const connectWalletBtn: HTMLButtonElement | null = document.querySelector("#connectWallet");   

   if (connectWalletBtn){
      if (!isMetaMaskInstalled()) {
         connectWalletBtn.innerText = 'Install MetaMask!';
         connectWalletBtn.disabled = true;
         connectWalletBtn.onclick = redirectToMetamask;
         
      } else {      
         if (isPolygonNetwork()) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
   
            if (accounts.length === 0) {
               connectWalletBtn.innerText = 'Connect Wallet';
               connectWalletBtn.disabled = false;
               connectWalletBtn.onclick = onClickConnect;
      
            } else {
               connectWalletBtn.innerHTML = truncateWalletAddress(accounts[0]) || 'Error encountered';
               connectWalletBtn.disabled = false;
            }
         } else {
            connectWalletBtn.innerText = 'Network Not Supported';
            connectWalletBtn.disabled = true;
         }         
      }
   }
};

const styles = {
   ul: `menu flex justify-end list-reset m-0 mt-3 md:mt-0 w-full lg:w-auto`,
   li: `border-none lg:mx-4`,
   a: `block lg:inline-block px-4 py-3 no-underline font-semibold text-base hover:text-yellow transition ease-out duration-500`,
   connectWallet: `block lg:inline-block px-7 py-2 no-underline border-2 rounded-xl border-white font-semibold text-center text-base text-white hover:border-yellow hover:bg-yellow transition ease-out duration-500`,
};

const Navbar: FC = (): JSX.Element => {
   const [checked, setChecked] = useState(false);

   return (
      <nav onLoad={MetaMaskClientCheck} className={`nav px-4 py-4 bg-neutral-900 lg:bg-neutral-900/90 fixed top-0 left-0 right-0 bottom-auto z-10`}>
         <div className="container mx-auto max-w-screen-xl flex flex-wrap items-center justify-between ">
            <Link href="/">
               <a
                  className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] relative mx-2"
                  onClick={() =>
                     setChecked(false)
                  }
               >
                  <Image src="/assets/images/logo/og-fans-logo-yellow.svg" alt="OG Fans Logo" layout='fill' objectFit='contain' />
               </a>
            </Link>

            <input
               className="menu-btn hidden"
               type="checkbox"
               id="menu-btn"
               checked={checked}
               onChange={(e) =>
                  setChecked(e.target.checked)
               }
            />
            <label
               className="menu-icon block cursor-pointer lg:hidden px-2 py-4 relative select-none"
               htmlFor="menu-btn"
            >
               <span className="navicon bg-white flex items-center relative"></span>
            </label>

            <ul className={styles.ul}>
               <li className={styles.li}>
                  <Link href="/#drops">
                     <a
                        className={`${styles.a} text-white`}
                        onClick={() =>
                           setChecked(false)
                        }
                     >
                        Drops
                     </a>
                  </Link>
               </li>

               <li className={styles.li}>
                  <Link href="/#calendar">
                     <a
                        className={`${styles.a} text-white`}
                        onClick={() =>
                           setChecked(false)
                        }
                     >
                        Calendar
                     </a>
                  </Link>
               </li>

               <li className={styles.li}>
                  <Link href="/#celebrities">
                     <a
                        className={`${styles.a} text-white`}
                        onClick={() =>
                           setChecked(false)
                        }
                     >
                        Celebrities
                     </a>
                  </Link>
               </li>

               <li className={styles.li}>
                  <Link href="/#about">
                     <a
                        className={`${styles.a} text-white`}
                        onClick={() =>
                           setChecked(false)
                        }
                     >
                        About
                     </a>
                  </Link>
               </li>

               <li className={styles.li}>
                  <Link href="/#faqs">
                     <a
                        className={`${styles.a} text-white`}
                        onClick={() =>
                           setChecked(false)
                        }
                     >
                        FAQ
                     </a>
                  </Link>
               </li>

               <li className={`${styles.li} ${checked ? `m-4` : ``}`}>
                  <Link href="#">
                     <a
                        className={
                           styles.connectWallet
                        }
                        id="connectWallet"
                        onClick={onClickConnect}
                     >
                        Connect Wallet
                     </a>
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
