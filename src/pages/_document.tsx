import Document, {
   Html,
   Head,
   Main,
   NextScript,
} from 'next/document';

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head />
            <body className="bg-neutral-900 m-0 p-0 font-poppins">
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
