import React from 'react';
import captures from './productCaptures.json';

type CaptureInfo = { width: number; height: number };
const sizes: Record<string, CaptureInfo> = captures;

/** Real app captures, registered in place for a synchronized 120ms theme crossfade. */
export default function AppCapture({ name, alt, compact = false, compactAt = 1000, loading = 'lazy', className = '' }: {
  name: string;
  alt: string;
  compact?: boolean;
  compactAt?: number;
  loading?: 'eager' | 'lazy';
  className?: string;
}) {
  const size = sizes[`${name}-light`];
  const small = sizes[`${name}-compact-light`];
  return <div className={`capture-pair ${className}`}>
    {(['light', 'dark'] as const).map(mode => <picture key={mode} className={`capture-${mode}`} aria-hidden={mode === 'dark' ? true : undefined}>
      {compact && <source media={`(max-width: ${compactAt}px)`} width={small.width} height={small.height} srcSet={`/images/product/${name}-compact-${mode}.webp`} />}
      <img src={`/images/product/${name}-${mode}.webp`} width={size.width} height={size.height} alt={mode === 'light' ? alt : ''} loading={loading} decoding="async" />
    </picture>)}
  </div>;
}
