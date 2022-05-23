import { FC } from 'react';
const Mystery: FC = (): JSX.Element => {
   return (
      <section
         id="mystery"
         className="py-[10rem] z-1"
      >
         <div className="container mx-auto max-w-screen-xl">
            <div className="text-center">
               <label className="block text-[30px] md:text-[36px] leading-[54px] text-white font-bold">
                  Mystery Gifts for You
               </label>
               <p className="text-[18px] md:text-[20px] leading-[30px] text-white font-normal">
                  Receive physical and digital gifts quarterly from the celebrities you support.
               </p>
            </div>
         </div>
      </section>
   );
};

export default Mystery;
