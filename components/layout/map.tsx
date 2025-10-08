export const MapSection = () => (
  <section id="map" className="h-[50vh] relative sm:h-80 md:h-96 xl:h-[500px]">
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.3408316189345!2d24.668195277300608!3d59.394025905840245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692950715508cdb%3A0x16e365bdbaea4469!2sEhitajate%20tee%205%2C%2019086%20Tallinn!5e0!3m2!1sen!2see!4v1759826002724!5m2!1sen!2see"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full rounded-sm border-primary border-2"
    />
  </section>
);
