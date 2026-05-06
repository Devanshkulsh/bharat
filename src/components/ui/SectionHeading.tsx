import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  intro?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
  titleAs?: 'h1' | 'h2' | 'h3';
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  className = '',
  align = 'left',
  titleAs = 'h2',
}: SectionHeadingProps) {
  const TitleTag = titleAs;
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : '';

  if (!eyebrow && !title && !intro) {
    return null;
  }

  return (
    <div className={`mb-10 max-w-3xl ${alignmentClass} ${className}`.trim()}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      )}
      {title && <TitleTag className="text-balance text-3xl font-black text-ink sm:text-4xl">{title}</TitleTag>}
      {intro && <p className="mt-4 text-lg leading-8 text-stone-700">{intro}</p>}
    </div>
  );
}
