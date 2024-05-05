(function() {
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "anim.css";
  document.head.appendChild(style);
})()

/**
 * Animates an element by ID
 * @param {string} id - The ID of the element to animate
 * @param {name} name - The name of the animation
 * @param {number} duration - The duration of the animation in milliseconds
 * @param {string} ease - The ease of the animation
 * @param {...(number|string)} options - Additional options for the animation
 */

function animate(id, name, duration, ease, ...options) {
  const ele = document.getElementById(id);
  if (!ele) return;
  if (name === "type") {
    type(id, ele.textContent, duration);
    return;
  }
  if (name === "typeText") {
    type(id, (ease || options[0]), duration);
    return;
  }
  const eStyle = ele.style;
  let animation = "";
  if (eStyle.animation) {
    animation += ", "
  }
  animation += `${name} ${(duration || 1000) / 1000}s ${ease || "ease-in-out"} ${options.join(" ")}`;
  eStyle.animation += animation;
}

/**
 * Type text animation
 * @param {string} id - The ID of the element to animate
 * @param {string} text - The text to type
 * @param {number} delay - The delay between each character in milliseconds
 */

function type(id, text, delay) {
  const ele = document.getElementById(id);
  const textArray = text.split("");
  ele.textContent = "";
  let i = 0;
  const type = setInterval(() => {
    if (i < textArray.length) {
      ele.textContent += textArray[i];
      i++;
    } else {
      clearInterval(type);
    }
  }, delay);
}

/**
 * Animates when the element is visible
 * @param {string} id - The ID of the element to animate
 * @param {string} name - The name of the animation
 * @param {number} duration - The duration of the animation in milliseconds
 * @param {string} ease - The ease of the animation
 * @param {...(number|string)} options - Additional options for the animation
 */

function animateOnVis(id, name, duration, ease, ...options) {
  const ele = document.getElementById(id);
  if (!ele) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(id, name, duration, ease, ...options);
        observer.unobserve(ele);
      }
    });
  });
  observer.observe(ele);
}
