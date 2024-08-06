"use client";

import { Avatar, Card } from 'antd';
import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
import gsap from 'gsap';

const { Meta } = Card;

const Testimonials: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 * i });
      }
    });
  }, []);

  const testimonials = [
    {
      name: 'Jane Doe',
      title: 'CEO, Company A',
      testimonial: 'This email client has revolutionized how we manage communication. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'John Smith',
      title: 'CTO, Company B',
      testimonial: 'The intuitive design and seamless experience have made email management a breeze.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      name: 'Emily Johnson',
      title: 'Product Manager, Company C',
      testimonial: 'An all-in-one solution that fits all our needs. The support team is also top-notch!',
      image: 'https://randomuser.me/api/portraits/women/46.jpg',
    },
  ];

  return (
    <div className="bg-gradient-to-r rounded-3xl my-12 from-gray-900 via-gray-900 to-blue-900 text-white py-12 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
          What Our Users Say
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
          See how we have helped businesses streamline their email communication.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="flex justify-center"
          >
            <Card
              className="w-full max-w-sm bg-gray-800 border-none rounded-3xl shadow-lg"
              cover={
                <Image
                  alt={testimonial.name}
                  src={testimonial.image}
                  width={400}
                  height={400}
                  className="object-cover rounded-t-3xl w-full h-auto"
                  quality={90} // Ensures high image clarity
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNFNUU1RTUiIC8+Cjwvc3ZnPg==" // Optional, provides a base64-encoded placeholder
                />
              }
            >
              <Meta
                avatar={<Avatar src={testimonial.image} />}
                title={<span className="text-lg text-white">{testimonial.name}</span>}
                description={
                  <div className="text-gray-400">
                    <p className="font-semibold">{testimonial.title}</p>
                    <p className="mt-2 text-sm md:text-base">{testimonial.testimonial}</p>
                  </div>
                }
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
