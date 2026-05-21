import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ParallaxSectionProps {
  backgroundImage: StaticImageData;
  children: ReactNode;
  ariaLabel: string;
  overlay?: boolean;
  height?: string;
  speed?: number;
}

const ParallaxSection = ({
  backgroundImage,
  children,
  ariaLabel,
  overlay = true,
  height = "60vh",
  speed = 0.5,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: height }}
      aria-label={ariaLabel}
    >
      <motion.div
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
        style={{
          y,
        }}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
      </motion.div>
      {overlay && (
        <div
          aria-hidden="true"
          className="bg-background/70 absolute inset-0 backdrop-blur-[2px]"
        />
      )}
      <div className="relative z-10 flex h-full cursor-default items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
