import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const circle = document.getElementById("cursor-circle");

    if (!dot || !circle) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let circleX = mouseX;
    let circleY = mouseY;
    let idleTimeout;

    // Set initial positions
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) translate(-50%, -50%)`;

    const isCursorInContact = (x, y) => {
      const contactElem =
        document.getElementById("contact") ||
        document.querySelector(".contact-section");
      if (!contactElem) return false;
      const rect = contactElem.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        return true;
      }
      if (typeof document.elementFromPoint === "function") {
        const el = document.elementFromPoint(x, y);
        if (el && el.closest && el.closest("#contact, .contact-section")) {
          return true;
        }
      }
      return false;
    };

    const clearIdle = () => {
      dot.classList.remove("idle");
      circle.classList.remove("idle");
    };

    const setIdle = () => {
      if (isCursorInContact(mouseX, mouseY)) {
        clearIdle();
        return;
      }
      dot.classList.add("idle");
      circle.classList.add("idle");
    };

    const resetIdle = () => {
      clearIdle();
      clearTimeout(idleTimeout);
      if (!isCursorInContact(mouseX, mouseY)) {
        idleTimeout = setTimeout(setIdle, 1000);
      }
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      const overContact =
        isCursorInContact(mouseX, mouseY) ||
        Boolean(
          e.target &&
            e.target.closest &&
            (e.target.closest("#contact") || e.target.closest(".contact-section"))
        );

      if (overContact) {
        clearIdle();
        clearTimeout(idleTimeout);
      } else {
        resetIdle();
      }
    };

    const onScroll = () => {
      if (isCursorInContact(mouseX, mouseY)) {
        clearIdle();
        clearTimeout(idleTimeout);
      } else {
        resetIdle();
      }
    };

    // Initial idle setup check
    resetIdle();

    let animationFrameId;
    const render = () => {
      circleX += (mouseX - circleX) * 0.15;
      circleY += (mouseY - circleY) * 0.15;
      circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) translate(-50%, -50%)`;

      if (isCursorInContact(mouseX, mouseY)) {
        if (circle.classList.contains("idle") || dot.classList.contains("idle")) {
          clearIdle();
          clearTimeout(idleTimeout);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(idleTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" className="cursor-dot"></div>
      <div id="cursor-circle" className="cursor-circle">
        <div className="cursor-scroll-content">
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-track">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </>
  );
}
