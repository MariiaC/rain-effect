function rain() {
  const rainContainer = document.querySelector(".rain");
  let drops = "";

  for (let i = 0; i < 100; i++) {
    const randomAnimate = Math.floor(Math.random() * 98 + 2);
    const randomBottom = Math.floor(Math.random() * 4 + 2);

    drops += `<div class="drop" style="left:${i}%; bottom:${randomBottom + 100}%; animation-delay:0.${randomAnimate}s; animation-duration: 0.5${randomAnimate}s;">
    <div class="stem" style=" animation-delay:0.${randomAnimate}s; animation-duration: 0.5${randomAnimate}s;"> </div>
    <div class="splat" style="animation-delay:0.${randomAnimate}s; animation-duration: 0.5${randomAnimate}s;"> </div>
    </div>`;
  }

  rainContainer.innerHTML = drops;
}

window.addEventListener("load", windowLoad);

function windowLoad() {
  rain();
}
