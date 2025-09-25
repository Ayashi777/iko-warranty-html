let collectionsGliderInstanceMd = null;
let collectionsGliderInstanceSm = null;
let whyGliderInstanceSm = null;
let galleryGliderInstanceSm = null;
let mediaGliderInstanceLg = null;
let mediaGliderInstanceMd = null;

document.addEventListener("DOMContentLoaded", function () {
  const screenWidth = window.innerWidth;

  initNavMenu();
  initReadMoreButtons();
  // initAssortmentSlider();
  initDocumentsSlider();
  initAccordion();
  initEvents();
  initGalleryModal();

  handleResize(screenWidth);

  // ресайз с debounce
  window.addEventListener(
    "resize",
    debounce(() => {
      handleResize(window.innerWidth);
    }, 200)
  );
});

// ---------- helpers ----------

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ---------- resize handler ----------

function handleResize(screenWidth) {
  // 👉 SMALL
  if (screenWidth < 800) {
    if (!collectionsGliderInstanceSm) {
      destroyCollectionsSliderMd();
      initCollectionsSliderSm();
    }
  }
  // 👉 MEDIUM
  else if (screenWidth < 1140) {
    if (!collectionsGliderInstanceMd) {
      destroyCollectionsSliderSm();
      initCollectionsSliderMd();
    }
  }
  // 👉 LARGE
  else {
    destroyCollectionsSliderSm();
    destroyCollectionsSliderMd();
  }

  // WHY slider
  if (screenWidth < 1140) {
    if (!whyGliderInstanceSm) {
      initWhySliderSm();
    }
  } else {
    destroyWhySliderSm();
  }

  // gallery slider
  if (screenWidth < 1000) {
    if (!galleryGliderInstanceSm) {
      initGallerySliderSm();
    }
  } else {
    destroyGallerySliderSm();
  }

  // media
  if (screenWidth < 1140) {
    if (!mediaGliderInstanceMd) {
      destroyMediaSliderLg();
      initMediaSliderMd();
    }
  } else {
    if (!mediaGliderInstanceLg) {
      destroyMediaSliderMd();
      initMediaSliderLg();
    }
  }
}

// ---------- sliders ----------

