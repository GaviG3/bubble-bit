input.onButtonPressed(Button.A, function () {
    running = false
})
input.onButtonPressed(Button.B, function () {
    running = true
})
let running = false
let top_angle = 70
let bottom_angle = 120
let fan_time = 1
let fan_power = 150
basic.forever(function () {
    if (running) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
    } else {
        basic.showString("PRESS")
        basic.showArrow(ArrowNames.East)
    }
})
basic.forever(function () {
    if (running) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (running) {
        pins.servoWritePin(AnalogPin.P2, bottom_angle)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P2, top_angle)
        pins.analogWritePin(AnalogPin.P0, fan_power)
        basic.pause(fan_time * 1000)
    } else {
        pins.servoWritePin(AnalogPin.P2, top_angle)
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
