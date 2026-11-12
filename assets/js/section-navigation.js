document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(
    document.querySelectorAll('#section-navigation a[href^="#"]'),
  );
  const sections = links.map((link) =>
    document.getElementById(link.hash.slice(1)),
  );
  let framePending = false;

  function updateActiveSection() {
    framePending = false;
    const referenceLine = window.innerHeight * 0.35;
    let activeIndex = 0;

    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= referenceLine) {
        activeIndex = index;
      }
    });

    links.forEach((link, index) => {
      if (index === activeIndex) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function scheduleUpdate() {
    if (!framePending) {
      framePending = true;
      window.requestAnimationFrame(updateActiveSection);
    }
  }

  if (links.length) {
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);
  }
});
