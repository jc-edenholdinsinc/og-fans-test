/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FC } from 'react';

const styles = {
   beText: `text-contained text-white font-black text-[60px] xs:text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] leading-[90%] z-10`,
   anText: `text-outline font-black text-[60px] xs:text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] leading-[90%] ml-4 md:ml-7 z-10`,
   ogfanText: `text-yellow font-black text-[60px] xs:text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] leading-[108%] z-10`,
   bannerText: `block text-white text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl max-w-[50%] sm:max-w-[40%] mb-10 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 mt-4 z-10`,
   mintNow: `btn-contained inline-block py-2 px-5 md:py-2 md:px-10 z-10 mt-4`,
};

const Banner: FC = (): JSX.Element => {
   return (
      <section
         id="banner"
         className="pt-[6rem] sm:pt-[7rem] md:pt-[8rem] lg:pt-[9rem] z-10"
      >
         <div className="container mx-auto max-w-screen-xl">
            <div className="m-8">
               <div className="pb-[15em]">
                  <div className="relative mt-20 ml-[-4px]">
                     <label
                        className={styles.beText}
                     >
                        BE
                     </label>
                     <label
                        className={styles.anText}
                     >
                        AN
                     </label>
                     <div>
                        <label
                           className={
                              styles.ogfanText
                           }
                        >
                           OG FAN
                        </label>
                     </div>
                  </div>
                  <p className={styles.bannerText}>
                     World’s first artist supporting
                     platform where OG Fans can buy
                     NFTs to support their favorite
                     personalities.
                  </p>
                  <Link href="/gabbi-garcia">
                     <a className={styles.mintNow}>
                        Buy Now
                     </a>
                  </Link>
               </div>
               <div className="text-center pt-[17em] sm:pt-[16em] md:pt-[15em] lg:pt-[14em] xl:pt-[13em] pb-[20em]">
                  <label className="block text-[30px] md:text-[36px] leading-[54px] text-white font-bold">
                     Mystery Gifts for You
                  </label>
                  <p className="text-[18px] md:text-[20px] leading-[30px] text-white font-normal">
                     Receive physical and digital gifts quarterly from the celebrities you support.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Banner;
