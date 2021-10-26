let cislo = 0
input.onButtonPressed(Button.A, function () {
    cislo = 10
    for (let index = 0; index < 10; index++) {
        basic.showNumber(cislo)
        cislo += -1
    }
    basic.showIcon(IconNames.Skull)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    cislo = 10
    for (let pořadí = 0; pořadí <= 10; pořadí++) {
        basic.showNumber(cislo)
        cislo += -1
    }
    basic.showIcon(IconNames.Skull)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    cislo = 10
    while (cislo >= 0) {
        basic.showNumber(cislo)
        cislo += -1
    }
    basic.showIcon(IconNames.Skull)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
basic.forever(function () {
	
})
