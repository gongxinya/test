input.onButtonPressed(Button.A, function () {
    a = a - 1
    serial.writeLine("t:" + a.toString())
    basic.pause(500)
    a = a + 1
    serial.writeLine("t:" + a.toString())
})
input.onButtonPressed(Button.B, function () {
    a = a + 1
    serial.writeLine("t:" + a.toString())
    basic.pause(500)
    a = a - 1
    serial.writeLine("t:" + a.toString())
})
let a = 0

input.onGesture(Gesture.TiltLeft, function () {
    serial.writeLine("l:1")
    serial.writeLine("r:0")
    basic.pause(200)
    serial.writeLine("l:0")
})
input.onGesture(Gesture.TiltRight, function () {
    serial.writeLine("r:1")
    serial.writeLine("l:0")
    basic.pause(200)
    serial.writeLine("r:0")
})
