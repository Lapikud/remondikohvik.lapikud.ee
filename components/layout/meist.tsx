/** @format */

import { ImageFrame } from '../imageFrame';
import { Title } from '../title';

export const Meist = () => (
  <section className="w-full h-full max-h-fit min-h-screen bg-background relative">
    <div className="w-full h-full px-8 lg:px-20 py-16 lg:py-20 ">
      <Title>Meist</Title>
      <div className="flex flex-col py-16 gap-5">
        <h3 className="uppercase text-2xl lg:text-3xl font-semibold">
          Mis on remondikohvik?
        </h3>
        <p className="w-full max-w-lg text-xl">
          Remondikohvik on koht, kuhu saab tulla julgelt nõu küsima, ise käed
          külge lüüa parandamisel või lasta asjatundlikel abil vaadata parandust
          vajavad esemed. Teid ootavad sõbralikud ja heatujulised abilised,
          kellega saab ka niisama kohvitades juttu vesta.{' '}
        </p>
      </div>
    </div>

    <div className="w-full border-4 border-black absolute h-full bg-black/20 top-0">
      <ImageFrame
        src={'/assets/hero.png'}
        alt={'dskl'}
      />
    </div>
  </section>
);
