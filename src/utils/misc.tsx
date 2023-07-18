import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function twoDigitNumber(number: number) {
  return number < 10 ? "0" + number : "" + number;
}

export function getFullFileUrl(url: string) {
  return new URL(url, process.env.FILES_SERVER_ENDPOINT as string).href;
}
