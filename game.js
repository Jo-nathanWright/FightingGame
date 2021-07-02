let health = 100
let hit = 0

function update() {
    document.getElementById("health").innerText = `${health}`
    document.getElementById("hits").innerText = `${hit}`
    whenZero()
}
function whenZero() {
    if (health <= 0) {
        health = 0
        document.getElementById("Inputs").innerHTML = `<button class="btn btn-dark" disabled>You Won</button>`
    }
    update()
}

function punch() {
    health = health - 1
    hit = hit + 1
    console.log('Lil punch')
    update()
}
function kick() {
    health = health - 2
    hit = hit + 1
    console.log('Solid kick')
    update()
}
function headbutt() {
    health = health - 5
    hit = hit + 1
    console.log('Huge Headbutt')
    update()
}