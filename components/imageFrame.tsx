/** @format */

export const ImageFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-full aspect-square bg-primary max-w-lg flex flex-col-reverse">
    <div className="rounded-full aspect-square bg-accent max-w-md" />
  </div>
);
