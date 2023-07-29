"use client";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FC, useRef } from "react";
import DeviceImage from "./DeviceImage";
import useScreenSize, { ScreenSize } from "@/hooks/useScreenSize";
import { deviceLayout } from "@/utils/deviceLayout";
import useSticky from "@/hooks/useSticky";

interface testProps {}

const Test: FC<testProps> = ({}) => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //@ts-expect-error
    offset: ["start start", "end start"],
  });

  const titleParallax = useSticky(scrollYProgress);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (scrollYProgress.get() > 0.8 || scrollYProgress.get() < 0.1) {
      console.log("animate");
      animate(scope.current, { opacity: 0 }, { duration: 0.2 });
    } else {
      animate(scope.current, { opacity: 1 }, { duration: 0.2 });
    }
  });

  const screenSize = useScreenSize();

  return (
    <section ref={ref} className="w-full h-[150vh] relative ">
      <div ref={scope} className=" opacity-0  x-0">
        <motion.div
          style={{
            top: titleParallax,
            position: "absolute",
            left: "10%",
            marginTop: "20%",
          }}
          className=" text-black  relative z-10"
        >
          <h1>Hair salon</h1>
          <p className=" max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa
            voluptates architecto dignissimos aliquam nemo labore quia facere
            dolor, cumque fugit optio fugiat perspiciatis ut voluptatem
            cupiditate natus nesciunt quod!
          </p>
        </motion.div>
      </div>
      <DeviceImage
        link="/phonem.png"
        scrollYProgress={scrollYProgress}
        zIndex={4}
        size={deviceLayout.xl}
        screenSize={screenSize}
      />
      <DeviceImage
        link="/phonem.png"
        scrollYProgress={scrollYProgress}
        zIndex={3}
        size={deviceLayout.lg}
        screenSize={screenSize}
      />
      <DeviceImage
        link="/phonem.png"
        scrollYProgress={scrollYProgress}
        zIndex={2}
        size={deviceLayout.md}
        screenSize={screenSize}
      />
      <DeviceImage
        link="/phonem.png"
        scrollYProgress={scrollYProgress}
        zIndex={1}
        size={deviceLayout.sm}
        screenSize={screenSize}
      />
    </section>
  );
};

export default Test;
