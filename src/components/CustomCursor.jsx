import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import arrow from "@/assets/svg/cursors/arrow.svg";
import pointer from "@/assets/svg/cursors/pointer.svg";
import { useState } from "react";

const CustomCursor = () => {
  const [showPointer, setShowPointer] = useState(false);

  useGSAP(
    () => {
      gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(".cursor", "x", {
        duration: 0.001,
        ease: "none",
      });
      const yTo = gsap.quickTo(".cursor", "y", {
        duration: 0.001,
        ease: "none",
      });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      });

      const interactiveEls = document.querySelectorAll("a");

      interactiveEls.forEach((el) => {
        el.addEventListener("mouseenter", (e) => {
          setShowPointer(true);
        });

        el.addEventListener("mouseleave", (e) => {
          setShowPointer(false);
        });
      });
    },
    { dependencies: [showPointer] },
  );

  return (
    <div className="cursor pointer-events-none fixed left-0 top-0 z-[999]">
      <img src={showPointer ? pointer : arrow} alt="" />
    </div>
  );
};

export default CustomCursor;
