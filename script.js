function sub() {
  gsap.registerPlugin(ScrollTrigger);
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
sub()
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  gsap.from("#p3 h1", {
    duration: 0.5,
    onStart: function () {
        $('#p3 h1').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.5, } });
    },
    scrollTrigger:{
        trigger:"#p3 h1",
        scroller:"#main",
        start:"top 90%"
    }
})
gsap.from("#p3 h2", {
  duration: 0.5,
  onStart: function () {
      $('#p3 h2').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.7, } });
  },
  scrollTrigger:{
      trigger:"#p3 h2",
      scroller:"#main",
      start:"top 90%"
  }
})
gsap.from("#p3 p", {
  duration: 0.5,
  onStart: function () {
      $('#p3 p').textillate({ in: { effect: 'FlipInY',   delayScale: 0.1, } });
  },
  scrollTrigger:{
      trigger:"#p3 p",
      scroller:"#main",
      start:"top 90%"
  }
})
gsap.from("#p4 h2", {
  duration: 0.5,
  onStart: function () {
      $('#p4 h2').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.7, } });
  },
  scrollTrigger:{
      trigger:"#p4 h2",
      scroller:"#main",
      start:"top 90%"
  }
})
gsap.from("#p4 h1", {
duration: 0.5,
onStart: function () {
    $('#p4 h1').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.8, } });
},
scrollTrigger:{
    trigger:"#p4 h1",
    scroller:"#main",
    start:"top 90%"
}
})
gsap.from("#p7 h3", {
  duration: 0.5,
  onStart: function () {
      $('#p7 h3').textillate({ in: { effect: 'BounceIn',   delayScale: 0.9, } });
  },
  scrollTrigger:{
      trigger:"#p7 h3",
      scroller:"#main",
      start:"top 90%"
  }
})