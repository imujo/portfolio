import Test from "@/components/Test";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className=" py-64">
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </main>
  );
};

export default page;
