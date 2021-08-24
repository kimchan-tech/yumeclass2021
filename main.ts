let カードを開いた = true
basic.forever(function () {
    if (input.lightLevel() >= 10 && カードを開いた == false) {
        カードを開いた = true
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        for (let index = 0; index < 8; index++) {
            basic.showIcon(IconNames.SmallHeart)
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(500)
        }
    } else {
        if (input.lightLevel() < 10) {
            カードを開いた = false
        }
    }
})
