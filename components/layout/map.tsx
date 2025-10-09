export const MapSection = () => (
  <section id="map" className="h-[50vh] relative sm:h-80 md:h-96 xl:h-[500px]">
    <iframe
      title="map"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full rounded-sm border-primary border-2"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.263965494577!2d24.6719818!3d59.3953084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692959cf43ac0fb%3A0x9355fd41a3a79929!2sCaffeine%20EE!5e0!3m2!1sen!2see!4v1759998179107!5m2!1sen!2see"
    />
  </section>
);
