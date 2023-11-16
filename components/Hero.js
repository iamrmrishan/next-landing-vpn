import React, { useMemo, useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import axios from 'axios';

const Hero = ({
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [tripType, setTripType] = useState('roundTrip');

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
    const { id, value } = event.target;
    setErrors({ ...errors, [id]: '' });
    switch (id) {
      case 'name':
        if (!value.trim()) {
          setErrors({ ...errors, [id]: 'Name is required' });
        }
        break;
      case 'email':
        if (!value.includes('@')) {
          setErrors({ ...errors, [id]: 'Please enter a valid email address' });
        }
        break;
      case 'mobile':
        if (!value.match(/^\d{10}$/)) {
          setErrors({
            ...errors,
            [id]: 'Please enter a valid 10 digit mobile number',
          });
        }
        break;
      case 'origin':
      case 'destination':
        if (!value.trim()) {
          setErrors({ ...errors, [id]: 'This field is required' });
        }
        break;
      case 'depart':
      case 'return':
        if (!value) {
          setErrors({ ...errors, [id]: 'Please select a date' });
        }
        break;
      case 'persons':
        if (!value || value < 1) {
          setErrors({
            ...errors,
            [id]: 'Please enter a valid number of persons',
          });
        }
        break;
    }
  };
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    origin: '',
    destination: '',
    depart: '',
    return: '',
    persons: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({
    tripType: tripType,
    email: '',
    name: '',
    mobile: '',
    origin: '',
    destination: '',
    depart: '',
    return: '',
    persons: '',
    details: '',
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: 'https://formbold.com/s/9mNpP',
      data: inputs,
    })
      .then((r) => {
        if (r.status === 201) {
          console.log(r.status);
          setShowModal(true);
        }
      })
      .catch((r) => {
        console.log(r);
      });
  };


  return (
    <div
      className="max-w-screen-xl mt-20 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6"
            variants={scrollAnimation}>
            <div className=" flex flex-col flex-start mb-0 lg:mb-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Book Your Trip with <strong>SKYRIM TRAVELS</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Please fill out the form to plan your journey.
              </p>
              <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/travel1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={1024}
                  height={939}
                  layout="responsive"
                />
              </motion.div>
            </div>
            </div>
            <form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 md:mb-0 sm:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Trip Type
                  </label>
                  <div>
                    <input
                      onChange={handleTripTypeChange}
                      type="radio"
                      name="oneWay"
                      value="oneWay"
                      id="oneWay"
                      className="peer hidden [&:checked_+_label_svg]:block"
                      checked={tripType === 'oneWay'}
                    />

                    <label
                      htmlFor="oneWay"
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                    >
                      <svg
                        className="hidden h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-sm font-medium">One Way</p>
                    </label>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 sm:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-6"></label>
                  <div>
                    <input
                      onChange={handleTripTypeChange}
                      type="radio"
                      name="roundTrip"
                      value="roundTrip"
                      id="roundTrip"
                      className="peer hidden [&:checked_+_label_svg]:block"
                      checked={tripType === 'roundTrip'}
                    />

                    <label
                      htmlFor="roundTrip"
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                    >
                      <svg
                        className="hidden h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-sm font-medium">Round Trip</p>
                    </label>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 md:mt-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="name"
                    value={inputs.name}
                    onChange={handleOnChange}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">{errors.name}</p>
                  )}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 md:mt-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="email"
                    onChange={handleOnChange}
                    value={inputs.email}
                    placeholder="Your Email"
                  />
                    {errors.email && (
                    <p className="text-red-500 text-xs italic">{errors.email}</p>
                  )}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 md:mt-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Mobile
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="mobile"
                    onChange={handleOnChange}
                    value={inputs.mobile}
                    placeholder="Your mobile"
                  />
                     {errors.mobile && (
                    <p className="text-red-500 text-xs italic">{errors.mobile}</p>
                  )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:mt-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Origin Country/ Airport
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="origin"
                    onChange={handleOnChange}
                    value={inputs.origin}
                    placeholder="From"
                  />
                     {errors.origin && (
                    <p className="text-red-500 text-xs italic">{errors.origin}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3 md:mb-0 md:mt-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Destination Country/ Airport
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="destination"
                    onChange={handleOnChange}
                    value={inputs.destination}
                    placeholder="To"
                  />
                     {errors.destination && (
                    <p className="text-red-500 text-xs italic">{errors.destination}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Depart Date
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="date"
                    id="depart"
                    onChange={handleOnChange}
                    value={inputs.depart}
                    placeholder="From Date"
                  />
                     {errors.depart && (
                    <p className="text-red-500 text-xs italic">{errors.depart}</p>
                  )}
                </div>
                {(tripType == 'roundTrip') | 'multi' ? (
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Return Date
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="date"
                      id="return"
                      onChange={handleOnChange}
                      value={inputs.return}
                      placeholder="To Date"
                    />
                       {errors.return && (
                    <p className="text-red-500 text-xs italic">{errors.return}</p>
                  )}
                  </div>
                ) : (
                  ''
                )}
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Number of Persons
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    id="persons"
                    onChange={handleOnChange}
                    value={inputs.persons}
                    placeholder="Number of Persons"
                  />
                     {errors.persons && (
                    <p className="text-red-500 text-xs italic">{errors.persons}</p>
                  )}
                </div>
                <div className="w-full px-3 mb-6 md:mb-0 mt-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Additional Details
                  </label>
                  <textarea
                    className="appearance-none block w-full h-24 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="details"
                    onChange={handleOnChange}
                    value={inputs.details}
                    placeholder="Details"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
              <ButtonPrimary>Submit</ButtonPrimary>
              </div>
            </form>
          </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
