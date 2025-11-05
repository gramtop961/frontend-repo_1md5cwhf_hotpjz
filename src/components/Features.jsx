import React from 'react';
import { Radio, ShieldCheck, Leaf, Clock, MapPin, Search } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Built for impact</h2>
          <p className="mt-2 text-gray-600">
            A clean, efficient workflow that helps surplus food reach the people who need it most.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Radio} title="Real-time sync" desc="New donations and status changes appear instantly across dashboards." />
          <FeatureCard icon={ShieldCheck} title="Role-based access" desc="Separate, secure dashboards for Restaurants, NGOs, Societies and Admins." />
          <FeatureCard icon={Leaf} title="Sustainable" desc="Reduce food waste and carbon footprint with a community-first platform." />
          <FeatureCard icon={Clock} title="Expiry-aware" desc="Set expiry windows so pickups always happen on time." />
          <FeatureCard icon={MapPin} title="Location filters" desc="Find nearby donations and plan efficient pickup routes." />
          <FeatureCard icon={Search} title="Smart search" desc="Filter by food, restaurant or location to act faster." />
        </div>
      </div>
    </section>
  );
};

export default Features;
