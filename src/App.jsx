import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import RoleLoginModal from './components/RoleLoginModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeRole, setActiveRole] = useState('restaurant');
  const [authMode, setAuthMode] = useState('login');

  const openRoleModal = (role) => {
    setActiveRole(role);
    setAuthMode('login');
    setModalOpen(true);
  };

  const handleSubmitAuth = (payload) => {
    // In a full app, this would call the backend/supabase.
    console.log('Auth payload:', payload);
    setModalOpen(false);
    alert(`${payload.mode === 'login' ? 'Logged in' : 'Registered'} as ${payload.role}. (Demo UI only)`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onAdminLogin={() => openRoleModal('admin')} />
      <main>
        <Hero onOpenRole={openRoleModal} />
        <div id="how" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Restaurants</h3>
              <p className="mt-2 text-sm text-gray-600">
                Add donations with item details, quantity, pickup address and expiry. Track statuses: Available, Claimed, Delivered.
              </p>
              <div className="mt-4">
                <button onClick={() => openRoleModal('restaurant')} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                  Get started
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">NGOs</h3>
              <p className="mt-2 text-sm text-gray-600">
                See available donations in real-time and claim nearby food instantly. Claimed items are hidden from others.
              </p>
              <div className="mt-4">
                <button onClick={() => openRoleModal('ngo')} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                  Join as NGO
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Societies</h3>
              <p className="mt-2 text-sm text-gray-600">
                Discover and claim available donations for your community. Keep everyone fed and reduce waste together.
              </p>
              <div className="mt-4">
                <button onClick={() => openRoleModal('society')} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                  Join as Society
                </button>
              </div>
            </div>
          </div>
        </div>
        <Features />
      </main>

      <footer className="border-t border-gray-100 bg-white py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-gray-600 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} ResqFood. Built to reduce food waste.
          </p>
          <a href="#" className="hover:text-gray-800">Privacy & Terms</a>
        </div>
      </footer>

      <RoleLoginModal
        open={modalOpen}
        role={activeRole}
        mode={authMode}
        onToggleMode={setAuthMode}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmitAuth}
      />
    </div>
  );
}

export default App;
