const transformTexts = document.querySelectorAll(".text-wrapper");
const shadow = document.querySelector(".shadow");

function detectCollision(clientX, clientY) {
  let status = false;
  transformTexts.forEach((transformText) => {
    const { top, left, width, height } = transformText.getBoundingClientRect();

    const isOverElement =
      clientX >= left &&
      clientX <= left + width &&
      clientY >= top &&
      clientY <= top + height;

    if (isOverElement) status = true;
  });
  return status;
}

document.body.addEventListener("mousemove", function ($event) {
  const { pageX, pageY } = $event;
  const { clientX, clientY } = $event;
  const size = detectCollision(clientX, clientY) ? 200 : 25;

  gsap.to(shadow, {
    duration: 0.6,
    delay: 0.1,
    "--posX": `${pageX}px`,
    "--posY": `${pageY}px`,
    "--size": `${size}px`,
    ease: "power2.out",
  });
});

document.body.addEventListener("touchmove", function ($event) {
  const { pageX, pageY } = $event;
  const { clientX, clientY } = $event;
  const size = detectCollision(clientX, clientY) ? 150 : 25;

  gsap.to(shadow, {
    duration: 0.4,
    delay: 0.1,
    "--posX": `${pageX}px`,
    "--posY": `${pageY}px`,
    "--size": `${size}px`,
    ease: "power2.out",
  });
});
