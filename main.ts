maqueen.motorStop(maqueen.Motors.All)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showString("GO!")
basic.clearScreen()
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    basic.pause(100)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) >= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 6) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) == 8) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.Heart)
    }
})
