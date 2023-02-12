// scroll to topBtn
let btn = document.querySelector("button");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
///////////////////////
// end on scroll for js //
let ele = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let a = document.documentElement.scrollTop;
  ele.style.width = `${(a / height) * 100}%`;
});
