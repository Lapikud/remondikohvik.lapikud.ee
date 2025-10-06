import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo: FC<
  HTMLAttributes<"div"> & {
    imgClassName?: string;
    textClassName?: string;
  }
> = ({ className, imgClassName, textClassName }) => (
  <div className={cn("w-full flex z-50", className)}>
    <Image
      src="assets/remondikohvik-logo.png"
      alt="Remondikohvik logo"
      width={160}
      height={80}
      className={cn("-translate-y-2 size-8 z-51", imgClassName)}
    />
    <span
      className={cn(
        "text-sm lg:text-lg font-light tracking-wider uppercase z-51 font-parkinsans -translate-y-0.5",
        textClassName
      )}
    >
      Remondi<span className="text-primary tracking-wider font-light font-parkinsans">kohvik</span>
    </span>
  </div>
);
