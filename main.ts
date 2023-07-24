let math1 = 0
let math2 = 0
input.onButtonPressed(Button.A, function () {
    math1 += 1
})
input.onButtonPressed(Button.B, function () {
    math2 += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(math1 + math2)
})
