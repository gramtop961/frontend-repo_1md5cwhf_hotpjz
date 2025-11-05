import React from 'react';
import { Utensils, Users, Building2, ArrowRight } from 'lucide-react';

const RoleButton = ({ icon: Icon, label, onClick, color }) => (
  <button
    onClick={onClick}
    className={`group relative flex w-full items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:w-auto ${color}`}
  >
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
    <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-0.5" />
  </button>
);

const Hero = ({ onOpenRole }) => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Rescue surplus food. Feed communities.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            ResqFood connects Restaurants, NGOs and Societies to redistribute leftover
            food efficiently with real-time updates.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <RoleButton
            icon={Utensils}
            label="Restaurant"
            color="hover:border-emerald-300"
            onClick={() => onOpenRole('restaurant')}
          />
          <RoleButton
            icon={Users}
            label="NGO"
            color="hover:border-emerald-300"
            onClick={() => onOpenRole('ngo')}
          />
          <RoleButton
            icon={Building2}
            label="Society"
            color="hover:border-emerald-300"
            onClick={() => onOpenRole('society')}
          />
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => onOpenRole('admin')}
            className="text-sm font-medium text-gray-500 underline underline-offset-4 hover:text-gray-700"
          >
            Admin Login
          </button>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-0 blur-3xl">
        <div className="mx-auto h-48 max-w-2xl bg-gradient-to-r from-emerald-300/30 via-teal-300/30 to-sky-300/30 opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
