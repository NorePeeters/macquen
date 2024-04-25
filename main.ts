basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 10)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorStop(maqueen.Motors.M1)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    maqueen.motorStop(maqueen.Motors.All)
})
