import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

export const text = (element) => {
  let splitText;
  let scrollTriggers = [];

  const init = () => {
    splitText = new SplitType(element, { types: "lines" });

    splitText.lines?.forEach((line) => {
      const mask = document.createElement("div");
      mask.style.overflowY = "hidden";

      if (line.parentElement.classList.contains("split-padding")) {
        mask.style.paddingBottom = "7px";
      }

      mask.appendChild(line.cloneNode(true));
      line.parentElement.replaceChild(mask, line);

      const tween = gsap.from(mask.firstChild, {
        yPercent: 100,
        duration: 1,
        scrollTrigger: {
          trigger: mask,
        },
      });

      ScrollTrigger.create({
        trigger: mask,
        start: "top 100%",
        onLeaveBack: () => tween.pause(0),
      });

      scrollTriggers.push(tween.scrollTrigger);
    });
  };

  const killScrollTriggers = () => {
    console.log(scrollTriggers);

    scrollTriggers.forEach((scrollTrigger) => {
      scrollTrigger.kill();
    });
  };

  const debouncedFunction = debounce(() => {
    if (splitText) splitText.revert();
    killScrollTriggers();
    init();
  }, 300);

  window.addEventListener("resize", debouncedFunction);

  init();

  return () => {
    window.removeEventListener("resize");
  };
};
