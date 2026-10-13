'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="bg-[#0B172E] border border-[#102447] rounded-2xl max-w-4xl w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 end-0 text-white hover:text-[#60A5FA] p-2 rounded-lg transition-colors cursor-pointer"
          aria-label="Close"
          id="btn-close-video-modal"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-4 border-b border-[#102447] flex items-center justify-between">
          <h3 id="video-modal-title" className="text-white font-bold text-sm sm:text-base">
            {title}
          </h3>
        </div>
        <div className="aspect-video bg-black rounded-b-2xl overflow-hidden">
          <iframe
            src={videoUrl}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
