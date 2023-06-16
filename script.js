const keys = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B']
let shuffledKeys
let progress

function restart() {
    progress = -1
    shuffledKeys = shuffle(keys)
    document.getElementById('arrow').classList.remove('Hidden')
    advance()
}

function advance() {
    progress += 1
    document.getElementById('progress').innerHTML = `${progress + 1} / 12`
    document.getElementById('key').innerHTML = shuffledKeys[progress]
    if (progress > 10)
        document.getElementById('arrow').classList.add('Hidden')
}

function shuffle(a) {
    const array = [...a]
    let currentIndex = array.length, randomIndex
  
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
  
    return array
}

window.onload = () => restart()