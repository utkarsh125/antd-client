"use client";

import React, { useEffect, useRef } from 'react';

import { Button } from 'antd';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trash } from 'lucide-react';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const CTA: React.FC = () => {
  const flowerRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const curtainRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Flower scale animation on scroll
    gsap.fromTo(
      flowerRef.current,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: svgContainerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // Curtain unfolding animation
    curtainRefs.current.forEach((curtain, index) => {
      gsap.fromTo(
        curtain,
        { width: '50%' },
        {
          width: '0%',
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: svgContainerRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
          delay: index * 0.1,
        }
      );
    });

    // Wiggle effect based on mouse activity
    const handleMouseMove = () => {
      gsap.to(flowerRef.current, {
        rotate: 5,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(flowerRef.current, {
        rotate: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)", // Rope-like rebound effect
      });
    };

    svgContainerRef.current?.addEventListener('mousemove', handleMouseMove);
    svgContainerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      svgContainerRef.current?.removeEventListener('mousemove', handleMouseMove);
      svgContainerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={svgContainerRef} className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-16 px-4 md:px-12 rounded-3xl mt-12 flex flex-col items-center overflow-hidden">
      {/* Diagonal Curtains */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) curtainRefs.current[index] = el;
          }}
          className="absolute top-0 bottom-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-70"
          style={{
            transform: `rotate(${index % 2 === 0 ? 10 : -10}deg)`,
            left: `${index * 10}%`,
          }}
        />
      ))}

      {/* Flower Figure */}
      <div ref={flowerRef} className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="200"
          height="200"
          className="opacity-40"
        >
          <g fill="none" stroke="white" strokeWidth="5">
            <circle cx="100" cy="100" r="40" />
            <circle cx="140" cy="60" r="30" />
            <circle cx="60" cy="60" r="30" />
            <circle cx="60" cy="140" r="30" />
            <circle cx="140" cy="140" r="30" />
          </g>
        </svg>
      </div>

      <div className="text-center max-w-2xl z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
          Ready to Get Started? <Trash size={40} className="ml-4 text-white-300" />
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Experience the best email management platform today. It's fast, secure, and user-friendly.
        </p>
        <Button
          type="text"
          style={{
            backgroundColor: '#fff', 
            color: '#000',
            boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
          }}
          className="!hover:bg-blue-600 !py-4 !px-8 !rounded-lg"
        >
          <span className='!text-black !text-md !md:text-xl'>Get Started Now</span>
        </Button>
      </div>
    </div>
  );
};

export default CTA;
