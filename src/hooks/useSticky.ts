import { MotionValue, useTransform } from "framer-motion";

export default function useSticky(value: MotionValue<number>) {
  return useTransform(value, [0, 1], ["0%", "100%"]);
}
