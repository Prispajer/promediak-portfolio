import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StaticImageData } from "next/image";

interface ParallaxSectionProps {
  backgroundImage: StaticImageData;
  children: ReactNode;
  overlay?: boolean;
  height?: string;
  speed?: number;
}

const ParallaxSection = ({
  backgroundImage,
  children,
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
      style={{ minHeight: height }}
    >
      <motion.div
        className="absolute inset-0 -top-[10%] h-[120%] w-full bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          y,
        }}
      />

      {overlay && (
        <div className="bg-background/70 absolute inset-0 backdrop-blur-[2px]" />
      )}

      <div className="relative z-10 flex h-full items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
