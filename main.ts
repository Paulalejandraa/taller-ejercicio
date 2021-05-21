input.onButtonPressed(Button.A, function () {
    while (veces <= 10) {
        basic.showNumber(veces)
        s0 = pins.analogReadPin(AnalogPin.P0)
        s1 = pins.analogReadPin(AnalogPin.P1)
        s2 = pins.analogReadPin(AnalogPin.P2)
        p0 = pins.map(
        s0,
        0,
        1023,
        0,
        100
        )
        basic.showNumber(p0)
        basic.pause(2000)
        acu0 += p0
        basic.pause(1000)
        p1 = pins.map(
        s1,
        0,
        1023,
        0,
        100
        )
        basic.showNumber(p1)
        basic.pause(2000)
        acu1 += p1
        basic.pause(1000)
        p2 = pins.map(
        s2,
        0,
        1023,
        0,
        100
        )
        basic.showNumber(p2)
        basic.pause(2000)
        acu2 += p2
        veces += 1
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber((prom0 + prom1 + prom2) / 3)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    prom0 = acu0 / 10
    basic.showString("P0=")
    basic.showNumber(prom0)
    prom1 = acu1 / 10
    basic.showString("P1=")
    basic.showNumber(prom1)
    prom2 = acu2 / 10
    basic.showString("P2=")
    basic.showNumber(prom2)
    basic.pause(2000)
    basic.clearScreen()
})
let prom2 = 0
let prom1 = 0
let prom0 = 0
let acu2 = 0
let acu1 = 0
let acu0 = 0
let s2 = 0
let s1 = 0
let s0 = 0
let p2 = 0
let p1 = 0
let p0 = 0
let veces = 0
veces = 1
p0 = 0
p1 = 0
p2 = 0
