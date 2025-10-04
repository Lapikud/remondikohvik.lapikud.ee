export const ContentBox = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="w-full max-w-3xl flex flex-col gap-4 text-secondary-foreground">
    <h2 className="font-syncopate text-3xl lg:text-6xl font-black bg-primary text-primary-foreground min-w-1/2 w-fit px-4 py-2 flex items-center">
      {icon}
      {title}
    </h2>
    <div className="flex flex-col gap-4 text-lg lg:text-xl">{children}</div>
  </div>
);
