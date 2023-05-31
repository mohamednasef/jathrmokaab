//
// function checkScrollDirectionIsUp(event) {
//     if (event.wheelDelta) {
//         return event.wheelDelta > 0;
//     }
//     return event.deltaY < 0;
// }
//
// function keepUp(){
//
//     window.addEventListener('scroll', (event) => {
//
//         if (checkScrollDirectionIsUp(event)) {
//             console.log('UP');
//         } else {
//             console.log('Down');
//         }
//     })
// }

// const ourServicesFirstService = document.querySelector("#our-services ul li:first-child")
// var inview = InView(ourServicesFirstService, function(isInView, data) {
//     if (isInView) {
//         if (data.elementOffsetTopInViewHeight < data.inViewHeight / 3) {
//             var element = ourServicesFirstService;
//             element.classList.add('relative');
//             var oldScrollY = window.scrollY;
//             window.onscroll = function(e) {
//                 if(oldScrollY < window.scrollY){
//                     element.classList.add('relative');
//                     if(element.nextElementSibling)
//                         element = element.nextElementSibling;
//                 }
//                 oldScrollY = window.scrollY;
//             }
//         }
//     }
// });


const ourServices = document.querySelectorAll("#our-services ul li")
.forEach((element) => {
    var inview = InView(element, function(isInView, data) {
        if (isInView && data.elementOffsetTopInViewHeight < data.inViewHeight / 4) {
            if (data.windowScrollTop - (data.elementOffsetTop - data.inViewHeight) > data.inViewHeight) {
                element.classList.add('relative');
            } else {
                element.classList.add('relative');
            }
        }
    })
})
