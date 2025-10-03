/** @format */
import { Calendar, MapPin } from 'lucide-react';
import { Dec } from '@/components/Dec';
import { cn } from '@/lib/utils';

const orgs = {
  // org-name: [src, color]
  Lapikud: ['/assets/lapikud-logo.png', '--primary'],
  'Tallinna Tööstushariduskeskus': ['/assets/TTHK-logo.png', '--background'],
  'Tallinna Technikaülikool Robotiklubi': ['/assets/Robotiklubi-logo.png', ''],
};

export const Hero = () => (
  <div className="w-full h-screen flex relative items-center justify-start">
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
      <div className="hidden lg:block w-2/5 h-screen absolute right-0">
        <Dec direction="inverse" />
      </div>
      {/* I cant use the nextjs image optimization because of static import */}
      <div className="w-full h-full relative">
        <div className="z-2 w-full absolute top-0 left-0 h-full bg-secondary/67" />
        <img
          src="/assets/hero.png"
          alt="hero"
          className="w-full h-full z-1 object-cover bg-center scale-105 bg-fixed"
        />
      </div>
    </div>

    {/* Main content */}
    <div className="w-full h-full z-4 flex  justify-center flex-col gap-4 lg:gap-8 relative  text-secondary-foreground">
      {/* Main section */}
      <div className="flex flex-col gap-4 lg:gap-8 px-8 lg:px-20 container">
        <h1 className="font-syncopate text-2xl md:text-4xl lg:text-6xl font-black">
          Tegid Katki?
          <br />
          Parandame koos!
        </h1>
        <p className="md:text-xl">Tulge jooma, Tulge jooma, Tulge jooma!</p>
        <div className="**:font-syncopate items-center px-4 max-w-full py-3 lg:px-10 lg:py-5 bg-primary w-max flex gap-4 lg:gap-8">
          <div className="flex items-center gap-1 lg:gap-2.5 ">
            <Calendar className="not-sm:size-3" />
            <p className="font-bold text-white md:hover:underline not-sm:text-[9px] md:text-xs lg:text-2xl">
              8. Nov 2025
            </p>
          </div>
          <div className="flex items-center gap-1 lg:gap-2.5 ">
            <MapPin className="not-sm:size-3" />
            <p className="font-bold text-white md:hover:underline not-sm:text-[9px] md:text-xs lg:text-2xl">
              Taltech peamaja kohvik
            </p>
          </div>
        </div>
      </div>

      {/* Orgs */}
      <div
        className={cn(
          ' flex not-lg:flex-col lg:gap-5 h-20 not-lg:bottom-0 not-lg:absolute w-full',
          'lg:px-20 lg:container'
        )}>
        {Object.entries(orgs).map(([org, [src, color]]) => (
          <div
            key={org}
            className="lg:rounded-4xl px-8 py-5 lg:py-3 w-full h-full lg:bg-transparent lg:max-w-fit not-lg:bg-black"
            style={color ? { backgroundColor: `var(${color})` } : undefined}>
            <img
              src={src}
              alt={org}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
