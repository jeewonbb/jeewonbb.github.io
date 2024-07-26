document.addEventListener("DOMContentLoaded", () => {
  // Check if the bodymovin library is loaded
  if (typeof bodymovin !== "undefined") {
    const animations = [
      { container: document.getElementById("Arw1"), path: "js/arw1.json" },
      { container: document.getElementById("Arw2"), path: "js/arw2.json" },
      { container: document.getElementById("Fly"), path: "js/fly.json" },
    ];

    animations.forEach(({ container, path }) => {
      if (container) {
        bodymovin.loadAnimation({
          container,
          path,
          renderer: "svg",
          loop: true,
          autoplay: true,
        });
      }
    });
  } else {
    console.error("bodymovin library is not loaded.");
  }

  // Mouseover and mouseleave effects
  document.querySelectorAll(".txt_list li").forEach((li) => {
    li.addEventListener("mouseover", () => {
      const tabSel = li.getAttribute("data-tab");
      const target = document.getElementById(tabSel);
      if (target) {
        target.style.transform = "translateY(0%)";
        target.style.zIndex = "1";
      }
    });

    li.addEventListener("mouseleave", () => {
      const tabSel = li.getAttribute("data-tab");
      const target = document.getElementById(tabSel);
      if (target) {
        target.style.transform = "translateY(800%)";

        setTimeout(() => {
          target.style.zIndex = "-1";
        }, 10);

        setTimeout(() => {
          target.style.transform = "translateY(-800%)";
        }, 500);
      }
    });
  });

  const leftT = document.querySelector(".txt_wrap .left_t");
  if (leftT) {
    leftT.style.transform = "translateY(100%)";
  }

  // Scroll and navigation
  const handleResize = () => {
    const width = window.innerWidth;

    if (width >= 768) {
      const $wrap = document.querySelector(".scroll_wrap");
      const pages = document.querySelectorAll(".page").length;
      let scrolling = false;
      let currentPage = 1;
      const $navPanel = document.querySelector(".nav-panel");
      const $navBtns = document.querySelectorAll(".nav-btn");

      const manageClasses = () => {
        $wrap.className = $wrap.className.replace(/(^|\s)active-page\S+/g, "");
        $wrap.classList.add(`active-page${currentPage}`);
        $navBtns.forEach((btn) => btn.classList.remove("active"));
        const currentNavBtn = document.querySelector(
          `.nav-btn.nav-page${currentPage}`
        );
        if (currentNavBtn) {
          currentNavBtn.classList.add("active");
        }
        if ($navPanel) {
          $navPanel.classList.add("invisible");
        }
        scrolling = true;
        setTimeout(() => {
          if ($navPanel) {
            $navPanel.classList.remove("invisible");
          }
          scrolling = false;
        }, 1000);
      };

      const navigate = (direction) => {
        if (!scrolling) {
          if (direction === "up" && currentPage > 1) {
            currentPage--;
            manageClasses();
          } else if (direction === "down" && currentPage < pages) {
            currentPage++;
            manageClasses();
          }
        }
      };

      document.addEventListener("wheel", (e) => {
        navigate(e.deltaY < 0 ? "up" : "down");
      });

      document.querySelectorAll(".scroll-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          navigate(btn.classList.contains("up") ? "up" : "down");
        });
      });

      $navBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (!scrolling && !btn.classList.contains("active")) {
            currentPage = parseInt(btn.getAttribute("data-target"), 10);
            manageClasses();
          }
        });
      });
    } else {
      const btnTop = document.querySelector(".btn_top");
      const btnBubble = document.querySelector(".btn_bubble");
      if (btnTop) {
        btnTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
      if (btnBubble) {
        btnBubble.addEventListener("click", () => {
          window.scrollTo({
            top: document.querySelector(".page4").offsetTop - 10,
            behavior: "smooth",
          });
        });
      }
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();

  // Random hide element on loading page
  // const loadingTexts = document.querySelectorAll(".loading_page p");
  // if (loadingTexts.length > 0) {
  //   const randomIndex = Math.floor(Math.random() * loadingTexts.length);
  //   loadingTexts[randomIndex].style.display = "none";
  // }
});
