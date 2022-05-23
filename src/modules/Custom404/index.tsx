import { FC } from 'react';
import Layout from '@/layout/index';
import Link from 'next/link';

const Custom404: FC = (): JSX.Element => {
   return (
      <Layout
         title={`404 Page not found`}
         description={`The page you were looking for does not exist`}
      >
         <div className="m-4">
            <section
               id="404"
               className="py-[7rem]"
            >
               <div className="container mx-auto max-w-screen-xl">
                  <div className="flex flex-col items-center mt-20">
                     <h1 className="font-bold text-white text-9xl">
                        404
                     </h1>

                     <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
                        <span className="text-pink">
                           Oops!
                        </span>{' '}
                        Page not found
                     </h6>

                     <p className="mb-8 text-center text-gray-500 md:text-lg">
                        The page you’re looking
                        for doesn’t exist.
                     </p>

                     <Link href={`/`}>
                        <a className="btn-contained px-6 py-2 text-sm font-semibold">
                           Go home
                        </a>
                     </Link>
                  </div>
               </div>
            </section>
         </div>
      </Layout>
   );
};

export default Custom404;
