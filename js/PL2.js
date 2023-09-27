//landing animation (ussless)
// let B_A = 3;
// let before_after = document.head.appendChild(document.createElement("style"));

// let changeBackground = window.setInterval(() => {
//   console.log(B_A);
//   if (B_A === 4) {
//     before_after.innerHTML = `.content:before {background-image: url(/pics/landing${B_A}.jpg);}`;
//     before_after.innerHTML = `.content:after {background-image: url(/pics/landing1.jpg);}`;
//     B_A = 1;
//   }
//   else {
//     before_after.innerHTML = `.content:before {background-image: url(/pics/landing${B_A}.jpg);}`;
//     before_after.innerHTML = `.content:after {background-image: url(/pics/landing${B_A + 1}.jpg);}`;
//     ++B_A;
//   }
// }, 5800);


//scroller
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop; 
  el.style.width = `${(scrollTop / height) * 100}%`;
});

//lg button
let down = 0;
let lg = document.querySelector(".lg-button");
lg.onclick = () => {
  if (down === 0) {
    document.querySelector(".predictions").style.height = "fit-content";
    lg.innerHTML = `<i class="fa-solid fa-angles-up fa-2xl"></i>`;
    down = 1;
  }
  else {
    document.querySelector(".predictions").style.height = "700px";
    lg.innerHTML = `<i class="fa-solid fa-angles-down fa-2xl"></i>`;
    down = 0;
  }
}

//scroll to top
let sttp = document.querySelector(".sttp");
window.onscroll = () => {
  if (this.scrollY >= 200) {
    sttp.style.display = "flex";
  }
  else {
    sttp.style.display = "none";
  }
}




