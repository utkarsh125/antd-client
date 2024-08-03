import { Button, Input } from 'antd';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center'>
        <Image src="/hero.png" height={400} width={600} alt='heroimg'/>
        <div>
        <h1 className='text-5xl mb-2 tracking-wide'>Want all the <span className='text-blue-500'>junk</span> out of your inbox? Start your <span className='text-red-700'>purging</span> journey with us today!</h1>
        <div className='md:w-[250px] mt-5'>
            <Input placeholder='Enter your email'/>
            <div className='mt-2'>
              <Button type='primary'>Get Started</Button>
            </div>
        </div>
        </div>
      </div>
      <div>
        {/* Additional content can be added here */}
      </div>
    </div>
  );
};

export default Hero;
