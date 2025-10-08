import { ContentBox } from "../content";
import { ImageFrame } from "../imageFrame";

export const HistorySection = () => (
  <section
    id="ajalugu"
    className="w-full max-h-fit flex flex-col lg:flex-row items-start justify-center gap-12 xs:gap-16 lg:gap-32 py-16 xs:py-24 bg-background container mx-auto px-4 xs:px-8 not-lg:flex-col-reverse"
  >
    <ImageFrame
      width={400}
      height={300}
      src="assets/history.png"
      alt="man fixing something"
      bubbleposition="bottom-left"
      framesize="100%"
    />
    <div className="w-full">
      <ContentBox title="Ajalugu" className="*:text-foreground">
        {/* 
        Seemed boring so i didnt use it
          Original text:
          Remondikohvik ei toimu üldsegi mitte esimest korda! See sai alguse juba 2013. aastal Skeemipesa, Lapikute ja kohviku Pööning koostöös. Vahelduva eduga on üritust korraldatud aastate jooksul mitu korda. Tegelikult ei ole ka remondikohviku idee üldsegi uus, vaid sarnastele üritustele on mitmel pool maailmas päris palju populaarsust kogunenud. Sellest on kujunenud lausa kogukond, mis toob regulaarselt naabruskonna ühtekohtu, et aidata üksteisel korda teha asjad, mille parandamine üksi võib lootusetuna tunduda ning samal ajal ka lõbusalt aega veeta. Loodame, et meie unistus täitub ning näeme sellise kogukonna teket ka Tallinnas.
        */}
        <h3 className="font-syncopate prose prose-headings:h1 lg:mt-16 mt-6 xs:mt-10 text-base xs:text-lg">
          Remondikohviku ajalugu
        </h3>
        <p className="prose prose-base xs:prose-lg">
          Remondikohvik ei toimu üldsegi mitte esimest korda! See sai alguse
          juba 2013. aastal Skeemipesa, Lapikute ja kohviku Pööning koostöös.
          Vahelduva eduga on üritust korraldatud aastate jooksul mitu korda.
          Tegelikult ei ole ka remondikohviku idee üldsegi uus, vaid sarnastele
          üritustele on mitmel pool maailmas päris palju populaarsust kogunenud.
          Sellest on kujunenud lausa kogukond, mis toob regulaarselt
          naabruskonna ühtekohtu, et aidata üksteisel korda teha asjad, mille
          parandamine üksi võib lootusetuna tunduda ning samal ajal ka lõbusalt
          aega veeta. Loodame, et meie unistus täitub ning näeme sellise
          kogukonna teket ka Tallinnas.
        </p>
      </ContentBox>
    </div>
  </section>
);
