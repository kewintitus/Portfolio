import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      //   viewport={{ once: true }}
      className=" flex flex-col text-center md:text-left md:flex-row h-screen max-w-7xl px-10 gap-12 justify-center md:justify-evenly mx-auto items-center relative"
    >
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute z-10 top-24 uppercase 
        tracking-[15px] text-gray-500 text-xl"
      >
        About
      </motion.h3>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white rounded-full w-[150px] h-[150px] mt-14 md:mt-10 overflow-hidden relative self-center flex content-center justify-center flex-shrink-0  md:mb-0
         md:rounded-lg md:w-40 md:h-60 xl:w-[250px] xl:h-[350px] "
      >
        <Image
          src="/../public/res/KewinC1.jpg"
          layout="fill"
          objectFit="cover"
          blurDataURL="data:..."
          placeholder="blur"
          className="object-cover mt-1 align-bottom"
          alt="profile pic"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-3 max-w-lg"
      >
        <h4 className="text-xl text-gray-300">
          Here is a{' '}
          <span className="underline decoration-red-500 ">little</span>{' '}
          background
        </h4>
        <p className="text-sm mt-4 md:leading-6 mb-7 text-gray-400">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
