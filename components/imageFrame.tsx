import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { CSSProperties, FC } from "react";

interface FrameConfig {
  framesize?: CSSProperties["width"];
  bubbleposition: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const ImageFrame: FC<ImageProps & FrameConfig> = (props) => {
  const {
    bubbleposition: bubblePosition = "top-right",
    framesize: width = "300px",
  } = props;

  return (
    <div
      style={{ width }}
      className={cn("rounded-full aspect-square bg-primary flex  bubbles", {
        "bubbles-tl items-end justify-start": bubblePosition === "top-left",
        "bubbles-tr items-end justify-end": bubblePosition === "top-right",
        "bubbles-bl items-start justify-start":
          bubblePosition === "bottom-left",
        "bubbles-br items-start justify-end": bubblePosition === "bottom-right",
      })}
    >
      <Image
        {...props}
        className={cn(
          props.className,
          "rounded-full aspect-square w-[97.5%] object-cover"
        )}
      />
    </div>
  );
};
