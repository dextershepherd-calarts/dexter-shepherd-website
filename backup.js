// const lightbox = $(".lightbox")
// let imageClass
// $('.image').click(function() {
//     imageClass = $(this)[0].classList[1]
//     $('.large-image').addClass(imageClass)
//     $('.lightbox').removeClass('hidden')
// })


// function close() {
//     $('.lightbox').addClass('hidden')
//     $('.large-image').removeClass(imageClass)
// }
// $('.overlay').click(close)

// $('.large-image').click(close)


// const moveAmount = 100
// function onMouseMove(evt) {
//     const target = evt.target
//     if ( target.tagName !== 'HTML' &&
//         target.tagName !== 'A' &&
//         !target.className.includes('page-container')) {
//         anime({
//             targets: target,
//             translateX: "+=" + (Math.random() * 2 - 1)  * moveAmount,
//             translateY: "+=" + (Math.random() * 2 - 1) * moveAmount ,
//             easing: 'easeOutQuad'
//         })
//     }
// }
// $(document).on('mousemove', _.throttle(onMouseMove, 250))

// $(document).on('keypress', function(evt) {
//     if ( evt.key == " ") {

//         anime({
//             targets: "*",
//             translateX: 0,
//             translateY: 0,
//             easing: 'easeOutQuad'
//         })
//     }

//     evt.preventDefault()
// })


///     $('.image').click(openLightbox)
// $('.overlay').click(closeLightbox)
// $('.lightbox-image').click(closeLightbox)

// var coolDex

// function openLightbox() {
//     $('.lightbox').removeClass('hidden')

//     coolDex = $(this)[0].classList[1]
//     $('.lightbox-image').addClass(coolDex)
// }

// function closeLightbox() {
//     $('.lightbox').addClass('hidden')
//     $('.lightbox-image').removeClass(coolDex)
// }
