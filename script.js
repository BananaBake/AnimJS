animate("btn", "type", 300);
animate("grow", "grow", 3000, "", "infinite");
animate("spin-in", "spin-in", 3000, "", "infinite");
animate("fade-in", "fade-in", 3000, "", "infinite");
animate("glow", "glow", 3000, "", "infinite");
animateOnVis("divvy", "fade-in", 3000, "", "forwards");
animateOnVis("divvy", "grow", 3000, "", "forwards");
animateOnVis("get-now-text", "type", 300);

function show(id) {
  document.getElementById(id).hidden = false;
}

function hide(id) {
  document.getElementById(id).hidden = true;
}