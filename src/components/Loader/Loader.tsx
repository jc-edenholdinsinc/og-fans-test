import React from 'react';
import { BarLoader } from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css';

const Loader = () => {
   return (
      <div className="custom-spinner-container">
         <BarLoader
            text={''}
            bgColor={'transparent'}
            width={'150px'}
            height={'150px'}
         />
      </div>
   );
};

export default Loader;
