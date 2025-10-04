/** @format */

import { cn } from "@/lib/utils";

// named according to the Figma...need better name
export const Dec = ({
  direction,
  size = "lg",
}: {
  direction?: "inverse";
  size?: "sm" | "lg";
}) => (
  <div
    className={cn("relative w-full h-full flex gap-7 z-3", {
      "flex-row-reverse": direction === "inverse",
    })}
  >
    {size === "lg" && <div className="bg-primary w-19/72 h-full" />}
    <div className="bg-primary w-9/72 h-full" />
    <div className="bg-primary w-5/72 h-full" />
  </div>
);