function initCollectionsSliderMd() {
  try {
    const el = document.querySelector(".collections-glider-md");
    if (!el) return;

    const prev = resetArrow(".collection-prev-md");
    const next = resetArrow(".collection-next-md");

    collectionsGliderInstanceMd = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function destroyCollectionsSliderMd() {
  if (collectionsGliderInstanceMd) {
    collectionsGliderInstanceMd.destroy();
    collectionsGliderInstanceMd = null;
  }
}

function initCollectionsSliderSm() {
  try {
    const el = document.querySelector(".collections-glider-sm");
    if (!el) return;

    const prev = resetArrow(".collection-prev-sm");
    const next = resetArrow(".collection-next-sm");

    collectionsGliderInstanceSm = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function destroyCollectionsSliderSm() {
  if (collectionsGliderInstanceSm) {
    collectionsGliderInstanceSm.destroy();
    collectionsGliderInstanceSm = null;
  }
}

function initWhySliderSm() {
  try {
    const el = document.querySelector(".why-glider-sm");
    if (!el) return;

    const prev = resetArrow(".why-prev");
    const next = resetArrow(".why-next");

    whyGliderInstanceSm = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
      responsive: [
        {
          breakpoint: 670,
          settings: { slidesToShow: 2 },
        },
      ],
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function destroyWhySliderSm() {
  if (whyGliderInstanceSm) {
    whyGliderInstanceSm.destroy();
    whyGliderInstanceSm = null;
  }
}

function initMediaSliderLg() {
  try {
    const el = document.querySelector(".media-glider");
    if (!el) return;

    const prev = resetArrow(".media-prev");
    const next = resetArrow(".media-next");

    new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}
function initDocumentsSlider() {
  try {
    const el = document.querySelector(".doc-glider");
    if (!el) return;

    new Glider(el, {
      slidesToShow: "auto",
      itemWidth: 335,
      exactWidth: true,
      dots: ".dots",
      arrows: {
        prev: ".doc-prev",
        next: ".doc-next",
      },
      responsive: [
        {
          breakpoint: 670,
          settings: { itemWidth: 290 },
        },
        {
          breakpoint: 1200,
          settings: { itemWidth: 308 },
        },
      ],
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function initGallerySliderSm() {
  try {
    const el = document.querySelector(".gallery-glider-sm");
    if (!el) return;

    const prev = resetArrow(".gallery-prev");
    const next = resetArrow(".gallery-next");

    galleryGliderInstanceSm = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}
function destroyGallerySliderSm() {
  if (galleryGliderInstanceSm) {
    galleryGliderInstanceSm.destroy();
    galleryGliderInstanceSm = null;
  }
}

function initAssortmentSlider() {
  try {
    const el = document.querySelector(".assortment-glider");
    if (!el) return;

    const prev = resetArrow(".assortment-prev");
    const next = resetArrow(".assortment-next");

    new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}

function initMediaSliderLg() {
  try {
    const el = document.querySelector(".media-glider");
    if (!el) return;

    const prev = resetArrow(".media-prev");
    const next = resetArrow(".media-next");

    mediaGliderInstanceLg = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}
function destroyMediaSliderLg() {
  if (mediaGliderInstanceLg) {
    mediaGliderInstanceLg.destroy();
    mediaGliderInstanceLg = null;
  }
}
function initMediaSliderMd() {
  try {
    const el = document.querySelector(".media-glider-md");
    if (!el) return;

    const prev = resetArrow(".media-prev-md");
    const next = resetArrow(".media-next-md");

    mediaGliderInstanceMd = new Glider(el, {
      slidesToShow: 1,
      arrows: { prev, next },
    });
  } catch (error) {
    console.log("Glider error:", error);
  }
}
function destroyMediaSliderMd() {
  if (mediaGliderInstanceMd) {
    mediaGliderInstanceMd.destroy();
    mediaGliderInstanceMd = null;
  }
}

// ---------- accordion & nav ----------
function initAccordion() {
  const headers = document.querySelectorAll(".dropdown__header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      headers.forEach((el) => {
        const parent = el.parentElement;
        const article = el.nextElementSibling;

        if (el === header && !parent.classList.contains("open")) {
          parent.classList.add("open");
          article.style.maxHeight = article.scrollHeight + "px";
        } else {
          parent.classList.remove("open");
          article.style.maxHeight = "0px";
        }
      });
    });
  });
}

function initNavMenu() {
  const burger = document.querySelector(".nav-icon");
  const menu = document.querySelector(".mobile-menu");
  const body = document.body;

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  const links = menu.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      menu.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
}

function initEvents() {
  const getCallBtns = document.querySelectorAll(".popup-trigger");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal");
  const body = document.body;

  getCallBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("active");
      body.classList.add("no-scroll");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    body.classList.remove("no-scroll");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      body.classList.remove("no-scroll");
    }
  });
}

function initReadMoreButtons() {
  const aboutReadMore = document.querySelector(".about__read-more");
  const aboutMore = document.querySelector(".about__more");

  const aboutUsReadMore = document.querySelector(".about-us__read-more");
  const aboutUsMore = document.querySelector(".about-us__more");

  aboutReadMore.addEventListener("click", () => {
    aboutReadMore.style.display = "none";
    aboutMore.style.display = "block";
  });

  aboutUsReadMore.addEventListener("click", () => {
    aboutUsReadMore.style.display = "none";
    aboutUsMore.style.display = "block";
  });
}

function initGalleryModal() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-content img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
}

function resetArrow(sel) {
  const el = document.querySelector(sel);
  if (!el) return null;
  const clone = el.cloneNode(true);
  el.parentNode.replaceChild(clone, el);
  return document.querySelector(sel);
}
