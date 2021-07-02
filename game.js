let hit = 0
let possibleAttacks = [punch, kick, headbutt]
let players = {
    bob: {
        health: 100,
        damage: {
            punch: 1,
            kick: 2,
            headbutt: 5
        }
    },
    jake: {
        health: 120,
        damage: {
            punch: 2,
            kick: 3,
            headbutt: 4
        }
    }
}
console.log(players.bob.health)
console.log(players.bob.damage.punch)


// function attack(targetName, type) {
//     console.log(`You ${type} ${targetName}`)
//     console.log(`Players health : ${players[targetName].health}`)
//     console.log(`Attack Damage : ${players[targetName].damage[type]}`)
//     players[targetName].health -= players[targetName].damage[type]
//     console.log(`Players health : ${players[targetName].health}`)
//     update()
// }
function update(targetName) {
    console.log(`Target Name =`, targetName)
    console.log(`Players Health =`, players[targetName].health)
    document.getElementById("health").innerText = `${players[targetName].health}`
    document.getElementById("hits").innerText = `${hit}`
    whenZero(targetName)
}
function whenZero(targetName) {
    if (players[targetName].health <= 0) {
        players[targetName].health = 0
        document.getElementById("Inputs").innerHTML = `<button class="btn btn-dark" disabled>You Won</button>`
        document.getElementById("health").innerText = `${players[targetName].health}`
    }
}

function punch(targetName) {
    players[targetName].health = players[targetName].health - 1
    hit = hit + 1
    console.log('Lil punch')
    update(targetName)
}
function kick(targetName) {
    players[targetName].health = players[targetName].health - 2
    hit = hit + 1
    console.log('Solid kick')
    update(targetName)
}
function headbutt(targetName) {
    players[targetName].health = players[targetName].health - 5
    hit = hit + 1
    console.log('Huge Headbutt')
    update(targetName)
}
