import gsap from "gsap";

export const paralax = (img, triggerElement) => {
  return gsap.to(img, {
    yPercent: 20,
    ease: "none",

    scrollTrigger: {
      trigger: triggerElement,
      scrub: 1,
    },
  });
};
