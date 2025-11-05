import React, { useEffect } from 'react';
import { X, LogIn, PlusCircle } from 'lucide-react';

const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';

const RoleLoginModal = ({ open, role, mode = 'login', onClose, onToggleMode, onSubmit }) => {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!open) return null;

  const title = `${capitalize(mode)} as ${capitalize(role)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div role="dialog" aria-modal="true" className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">Enter your credentials to continue.</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-md p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            onSubmit?.({ ...data, role, mode });
          }}
          className="space-y-4"
        >
          {mode === 'register' && (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required type="text" placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
            </div>
          )}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input name="email" required type="email" placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
            <input name="password" required type="password" placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            {mode === 'login' ? <LogIn className="h-4 w-4" /> : <PlusCircle className="h-4 w-4" />}
            {mode === 'login' ? 'Log in' : 'Create account'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {mode === 'login' ? (
            <>
              New to ResqFood?{' '}
              <button onClick={() => onToggleMode?.('register')} className="font-semibold text-emerald-700 hover:underline">
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => onToggleMode?.('login')} className="font-semibold text-emerald-700 hover:underline">
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default RoleLoginModal;
