function sendspaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o"));
    return spaceship;
}
// Não é necessário adicionar todos os tipos de um objeto como parâmetro de uma função e sim os que serão utilizados pela contexto da função: spaceShip: { name:string, speed:number}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("A aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada:');
var spaceshipCaptain = prompt('Insira o nome do capitão da nave:');
var currentShip = sendspaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Insira a velocidade para qual deseja acalerar.'));
accelerate(speed, currentShip);
