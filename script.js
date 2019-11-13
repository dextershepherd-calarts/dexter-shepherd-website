$(document).click(crazy)


setInterval(crazy, 300)

function crazy() {
    $('.page-container *').css("font-size", Math.random() * 50 + "px")
    $('.page-container *').css("padding-left", Math.random() * 100 + "px")
    $('.page-container *').css("padding-top", Math.random() * 100 + "px")
    $('.page-container *').css("border-radius", Math.random() * 100 + "px")
    $('.page-container *').css("background-color", `rgba(
        ${Math.random() * 255},
        ${Math.random() * 255},
        ${Math.random() * 255},
        1.0
        )`)
    $('.page-container *').addClass('animated jackInTheBox')
}