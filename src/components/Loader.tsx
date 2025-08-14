// src/components/Loader.tsx
import React from 'react';

type LoaderProps = { show?: boolean };

export default function Loader({ show = true }: LoaderProps) {
  return (
    <div
      id="loader"
      role="status"
      aria-live="polite"
      aria-busy={show ? 'true' : 'false'}
      className={[
        // base overlay
        'fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur',
        // fade transition
        'transition-opacity duration-300 ease-out',
        // visible/hidden states
        show ? 'opacity-200' : 'opacity-0 pointer-events-none',
      ].join(' ')}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Bouncing Dots */}
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Text */}
        <p className="text-xl font-semibold text-purple-700">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div>
    </div>
  );
}
