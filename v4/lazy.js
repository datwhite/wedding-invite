// Ленивая загрузка изображений
(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;

      console.log("item.dataset.src " + item.dataset.src)
      console.log("item " + item.className)
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        // item.style.filter = `none`;
        document.getElementById('background-blur').style.display='none';
        return item.nodeName === 'IMG' ? 
          item.src = item.dataset.src :        
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  })();


// function handleIntersection(entries) {
//     entries.map((entry) => {
//       if (entry.isIntersecting) {
//         // Item has crossed our observation
//         // threshold - load src from data-src
//         entry.target.src = entry.target.dataset.src;
//         entry.target.classList.remove('lazyload');
//         // Job done for this item - no need to watch it!
//         observer2.unobserve(entry.target);
//       }
//     });
//   }

//   const images = document.querySelectorAll('.lazyload');
//   const observer2 = new IntersectionObserver(handleIntersection);
//   images.forEach(image => observer2.observe(image));

// document.addEventListener("DOMContentLoaded", function () {
//     var lazyloadImages;

//     if ("IntersectionObserver" in window) {
//         lazyloadImages = document.querySelectorAll(".lazy");
//         var imageObserver = new IntersectionObserver(function (entries, observer) {
//             entries.forEach(function (entry) {
//                 if (entry.isIntersecting) {
//                     var image = entry.target;
//                     image.src = image.dataset.src;
//                     image.classList.remove("lazy");
//                     imageObserver.unobserve(image);
//                 }
//             });
//         });

//         lazyloadImages.forEach(function (image) {
//             imageObserver.observe(image);
//         });
//     } else {
//         var lazyloadThrottleTimeout;
//         lazyloadImages = document.querySelectorAll(".lazy");

//         function lazyload() {
//             if (lazyloadThrottleTimeout) {
//                 clearTimeout(lazyloadThrottleTimeout);
//             }

//             lazyloadThrottleTimeout = setTimeout(function () {
//                 var scrollTop = window.pageYOffset;
//                 lazyloadImages.forEach(function (img) {
//                     if (img.offsetTop < (window.innerHeight + scrollTop)) {
//                         img.src = img.dataset.src;
//                         img.classList.remove('lazy');
//                     }
//                 });
//                 if (lazyloadImages.length == 0) {
//                     document.removeEventListener("scroll", lazyload);
//                     window.removeEventListener("resize", lazyload);
//                     window.removeEventListener("orientationChange", lazyload);
//                 }
//             }, 20);
//         }

//         document.addEventListener("scroll", lazyload);
//         window.addEventListener("resize", lazyload);
//         window.addEventListener("orientationChange", lazyload);
//     }
// })