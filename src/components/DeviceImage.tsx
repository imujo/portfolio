import { MotionValue, motion, useSpring } from "framer-motion";
import { FC } from "react";
import Image from "next/image";
import { ScreenSize } from "@/hooks/useScreenSize";
import { DeviceSize } from "@/utils/deviceLayout";
import { useParallax } from "@/hooks/useParallax";

interface DeviceImageProps {
  link: string;
  size: DeviceSize;
  zIndex: number;
  scrollYProgress: MotionValue<number>;
  screenSize: ScreenSize;
}

const DeviceImage: FC<DeviceImageProps> = ({
  link,
  size,
  zIndex,
  scrollYProgress,
  screenSize,
}) => {
  const parallax = useParallax(scrollYProgress, size.speed);
  const springParallax = useSpring(parallax, {
    stiffness: 150,
    damping: 50,
    restDelta: 0.001,
  });

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
      <div style={{ width: size.size.xl.width }}>
        <Image src={link} alt="phone" fill />
      </div>
    </motion.div>
  );
};

export default DeviceImage;
