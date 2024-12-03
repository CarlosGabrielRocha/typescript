let ships = [];
function newSpaceship(name, pilot, crewLimit) {
    const should = confirm(`Você tem certeza que deseja cadastrar a espaçonave ${name}, sendo o piloto ${pilot} e o limite da tripulação sendo ${crewLimit}?`);
    if (should) {
        const spaceship = {
            name,
            pilot,
            crewLimit,
            crew: [],
            inMission: false
        };
        ships.push(spaceship);
        alert('Espaçonave cadastrada com sucesso!');
    }
}
function addCrewMember(member, spaceship) {
    const should = confirm(`Você tem certeza que deseja adicionar ${member} à tripulação da espaçonave ${spaceship.name}?`);
    if (spaceship.crewLimit > spaceship.crew.length && should) {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado(a) à tripulação da ${spaceship.name}`);
    }
    else if (spaceship.crewLimit < spaceship.crew.length) {
        alert(`Vixe, a espaçonave ${spaceship.name} está lotada! Limite[${spaceship.crewLimit}], lotação atual[${spaceship.crew.length}]`);
    }
}
function sendToMission(spaceship) {
    const requiredCrew = Math.floor(spaceship.crewLimit / 3);
    if (spaceship.crew.length >= requiredCrew && spaceship.inMission === false) {
        spaceship.inMission = true;
        alert(`A espaçonave ${spaceship.name} foi enviada para uma missão!`);
    }
    else if (spaceship.inMission === true) {
        alert(`A espaçonave ${spaceship.name} já se encontra em uma missão!`);
    }
    else {
        alert(`${spaceship.name} possui uma tripulação insuficiente para ser enviada em uma missão! O Mínimo necessário são ${requiredCrew} tripulantes!`);
    }
}
function listRegisteredShips() {
    const shipsString = ships.reduce((accum, ship, indexof) => {
        const crew = ship.crew.reduce((accum, member, indexof) => {
            if (indexof === 0) {
                return accum + `${member}`;
            }
            else {
                return accum + `, ${member}`;
            }
        }, ``);
        let inMission;
        if (ship.inMission === true) {
            inMission = 'Sim';
        }
        else {
            inMission = 'Não';
        }
        return accum + `${indexof + 1}- ${ship.name}, Piloto: ${ship.pilot}, Limite de tripulação: ${ship.crewLimit}\n  Membros da tripulação: ${crew}\n  Em missão: ${inMission}\n . . . . .\n`;
    }, ``);
    console.log(shipsString);
    alert(`Espaçonaves registradas:\n\n ${shipsString}`);
}
function menu() {
    const option = prompt(`Menu\n-----------\n1- Cadastrar nova espaçonave\n2- Adicionar um membro\n3- Enviar espaçonave para uma missão\n4- Listar todas as naves cadastradas\n5- Sair\n-----------`);
    switch (option) {
        case '1':
            let shipName;
            let pilot;
            let crewLimit;
            do {
                shipName = prompt('Insira um nome para a espaçonave:');
            } while (empty(shipName) === true);
            do {
                pilot = prompt('Quem será o Piloto?');
            } while (empty(pilot) === true);
            do {
                crewLimit = Number(prompt('Qual será o tamanho máximo da tripulação?'));
            } while (empty(crewLimit) === true);
            newSpaceship(shipName, pilot, crewLimit);
            backToMenu();
            break;
        case '2':
            let newMemberName;
            do {
                newMemberName = prompt('Insira o nome do novo membro:');
            } while (empty(newMemberName) === true);
            let newMemberShip;
            do {
                newMemberShip = getSpaceship(prompt('Insira o nome da espaçonave:'));
                if (newMemberShip) {
                    addCrewMember(newMemberName, newMemberShip);
                }
                else {
                    const should = confirm('Voltar ao menu?');
                    if (should) {
                        break;
                    }
                }
            } while (!newMemberShip);
            backToMenu();
            break;
        case '3':
            let shipTomission;
            do {
                shipTomission = getSpaceship(prompt('Insira o nome da espaçonave:'));
                if (shipTomission) {
                    sendToMission(shipTomission);
                }
                else {
                    const should = confirm('Voltar ao menu?');
                    if (should) {
                        break;
                    }
                }
            } while (!shipTomission);
            backToMenu();
            break;
        case '4':
            listRegisteredShips();
            backToMenu();
            break;
        case '5':
            alert('Encerrando..');
            break;
        default:
            alert('Opção inválida!');
            menu();
            break;
    }
}
function empty(data) {
    if (data) {
        return false;
    }
    else {
        alert('Essa informação não pode estar vázia!');
        return true;
    }
}
function getSpaceship(name) {
    const spaceship = ships.find((ship) => ship.name === name);
    alert('Procurando espaçonave..');
    if (spaceship) {
        return spaceship;
    }
    else {
        alert('A espaçonave não foi encontrada!');
    }
}
function backToMenu() {
    alert('Voltando ao menu...');
    menu();
}
menu();
