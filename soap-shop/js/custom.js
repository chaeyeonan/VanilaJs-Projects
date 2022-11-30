// Elements Clone For Mobile
const mobileMenus = document.querySelector(".mobile-menus");
const navs = document.querySelector(".nav-lists").cloneNode(true);
const info = document.querySelector(".info").cloneNode(true);

mobileMenus.appendChild(navs);
mobileMenus.appendChild(info);

// Mobile Menu Toggle
const mobileBtn = document.querySelector(".mobile-btn");

const toggleMobileBtn = (e) => {
  const target = e.currentTarget;
  const menuHeight = mobileMenus.scrollHeight;

  target.classList.toggle("active");

  if (target.classList.contains("active")) {
    target.classList.remove("not-active");
    mobileMenus.style.height = `${menuHeight}px`;
  } else {
    target.classList.add("not-active");
    mobileMenus.style.height = 0;
  }
};

mobileBtn.addEventListener("click", toggleMobileBtn);

// header change Effect
const header = document.querySelector("#header");
const stickyHeader = () => {
  const scrY = window.scrollY;

  if (scrY > 0) header.classList.add("active");
  else header.classList.remove("active");
};

window.addEventListener("scroll", stickyHeader);

// Scrollreveal Effect
const sr = ScrollReveal({ reset: false });
sr.reveal(".wrapper", { duration: 1000 });
sr.reveal(".landing-text-box", {
  duration: 1000,
  origin: "right",
  distance: "80px",
});
sr.reveal(".meet-textBox", {
  duration: 1000,
  origin: "bottom",
  distance: "40px",
});
sr.reveal(".meet-imgBox img", {
  duration: 1000,
  origin: "bottom",
  distance: "40px",
  interval: "200",
});
