let garadnende = 0
basic.forever(function () {
    garadnende = input.compassHeading()
    if (garadnende < 45) {
        basic.showString("N")
    } else if (garadnende < 135) {
        basic.showString("O")
    } else if (garadnende < 225) {
        basic.showString("Z")
    } else if (garadnende < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
