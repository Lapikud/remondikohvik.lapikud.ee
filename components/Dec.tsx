/** @format */

import { cn } from '@/lib/utils';

// named according to the Figma...need better name
export const Dec = ({ direction }: { direction?: 'inverse' }) => (
  <div
    className={cn('relative w-full h-full flex gap-7 z-0', {
      'flex-row-reverse': direction === 'inverse',
    })}>
    <div className="bg-primary w-19/72 h-full"></div>
    <div className="bg-primary w-9/72 h-full"></div>
    <div className="bg-primary w-5/72 h-full"></div>
  </div>
);
