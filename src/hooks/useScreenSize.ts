"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export type ScreenSize = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

export default function useScreenSize(): ScreenSize | null | undefined {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const xxl = useMediaQuery({ minWidth: 1536 });
  const xl = useMediaQuery({ minWidth: 1280 });
  const lg = useMediaQuery({ minWidth: 1024 });
  const md = useMediaQuery({ minWidth: 768 });
  const sm = useMediaQuery({ minWidth: 640 });
  const xs = useMediaQuery({ minWidth: 1 });

  if (!isClient) return null;

  if (xxl) return "2xl";
  if (xl) return "xl";
  if (lg) return "lg";
  if (md) return "md";
  if (sm) return "sm";
  if (xs) return "xs";
}
