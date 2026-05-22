"use client";

import React from "react";
import { X } from "lucide-react";

interface PortfolioLightboxProps {
  selectedVideo: string | null;
  setSelectedVideo: React.Dispatch<React.SetStateAction<string | null>>;
}

const PortfolioLightbox = ({
  selectedVideo,
  setSelectedVideo,
}: PortfolioLightboxProps) => {
  React.useEffect(() => {
    if (!selectedVideo) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, [selectedVideo]);

  return (
    <>
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Odtwarzacz wideo"
        >
          <div
            className="aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Odtwarzacz wideo YouTube"
              className="h-full w-full"
              allowFullScreen
              allow="autoplay; fullscreen"
            />
          </div>
          <div
            className="absolute top-6 right-6 z-10 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-foreground/70 hover:text-accent cursor-pointer transition-colors"
              onClick={() => setSelectedVideo(null)}
              aria-label="Zamknij"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioLightbox;
