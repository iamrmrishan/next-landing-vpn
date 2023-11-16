import React, { useMemo } from 'react';
import Image from 'next/image';
import Testimoni from './Testimoni';
import ButtonPrimary from './misc/ButtonPrimary';
import ButtonOutline from './misc/ButtonOutline.';
import Maps from '../public/assets/HugeGlobal.svg';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-white w-full py-14 sm:py-5"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600"
            >
              Find us on Google Maps
            </motion.h3>
            {/* <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </motion.p> */}
          </ScrollAnimationWrapper>

          <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white lg:flex-nowrap rounded-xl mt-10">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.921324117589!2d79.92177707490994!3d6.7794297932175285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24fd8abe4bce5%3A0xaa5aa9f205f36e5c!2sSkyrim%20Travels%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1687053811299!5m2!1sen!2slk"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
          {/* <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Huge Global Network of Fast VPN{' '}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </motion.p>
          </ScrollAnimationWrapper> */}
          {/* <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper> */}
          {/* <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              <Netflix className="h-18 w-auto" />
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper> */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Trusted by Hundred of Happy Customers{' '}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          {/* <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: 'blur(114px)' }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
