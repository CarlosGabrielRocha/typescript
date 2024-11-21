function sendspaceship(name:string, captain:string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`)

    return spaceship
}
// Não é necessário adicionar todos os tipos de um objeto como parâmetro de uma função e sim os que serão utilizados pela contexto da função: spaceShip: { name:string, speed:number}
function accelerate(targetSpeed:number, spaceship: { name:string, speed:number}) {
    if ( spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`A aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name}...`)
    }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada:')
const spaceshipCaptain = prompt('Insira o nome do capitão da nave:')

const currentShip = sendspaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt('Insira a velocidade para qual deseja acalerar.'))

accelerate(speed, currentShip)