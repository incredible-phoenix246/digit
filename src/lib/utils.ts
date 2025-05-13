import gsap from "gsap";
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const animatePageIn = () => {
  const bannerOne = document.querySelector("#banner-1") as HTMLElement;
  const bannerTwo = document.querySelector("#banner-2") as HTMLElement;
  const bannerThree = document.querySelector("#banner-3") as HTMLElement;
  const bannerFour = document.querySelector("#banner-4") as HTMLElement;

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const TL = gsap.timeline();

    TL.set([bannerOne, bannerTwo, bannerThree, bannerFour], { yPercent: 0 }).to(
      [bannerOne, bannerTwo, bannerThree, bannerFour],
      {
        yPercent: 100,
        stagger: 0.2,
      },
    );
  }
};
