$(document).ready(mainCode)


function mainCode() {

    $(document).on("mousemove", onMouseMove)
    $(document).on("keypress", onKeyPress)


    function onKeyPress(event) {
        event.preventDefault()
        if ( event.key == " " ) {
            anime({
                targets: "*",
                translateX: 0,
                translateY: 0,
                rotate: 0,
            })
        }
    }
    function onMouseMove(event) {
        var mouseTarget = event.target

        var maxDistance = 100
        if ( 
            mouseTarget.tagName !== "HTML" &&
            mouseTarget.tagName !== "BODY" &&
            !mouseTarget.className.includes("page-container")
            ) {
            anime({
                targets: mouseTarget,
                translateY: "+=" + (Math.random() * 2 - 1) * maxDistance,
                translateX: "+=" + (Math.random() * 2 - 1) * maxDistance,
                // rotate: Math.random() * 360,
                easing: "easeOutQuint",
                duration: 5000
            })
        }

    }
}

