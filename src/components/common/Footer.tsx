'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc = '/images/img_footerlogo.png',
  logoAlt = 'Footer Logo',
  className = ''
}) => {
  const footerSections = [
    {
      title: 'Lorem Ipsum',
      links: [
        { text: 'Lorem Ipsum', href: '#' },
        { text: 'Lorem Ipsum', href: '#' },
        { text: 'Lorem Ipsum', href: '#' },
        { text: 'Lorem Ipsum', href: '#' }
      ]
    },
    {
      title: 'Lorem Ipsum',
      links: [
        { text: 'Lorem Ipsum', href: '#' },
        { text: 'Lorem Ipsum', href: '#' },
        { text: 'Lorem Ipsum', href: '#' },
        { text: 'Lorem Ipsum', href: '#' }
      ]
    },
    {
      title: 'Lorem Ipsum',
      links: [
        { text: 'Lorem Ipsum', href: '#' },
        { text: 'Lorem Ipsum', href: '#' },
        { text: 'Lorem Ipsum', href: '#' }
      ]
    },
    {
      title: 'Lorem Ipsum',
      links: [
        { text: 'Lorem Ipsum', href: '#' }
      ]
    }
  ];

  return (
    <footer className={`bg-footer w-full ${className}`}>
      <div className="flex flex-col w-full h-[546px] px-20 py-10">
        {/* Logo Section */}
        <div className="mb-8">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={156}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Footer Links Section */}
        <div className="flex flex-row justify-between w-full max-w-[796px] mx-auto">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-6">
              <h3 className="font-figtree font-bold text-[20px] leading-[25px] text-white">
                {section.title}
              </h3>
              <div className="flex flex-col space-y-6">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="font-figtree font-normal text-[18px] leading-[22px] text-white hover:text-light-blue transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;