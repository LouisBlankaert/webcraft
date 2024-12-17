import React from 'react';
import { Check } from 'lucide-react';

export function PricingCard({ title, price, description, features, isPopular }) {
  return (
    <div className={`relative rounded-2xl p-8 ${
      isPopular ? 'bg-blue-600 text-white' : 'bg-white'
    } shadow-xl transform transition-all hover:scale-105`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className={`${isPopular ? 'text-blue-100' : 'text-gray-500'}`}>/month</span>
      </div>
      <p className={`mb-8 ${isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`h-5 w-5 ${
              isPopular ? 'text-blue-200' : 'text-blue-600'
            } ${!feature.included && 'opacity-50'}`} />
            <span className={!feature.included ? 'opacity-50' : ''}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          isPopular
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}