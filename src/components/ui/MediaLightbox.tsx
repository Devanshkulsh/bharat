import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type MediaLightboxProps = {
  image: string | null;
  alt: string;
  onClose: () => void;
};

export default function MediaLightbox({ image, alt, onClose }: MediaLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!image) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Media preview"
      onMouseDown={onClose}
    >
      <div className="relative max-w-4xl" onMouseDown={(event) => event.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="absolute right-3 top-3 rounded-full bg-white p-2 text-ink shadow"
          onClick={onClose}
          aria-label="Close media preview"
        >
          <X aria-hidden="true" />
        </button>
        <img className="max-h-[85vh] rounded-lg object-contain" src={image} alt={alt} />
      </div>
    </div>
  );
}
