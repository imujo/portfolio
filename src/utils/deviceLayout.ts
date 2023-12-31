import { ScreenSize } from "../hooks/useScreenSize";

export type DeviceSize = {
  offset: number;
  speed: number;
  size: {
    [key in ScreenSize]: {
      left: number;
      width: number;
    };
  };
};

export type PhoneSizes = "xl" | "lg" | "md" | "sm";

export type DeviceLayout = {
  [key in PhoneSizes]: DeviceSize;
};

export const deviceLayout: DeviceLayout = {
  xl: {
    offset: 350,
    speed: 240,
    size: {
      "2xl": {
        left: 50,
        width: 300,
      },
      xl: {
        left: 45,
        width: 300,
      },
      lg: {
        left: 45,
        width: 300,
      },
      md: {
        left: 5,
        width: 300,
      },
      sm: {
        left: 5,
        width: 270,
      },
      xs: {
        left: -5,
        width: 200,
      },
    },
  },
  lg: {
    offset: 400,
    speed: 380,
    size: {
      "2xl": {
        left: 75,
        width: 270,
      },
      xl: {
        left: 75,
        width: 270,
      },
      lg: {
        left: 75,
        width: 270,
      },
      md: {
        left: 50,
        width: 270,
      },
      sm: {
        left: 55,
        width: 240,
      },
      xs: {
        left: 54,
        width: 170,
      },
    },
  },
  md: {
    offset: 820,
    speed: 100,
    size: {
      "2xl": {
        left: 50,
        width: 250,
      },
      xl: {
        left: 50,
        width: 250,
      },
      lg: {
        left: 50,
        width: 250,
      },
      md: {
        left: 25,
        width: 250,
      },
      sm: {
        left: 12,
        width: 220,
      },
      xs: {
        left: 5,
        width: 160,
      },
    },
  },
  sm: {
    offset: 900,
    speed: 10,
    size: {
      "2xl": {
        left: 75,
        width: 230,
      },
      xl: {
        left: 75,
        width: 230,
      },
      lg: {
        left: 75,
        width: 230,
      },
      md: {
        left: 65,
        width: 230,
      },
      sm: {
        left: 60,
        width: 190,
      },
      xs: {
        left: 60,
        width: 130,
      },
    },
  },
};
