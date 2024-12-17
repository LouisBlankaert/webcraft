import React from 'react';
import { PricingCard } from './PricingCard';

const pricingData = [
  {
    title: 'Basic',
    price: '€2799',
    description: 'Perfect for small businesses just getting started',
    features: [
      { text: 'Responsive Website Design', included: true },
      { text: '5 Pages', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Basic SEO', included: true },
      { text: 'Mobile Optimization', included: true },
      { text: 'Custom Domain', included: false },
      { text: 'Analytics Dashboard', included: false },
      { text: '24/7 Support', included: false },
    ],
  },
  {
    title: 'Professional',
    price: '€2999',
    description: 'Ideal for growing businesses needing more features',
    features: [
      { text: 'Responsive Website Design', included: true },
      { text: '10 Pages', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Advanced SEO', included: true },
      { text: 'Mobile Optimization', included: true },
      { text: 'Custom Domain', included: true },
      { text: 'Analytics Dashboard', included: true },
      { text: '24/7 Support', included: false },
    ],
    isPopular: true,
  },
  {
    title: 'Enterprise',
    price: '€5499',
    description: 'For large businesses requiring premium features',
    features: [
      { text: 'Responsive Website Design', included: true },
      { text: 'Unlimited Pages', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Premium SEO', included: true },
      { text: 'Mobile Optimization', included: true },
      { text: 'Custom Domain', included: true },
      { text: 'Analytics Dashboard', included: true },
      { text: '24/7 Priority Support', included: true },
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the website your business deserves with our professional web development services
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}