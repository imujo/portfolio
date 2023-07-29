import { useMediaQuery } from "react-responsive";

export type ScreenSize = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

export default function useScreenSize() {
  const xxl = useMediaQuery({ minWidth: 1536 });
  const xl = useMediaQuery({ minWidth: 1280 });
  const lg = useMediaQuery({ minWidth: 1024 });
  const md = useMediaQuery({ minWidth: 768 });
  const sm = useMediaQuery({ minWidth: 640 });

  if (xxl) return "2xl";
  if (xl) return "xl";
  if (lg) return "lg";
  if (md) return "md";
  if (sm) return "sm";
  return "xs";
}
