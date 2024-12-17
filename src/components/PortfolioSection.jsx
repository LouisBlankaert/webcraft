import React from 'react';
import { PortfolioCard } from './PortfolioCard';

const portfolioData = [
  {
    title: 'Mountain Retreat Resort',
    description: 'A luxury mountain resort website with booking capabilities and virtual tours.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    tags: ['Resort', 'Booking System', 'Virtual Tours'],
    link: 'https://example.com/mountain-retreat',
  },
  {
    title: 'Fresh Eats Restaurant',
    description: 'Modern restaurant website featuring online ordering and reservation system.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    tags: ['Restaurant', 'Online Ordering', 'Reservations'],
    link: 'https://example.com/fresh-eats',
  },
  {
    title: 'Tech Innovations Hub',
    description: 'A sleek corporate website for a leading technology company.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    tags: ['Corporate', 'Technology', 'Portfolio'],
    link: 'https://example.com/tech-hub',
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at some of the amazing websites we've created for our clients
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}