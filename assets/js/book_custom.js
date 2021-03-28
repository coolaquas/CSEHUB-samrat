let Bookdata = [
  {
    title: "Principles of Managment",
    info1: "Notes : DR. TINY TANUSHREE GOHAIN",
    info2: "MANAGEMENT I [HSMC (CSE) 401]",
    src:
      "https://drive.google.com/file/d/1KUMNqUvKiq8ekbuo0SXcoOAtbt1K-WVH/view",
    image: "11.png",
  },
  {
    title: "Organising",
    info1: "Notes : DR. TINY TANUSHREE GOHAIN",
    info2: "MANAGEMENT I [HSMC (CSE) 401]",
    src:
      "https://drive.google.com/file/d/13s_Ms0wvdB9SOPtHiC_J_hcKxN-iVgXr/view",
    image: "10.png",
  },
  {
    title: "Design & analysis of algorithm Notes",
    info1: "Notes : SUPRATIV SAHA",
    info2: "Design & analysis of algorithm",
    src:
      "https://www.brainwareuniversity.ac.in/studentselfservice/student-student-forum-new.php?type=topic&actiontype=modify&boardid=95&topicid=10664",
    image: "9.png",
  },
  {
    title: "Fundamental of Computer",
    info1: "Notes : SITIKANTHA CHATTOPADHYAY",
    info2: "Computer orgnaization and architecture",
    src:
      "https://drive.google.com/file/d/1b804CPjPTWcM53517fToSE8zwKkFSXkv/view",
    image: "8.png",
  },
  {
    title: "Manegment",
    info1: "Notes : Anupam Bandyopadhyay",
    info2: "MANAGEMENT I [HSMC (CSE) 401]",
    src:
      "https://drive.google.com/file/d/10GHvyXnJcFezpjLYNIMFuMOVxaINcm1Z/view",
    image: "7.png",
  },
  {
    title: "Unit 1: Introduction to Management",
    info1: "Notes : Anupam Bandyopadhyay",
    info2: "MANAGEMENT I [HSMC (CSE) 401]",
    src:
      "https://drive.google.com/file/d/1b804CPjPTWcM53517fToSE8zwKkFSXkv/view",
    image: "6.png",
  },
  {
    title: "Basic Structure of Computer",
    info1: "Notes : SITIKANTHA CHATTOPADHYAY",
    info2: "Computer orgnaization and architecture",
    src:
      "https://drive.google.com/file/d/1TJJLropb-uLCnwhzwbsVeu-lboPbfb-1/view",
    image: "5.png",
  },
  {
    title: "Notes 1: Operating System",
    info1: "Notes : PRIYANKA GHOSH",
    info2: "Operating System",
    src:
      "https://drive.google.com/file/d/12Uv-45739C4VsbxGOxvqmuaMkru-tA7p/view",
    image: "4.png",
  },
  {
    title: "Computer Organization and Architecture - Module-1",
    info1: "Notes : SITIKANTHA CHATTOPADHYAY",
    info2: "Computer orgnaization and architecture",
    src:
      "https://drive.google.com/file/d/10GHvyXnJcFezpjLYNIMFuMOVxaINcm1Z/view",
    image: "3.png",
  },
  {
    title: "Theory and Problems of DISCRETE MATHEMATICS Third Edition",
    info1: "SEYMOUR LIPSCHUTZ, Ph.D.</br>Temple University",
    info2: "MARC LARS LIPSON, Ph.D.</br>University of Virginia",
    src:
      "https://drive.google.com/file/d/1o_V4iIYFmz-xYcXPOKd0sWH6h4LuXA1M/view",
    image: "2.png",
  },
  {
    title: "Discrete Mathematics and Its Applications",
    info1: "Kenneth H. Rosen</br>Monmouth University",
    info2: "(and formerly AT&T Laboratories)",
    src:
      "https://drive.google.com/file/d/10GHvyXnJcFezpjLYNIMFuMOVxaINcm1Z/view",
    image: "1.png",
  },
];

Bookdata.forEach((info, idx) => {
  if (idx % 2 === 0) {
    $("#book_data").append(`
    <section class="section padding-top-70 padding-bottom-0"id="${
      idx === 0 ? "Study_Material" : ""
    }">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12 align-self-center"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <a href="${info?.src}" target="_blank">
                        <img src="https://igstory.s3.ap-south-1.amazonaws.com/Brainware/${
                          info?.image
                        }" class="rounded img-fluid d-block mx-auto" alt="App"
                            style="height: 350px" />
                    </a>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                    <div class="left-heading">
                        <h2 class="section-title">
                            ${info?.title}</h2>
                    </div>
                    <div class="left-text">
                        <p>
                            ${info?.info1}
                            <br />
                            ${info?.info2}
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </section>
    `);
  } else {
    $("#book_data").append(`
    <section class="section padding-bottom-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                    <div class="left-heading">
                        <h2 class="section-title">
                        ${info?.title}
                        </h2>
                    </div>
                    <div class="left-text">
                        <p>


                        ${info?.info1}
                        <br />
                        ${info?.info2}
                        </p>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <a href="${info?.src}"
                        target="_blank">
                        <img src="https://igstory.s3.ap-south-1.amazonaws.com/Brainware/${info?.image}" class="rounded img-fluid d-block mx-auto" alt="App"
                            style="height: 350px" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    `);
  }
});

(function ($) {
  "use strict";

  // Window Resize Mobile Menu Fix
  mobileNav();

  // Scroll animation init
  window.sr = new scrollReveal();

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $("a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 130,
          },
          700
        );
        return false;
      }
    }
  });

  $(document).ready(function () {
    //smoothscroll
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $("a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 130,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
          }
        );
    });
  });

  // Home seperator
  if ($(".home-seperator").length) {
    $(".home-seperator .left-item, .home-seperator .right-item").imgfix();
  }

  // Home number counterup
  if ($(".count-item").length) {
    $(".count-item strong").counterUp({
      delay: 10,
      time: 1000,
    });
  }

  // Page loading animation
  $(window).on("load", function () {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1",
      });
    }

    $("#preloader").animate(
      {
        opacity: "0",
      },
      600,
      function () {
        setTimeout(function () {
          $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
      }
    );
  });

  // Window Resize Mobile Menu Fix
  $(window).on("resize", function () {
    mobileNav();
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 992) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
})(window.jQuery);
