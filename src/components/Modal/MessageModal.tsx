import {
   FC,
   Fragment,
   useRef,
   useState
} from 'react';
import {
   Dialog,
   Transition,
} from '@headlessui/react';
import {
   ExclamationIcon,
   CheckIcon,
   ExclamationCircleIcon,
} from '@heroicons/react/outline';


export const useWarningModal = () => {
   const [isShowing, setIsShowing] = useState(false);

   function toggle() {
      setIsShowing(!isShowing);
   }

   return {
      isShowing,
      toggle,
   };
};

interface MessageModalInterface {
   isOpen?: boolean;
   status: 'success' | 'error' | 'warning' | 'info';
   title: string;
   description?: string;
   showButtonOne?: boolean;
   buttonOneText?: string;
   buttonOneFunction?: () => void;
   showButtonTwo?: boolean;
   buttonTwoText?: string;
   buttonTwoFunction?: () => void;
   escapeFunction?: () => void;
}

const MessageModal: FC<MessageModalInterface> = ({
   isOpen = false,
   status,
   title,
   description = "",
   showButtonOne = true,
   buttonOneText = 'Ok',
   buttonOneFunction,
   showButtonTwo = false,
   buttonTwoText = 'Close',
   buttonTwoFunction,
   escapeFunction = () => { return false },
}): JSX.Element => {

   const buttonOneRef = useRef(null);

   const handleButtonOneClick = (): void => {
      if (buttonOneFunction) {
         buttonOneFunction();
      }
   };

   const handleButtonTwoClick = (): void => {
      if (buttonTwoFunction) {
         buttonTwoFunction();
      }
   };

   return (
      <Transition.Root show={isOpen} as={Fragment}>
         <Dialog
            as="div"
            className="relative z-10"
            initialFocus={buttonOneRef}
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
               <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                     className="hidden sm:inline-block sm:align-middle sm:h-screen"
                     aria-hidden="true"
                  >
                     &#8203;
                  </span>
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                     enterTo="opacity-100 translate-y-0 sm:scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                     leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                     <Dialog.Panel className="relative inline-block align-bottom bg-neutral-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-neutral-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                           <div className="flex flex-col items-center">
                              <div
                                 className={`mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full ${
                                    status === 'error'
                                    ? `bg-red-100`
                                    : status === 'warning'
                                    ? `bg-yellow-100`
                                    : `bg-lime-100`
                                 } sm:mx-0 sm:h-13 sm:w-13`}
                              >
                                 {status ===
                                    'success' && (
                                    <CheckIcon
                                       className="h-10 w-10 text-lime-600"
                                       aria-hidden="true"
                                    />
                                 )}

                                 {status ===
                                    'warning' && (
                                    <ExclamationIcon
                                       className="h-10 w-10 text-yellow-600"
                                       aria-hidden="true"
                                    />
                                 )}

                                 {status ===
                                    'error' && (
                                    <ExclamationCircleIcon
                                       className="h-10 w-10 text-red-600"
                                       aria-hidden="true"
                                    />
                                 )}
                              </div>

                              <div className="mt-3 text-center">
                                 <Dialog.Title
                                    as="h3"
                                    className="text-lg leading-6 font-medium text-white"
                                 >
                                    {title}
                                 </Dialog.Title>
                                 <div className="mt-2">
                                    <p className="text-sm text-gray-50">
                                       {
                                          description
                                       }
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="bg-neutral-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                           {showButtonOne && (
                              <button
                                 type="button"
                                 className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 
                                 ${
                                    status === 'error'
                                    ? `bg-red-500 hover:bg-red-500/80`
                                    : status === 'warning'
                                    ? `bg-yellow-500 hover:bg-yellow-500/80`
                                    : `bg-lime-500 hover:bg-lime-500/80`
                                 } text-base font-medium text-white focus:outline-none ${
                                    showButtonTwo &&
                                    `sm:ml-3`
                                 } sm:text-sm`}
                                 onClick={() =>
                                    handleButtonOneClick()
                                 }
                                 ref={
                                    buttonOneRef
                                 }
                              >
                                 {buttonOneText}
                              </button>
                           )}

                           {showButtonTwo && (
                              <button
                                 type="button"
                                 className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none sm:mt-0 sm:text-sm"
                                 onClick={() =>
                                    handleButtonTwoClick()
                                 }
                              >
                                 {buttonTwoText}
                              </button>
                           )}
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   );
};

export default MessageModal;
