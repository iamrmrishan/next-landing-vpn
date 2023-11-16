import React from 'react';
import LogoVPN from '../../public/assets/Logo.svg';
import Facebook from '../../public/assets/Icon/facebook.svg';
import Twitter from '../../public/assets/Icon/twitter.svg';
import Instagram from '../../public/assets/Icon/instagram.svg';
const Footer = () => {
  return (
    <div className="bg-white-300 pt-10 pb-10">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <span>SKYRIM TRAVELS</span>
          <p className="mb-4">
            <strong className="font-medium">
              Skyrim Travels Private Limited
            </strong>{' '}
            is a a trusted and dynamic travel agency based in Sri Lanka,
            committed to making your travel experiences exceptional.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Skyrim Travels
          </p>
        </div>
        <div id='address' className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Contact us</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
            +94772670638, +94768506008{' '}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
            info@skyrimtravels.lk{' '}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
            No 133/8. Batakettara,{' '}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
            Madapatha, Sri Lanka{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
