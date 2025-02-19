// let currentIndex = 0;
//   const cards = document.querySelectorAll('.certificate-card');

// function showCard(index) {
// // Hide all cards
// cards.forEach(card => card.classList.remove('active'));
// // Show the current card
// cards[index].classList.add('active');
// }

// function moveSlide(step) {
// currentIndex += step;
// if (currentIndex < 0) {
//     currentIndex = cards.length - 1; // Go to last card if at the beginning
// } else if (currentIndex >= cards.length) {
//     currentIndex = 0; // Go to first card if at the end
// }
// showCard(currentIndex);
// }

// // Show the first card on load
// showCard(currentIndex);

// // Automatically move to the next card every 5 seconds (optional)
// setInterval(() => moveSlide(1), 5000); // Change interval time as needed

document.addEventListener("DOMContentLoaded", function () {
  // Navigation toggle button
  const navToggleButton = document.querySelector(".nav-toggle-bton");
  const topNavbarItems = document.querySelector(".topnavbar-items");
  const header = document.querySelector(".header");

  console.log(navToggleButton); // Check if the button is selected
  console.log(topNavbarItems); // Check if the navbar items are selected

  navToggleButton.addEventListener("click", function () {
    topNavbarItems.classList.toggle("active");
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Carousel for courses
  const carousel = document.querySelector(".certification-carousel");
  const cards = document.querySelectorAll(".certification-card");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  const moveCarousel = (direction) => {
    const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % cards.length;
    } else {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }
    carousel.scrollTo({
      left: currentIndex * cardWidth,
      behavior: "smooth",
    });
  };

  setInterval(() => moveCarousel("next"), 5000);

  prevButton.addEventListener("click", () => moveCarousel("prev"));
  nextButton.addEventListener("click", () => moveCarousel("next"));

  // function showSection(section) {
  //   // Hide both sections
  //   document.getElementById("job-role").classList.add("hidden");
  //   document.getElementById("skill-path").classList.add("hidden");

  //   // Show the selected section
  //   document.getElementById(section).classList.remove("hidden");

  //   // Update active tab styling
  //   document
  //     .getElementById("pills-job-role-paths-tab")
  //     .classList.remove("active");
  //   document.getElementById("pills-skill-paths-tab").classList.remove("active");

  //   document.getElementById(`pills-${section}-tab`).classList.add("active");
  // }

  // Touch event listeners for mobile swipe
  let isDragging = false;
  let startX, scrollLeft;

  carousel.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX; // Initial touch position
    scrollLeft = carousel.scrollLeft; // Initial scroll position
  });

  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default scrolling
    const x = e.touches[0].pageX; // Current touch position
    const walk = (x - startX) * 2; // Distance moved (multiplied for faster scroll)
    carousel.scrollLeft = scrollLeft - walk; // Update scroll position
  });

  carousel.addEventListener("touchend", () => {
    isDragging = false;
  });

  carousel.addEventListener("touchcancel", () => {
    isDragging = false;
  });

  //Togle to show certification and path

  // const certTabLinks = Document.querySelectorAll(".nav-link");
  // const certTabContent = Document.querySelectorAll(".certification-section");

  // certTabLinks.forEach(link => {
  //   link.addEventListener("click", function () {
  //     //remove active class from all links and content
  //     certTabLinks.forEach(l => l.classList.remove("active"));
  //     certTabContent.forEach(c => c.classList.remove("active"));

  //     // Adding active to the clicked link
  //     this.classList.add("active");

  //     // Show the corresponding content
  //     const target = this.getAttribute("data-target");
  //     document.getElementById(target).classList.add("active");
  //   });
  // });

  // modules for courses
  const mcarousel = document.querySelector(".modules-carousel");
  const mcards = document.querySelectorAll(".modules-card");
  const mprevButton = document.querySelector(".mprev");
  const mnextButton = document.querySelector(".mnext");
  let mcurrentIndex = 0;

  const mMoveCarousel = (direction) => {
    const cardWidth = mcards[0].offsetWidth + 20; // Card width + gap
    if (direction === "next") {
      mcurrentIndex = (mcurrentIndex + 1) % mcards.length;
    } else {
      mcurrentIndex = (mcurrentIndex - 1 + mcards.length) % mcards.length;
    }
    mcarousel.scrollTo({
      left: mcurrentIndex * cardWidth,
      behavior: "smooth",
    });
  };

  setInterval(() => mMoveCarousel("next"), 5000);

  mprevButton.addEventListener("click", () => mMoveCarousel("mprev"));
  mnextButton.addEventListener("click", () => mMoveCarousel("mnext"));

  // Carousel for testimony section
  const testimonyCarousel = document.querySelector(".testimony-carousel");
  const testimonyCards = document.querySelectorAll(".testimony-card");
  const tprevButton = document.querySelector(".tprev");
  const tnextButton = document.querySelector(".tnext");
  let testimonyIndex = 0;

  const moveTestimonyCarousel = (direction) => {
    const cardWidth = testimonyCards[0].offsetWidth;
    if (direction === "next") {
      testimonyIndex = (testimonyIndex + 1) % testimonyCards.length;
    } else {
      testimonyIndex =
        (testimonyIndex - 1 + testimonyCards.length) % testimonyCards.length;
    }
    testimonyCarousel.scrollTo({
      left: testimonyIndex * cardWidth,
      behavior: "smooth",
    });
  };

  setInterval(() => moveTestimonyCarousel("next"), 5000);

  tprevButton.addEventListener("click", () => moveTestimonyCarousel("tprev"));
  tnextButton.addEventListener("click", () => moveTestimonyCarousel("tnext"));
});
