import Head from 'next/head';
import { FC } from 'react';

interface HeaderProps {
   title?: string;
   description?: string;
   image?: string;
}

const Header: FC<HeaderProps> = ({
   title,
   description,
   image,
}): JSX.Element => {
   const pageTitle = title ? title : 'OG Fan';
   const pageDescription = description
      ? description
      : 'Be an OG Fan';
   const author = 'EDEN Holdings INC';
   return (
      <Head>
         <title>{pageTitle}</title>
         <meta
            name="description"
            content={pageDescription}
         />
         <meta name="author" content={author} />
         <meta
            property="og:url"
            content="og-fans.io"
         />
         <meta
            property="og:type"
            content="website"
         />
         <meta
            property="og:title"
            content={pageTitle}
         />
         <meta
            property="og:description"
            content={pageDescription}
         />
         <meta
            property="og:image"
            content="/assets/images/banner/Gabbi.png"
         />
         <meta
            property="og:site_name"
            content="OG Fans"
         />
         <meta
            property="og:locale"
            content="en_PH"
         />
         <meta
            name="twitter:card"
            content="summary"
         />
         <meta
            property="fb:app_id"
            content="123456789"
         />
         <link
            rel="icon"
            href="/assets/images/ogfans.ico"
         />
      </Head>
   );
};

export default Header;
