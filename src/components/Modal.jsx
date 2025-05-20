import React from "react";

export default function Modal({ isOpen, onClose, title, children, size = 'default' }) {
  if (!isOpen) return null;
  
  // Handle different modal sizes
  const sizeClasses = {
    small: 'max-w-md',
    default: 'max-w-2xl',
    large: 'max-w-4xl',
    fullscreen: 'max-w-[90vw] h-[90vh]'
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className={`bg-[var(--background)] rounded-xl border border-zinc-800 shadow-[0px_0px_15px_-1px_#000000] 
          ${sizeClasses[size] || sizeClasses.default} w-full relative animate-fadeIn overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
          <h3 className="text-xl font-medium text-[var(--primary-text)]">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 bg-zinc-800/50 hover:bg-zinc-700 text-[var(--primary-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">{children}</div>
      </div>
    </div>
  );
}
