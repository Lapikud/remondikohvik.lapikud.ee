/** @format */

import { ImageFrame } from "../imageFrame";

export const AboutUs = () => (
  <section className="w-full max-h-fit flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8 py-16 xs:py-24 bg-background container mx-auto px-4 xs:px-8">
    {/* Left side - Content */}
    <div className="w-full lg:w-1/2 flex flex-col gap-4 xs:gap-6">
      {/* Label with orange background */}
      <div className="w-fit">
        <span className="bg-primary text-primary-foreground px-3 xs:px-4 py-1.5 xs:py-2 font-syncopate font-bold text-xs lg:text-base">
          Meist
        </span>
      </div>
      
      {/* Heading */}
      <h2 className="font-syncopate text-lg xs:text-xl sm:text-2xl lg:text-5xl font-black text-foreground leading-tight">
        Mis on remondikohvik?
      </h2>
      
      {/* Text content */}
      <div className="text-base xs:text-lg lg:text-xl text-foreground font-lato leading-relaxed">
        <span className="block mb-4">
        Remondikohvik on koht, kuhu saab tulla julgelt nõu küsima, ise käed külge lüüa parandamisel või lasta asjatundlikel abil vaadata parandust vajavad esemed. Teid ootavad sõbralikud ja heatujulised abilised, kellega saab ka niisama kohvitades juttu vesta. 
        </span>
      </div>
    </div>

    {/* Right side - Images */}
    <div className="w-full lg:w-1/2 relative h-96 lg:h-[500px] flex items-start lg:items-center xl:items-start 2xl:items-start" id="about-us-images" >
      {/* Left image - 430px */}
      <ImageFrame
        src="assets/about-us-1.jpg"
        alt="Secondary image"
        width={430}
        height={430}
        framesize="430px"
        bubbleposition="bottom-left"
      />
      {/* Right image - 580px */}
      <ImageFrame
        src="assets/about-us-2.jpg"
        alt="Profile image"
        width={580}
        height={580}
        framesize="580px"
        bubbleposition="top-right"
      />
    </div>
  </section>
);
