"use client";
import { MotionValue, motion, useSpring } from "framer-motion";
import { FC } from "react";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";
import { DeviceSize } from "@/utils/deviceLayout";
import { useParallax } from "@/hooks/useParallax";

interface DeviceImageProps {
  link: string;
  size: DeviceSize;
  zIndex: number;
  scrollYProgress: MotionValue<number>;
}

const DeviceImage: FC<DeviceImageProps> = ({
  link,
  size,
  zIndex,
  scrollYProgress,
}) => {
  const screenSize = useScreenSize();
  const parallax = useParallax(scrollYProgress, size.speed);
  const springParallax = useSpring(parallax, {
    stiffness: 150,
    damping: 50,
    restDelta: 0.001,
  });

  if (!screenSize) return <h1>Loading...</h1>;

  return (
    <motion.div
      style={{
        y: springParallax,
        zIndex: zIndex,
        padding: `${size.offset}px 0`,
        left: `${size.size[screenSize].left}%`,
      }}
      className="phonex "
    >
      <div style={{ width: `${size.size[screenSize].width}px` }}>
        <Image
          src={link}
          alt="phone"
          fill
          sizes="(min-width: 1024px) 40vw, 20vw"
        />
      </div>
    </motion.div>
  );
};

export default DeviceImage;
