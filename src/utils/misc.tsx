import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function twoDigitNumber(number: number) {
  return number < 10 ? "0" + number : "" + number;
}

export function joinURLs(url1: string, url2: string) {
  return removeTrailingSlash(url1) + "/" + removeLeadingSlash(url2);
}
function removeLeadingSlash(url: string) {
  return url[0] === "/" ? (url = url.substring(1)) : url;
}
function removeTrailingSlash(url: string) {
  return url[url.length - 1] === "/" ? url.substring(0, url.length - 1) : url;
}
