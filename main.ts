input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    while (true) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
