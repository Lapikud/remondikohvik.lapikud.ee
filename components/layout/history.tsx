import { ContentBox } from "../content";
import { ImageFrame } from "../imageFrame";

export const HistorySection = () => (
  <section className="w-full max-h-fit flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 py-24 bg-background container mx-auto px-8 not-lg:flex-col-reverse">
    <ImageFrame
      width={400}
      height={300}
      src="assets/hero.png"
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
        <span>
          Remondikohvik sai alguse 2023. aasta sügisel, kui TalTechi tudengid
          otsustasid korraldada ürituse, mis soodustaks elektroonikaseadmete
          parandamist ja jätkusuutlikkust. Esimene Remondikohvik toimus TalTechi
          peamaja kohvikus ning tõi kokku ligi 100 osalejat, kes said oma
          katkised seadmed tasuta või väikese tasu eest korda teha.
        </span>
        <span>
          Üritus osutus suurepäraseks võimaluseks tudengitele ja kohalikele
          elanikele õppida uusi oskusi, jagada teadmisi ning edendada
          kogukonnatunnet. Remondikohviku meeskond koosnes vabatahtlikest, kes
          olid pühendunud ideele, et elektroonikat ei pea ära viskama, vaid seda
          saab parandada ja uuesti kasutada.
        </span>
        <span>
          Pärast esimest edukat üritust on Remondikohvik jätkanud kasvu ja
          laienemist. 2024. aasta kevadel toimus teine Remondikohvik, mis
          meelitas veelgi rohkem osalejaid ning pakkus laiemat valikut
          remonditeenuseid. Lisaks TalTechile on üritus leidnud toetust ka
          teistest ülikoolidest ja kogukonnaorganisatsioonidest.
        </span>
        <span>
          Remondikohviku eesmärk on jätkuvalt edendada säästvat tarbimist,
          vähendada elektroonikajäätmeid ning pakkuda inimestele võimalust oma
          seadmeid parandada. Üritus on inspireerinud paljusid teisi kogukondi
          üle Eesti korraldama sarnaseid algatusi, mis rõhutavad parandamise ja
          taaskasutuse tähtsust.
        </span>
      </ContentBox>
    </div>
  </section>
);
