const planets = []

/* Tipos */

type Situation = "inhabited" | "habitable" | "uninhabitable" | "unexplored"
type Coordinate = [number, number, number, number]
type Planet = {
    name: string,
    coordinate: [number, number, number, number],
    situation: Situation,
    satellites: string[]
}


function savePlanet(name: string, coordinate: Coordinate, situation: Situation, satellites: string[]) {

    const planet: Planet = {
        name,
        coordinate,
        situation,
        satellites: [...satellites]
    }

    if (should(`Você tem certeza que deseja salvar esse planeta?`)) {
        planets.push(planet)
        alert('Planeta salvo com sucesso!')
    }
    
}

function updatePlanetSituation(newSituation: Situation, planet: Planet) {
    if (should('Você tem certeza que deseja salvar esse mudança?')) {
        planet.situation = newSituation
        alert('Mudança realizada com sucesso!')
    }
}

function addSatellite(satelliteName: string, planet: Planet) {
    if (should(`Você tem certeza que deseja adicionar o satélite ${satelliteName} no planeta ${planet.name}?`)) {
        planet.satellites.push(satelliteName)
        alert(`O satélite ${satelliteName} foi adicionado com sucesso!`)
    }
}

function removeSatellite(satelliteName: string, planet: Planet) {
    const satteliteToRemove = planet.satellites.find(sattelite => sattelite === satelliteName)
    if (satteliteToRemove) {
        planet.satellites = planet.satellites.filter(sattelite => sattelite !== satteliteToRemove)
        alert(`O satélite ${satelliteName} foi removido com sucesso.`)
    } else {
        alert('Satélite não encontrado!')
    }
}

function listPlanets() {
     
    const planetsString = planets.reduce((accum, planet: Planet) => {
        let coordinate:string
        let sattelites:string

        coordinate = planet.coordinate.reduce((accum, number, indexof) => {
            if (indexof === 3) {
                return accum + ` ${number}`
            } else {
                return accum + ` ${number},`
            }
        }, ``)
        
        sattelites = planet.satellites.reduce((accum, satellite) => {
            if (planet.satellites[planet.satellites.length - 1] === satellite) {
                return accum + ` ${satellite}.`
            } else {
                return accum + ` ${satellite},`
            }
        }, ``)

        return accum + `\n-> Nome: ${planet.name}, Situação: ${planet.situation}, Coordenadas: ${coordinate}, Satélites: ${sattelites}`

    }, `Planetas:\n--------`)

    alert(planetsString)


}


/* MENU */

function menu() {
    let opt = prompt(`1. Salvar um novo planeta\n2. Atualizar situação\n3. Adicionar um novo satelite\n4. Remover satelite\n5. Vizualizar planetas salvos\n6. Sair`)
    switch (opt) {
        case '1':
            menuOpt1()
            break
        case '2':
            menuOpt2()
            break
        case '3':
            menuOpt3()
            break
        case '4':
            menuOpt4()
            break
        case '5':
            menuOpt5()
            break
        case '6':
            break
        default:
            alert('Opção inválida!')
            goToMenu()
    }
}


// FUNÇÕES DA OPÇÃO 1 DO MENU

function menuOpt1() {
    let finish = false
    let planetName: string
    let planetNameOk = false
    while (!planetNameOk && finish === false) {
        planetName = prompt('Digite o nome do planeta:')
        if (!verification(planetName)) {
            finish = shouldExit()
        } else {
            planetNameOk = true
        }
    }

    let coordinate: [number, number, number, number] = [0, 0, 0, 0]

    let coordinateRegex = /(^\d+,\s?\d+,\s?\d+,\s?\d+$)/ // ex: 125, 2005, 4446, 5981
    let coordinateOk = false
    while (!coordinateOk && finish === false) {
        let coordinateString = prompt('Digite as coordenadas: (Ex: X, Y, Z, W)')
        if (!verification(coordinateString, coordinateRegex)) {
            finish = shouldExit()
        } else {
            coordinateOk = true
            let stringCoordinateArray = coordinateString.split(',')
            let numberCoordinateArray = stringCoordinateArray.map(coordinate => Number(coordinate))
            numberCoordinateArray.forEach((numberCoordinate, indexof) => {
                coordinate[indexof] = numberCoordinate 
            })
        }
    }

    let situation: Situation
    let situationOk = false
    while (!situationOk && finish === false) {
        situation = planetSituationOptions()
        if (!verification(situation)) {
            finish = shouldExit()
        } else {
            situationOk = true
        }
    }

    let satellites: string[] = []
    let satellitesOk = false
    while (!satellitesOk && finish === false) {
        let satellitesString = prompt('Quais são os seus satélites? [nome1, nome2, nome3...]')
        if (!verification(satellitesString)) {
            finish = shouldExit()
        } else {
            satellitesOk = true
            let noSpaceString = satellitesString.replace(/\s/g, '')
            let satellitesStringsArray = noSpaceString.split(',')
            satellites = [...satellitesStringsArray]
        }
    }

    if (finish === false) {
        savePlanet(planetName, coordinate, situation, satellites)
    }

     goToMenu()
}

// FUNÇÕES DA OPÇÃO 2 DO MENU

function menuOpt2() {
    let finish = false
    let planetName: string
    let planetToChange: Planet
    while (!planetToChange && finish === false) {
        planetName = prompt('Digite o nome do planeta:')
        planetToChange = planets.find(planet => planet.name === planetName)
        if (!planetToChange) {
            alert('O planeta não consta em nosso banco de dados!')
            finish = shouldExit()
        }
    }

    let situation: Situation
    let situationOk = false
    while (!situationOk && finish === false) {
        situation = planetSituationOptions()
        if (!verification(situation)) {
            finish = shouldExit()
        } else {
            situationOk = true
        }
    }

    if (finish === false) {
        updatePlanetSituation(situation, planetToChange)
    }

    goToMenu()
}

// FUNÇÕES DA OPÇÃO 3 DO MENU

function menuOpt3() {
    let finish = false
    let planetName: string
    let planetToChange: Planet
    while (!planetToChange && finish === false) {
        planetName = prompt('Digite o nome do planeta:')
        planetToChange = planets.find(planet => planet.name === planetName)
        if (!planetToChange) {
            alert('O planeta não consta em nosso banco de dados!')
            finish = shouldExit()
        }
    }

    let sattelite: string
    let satteliteOk = false
    while (!satteliteOk && finish === false) {  
        sattelite = prompt('Digite o nome do novo satélite: ')
        if (!verification(sattelite)) {
            finish = shouldExit()
        } else {
            satteliteOk = true
        }
    }

    if (finish === false) {
       addSatellite(sattelite, planetToChange)
    }

    goToMenu()
}

// FUNÇÕES DA OPÇÃO 4 DO MENU

function menuOpt4() {
    let finish = false
    let planetName: string
    let planetToChange: Planet
    while (!planetToChange && finish === false) {
        planetName = prompt('Digite o nome do planeta:')
        planetToChange = planets.find(planet => planet.name === planetName)
        if (!planetToChange) {
            alert('O planeta não consta em nosso banco de dados!')
            finish = shouldExit()
        }
    }

    let sattelite: string
    let satteliteOk = false
    while (!satteliteOk && finish === false) {  
        sattelite = prompt('Digite o nome do satélite a ser removido: ')
        if (!verification(sattelite)) {
            finish = shouldExit()
        } else {
            satteliteOk = true
        }
    }

    if (finish === false) {
       removeSatellite(sattelite, planetToChange)
    }

    goToMenu()
}

// FUNÇÕES DA OPÇÃO 5 DO MENU

function menuOpt5() {
    listPlanets()
    goToMenu()
}

// FUNÇÕES REUTILIZÁVEIS

function planetSituationOptions() {
    let situation: Situation
    let situationOpt = prompt(`Qual é a situação do planeta?\n1- Habitado\n2- Habitável\n3- Inabitável\n4- Inexplorado`)
    switch (situationOpt) {
        case '1': situation = 'inhabited'
            break
        case '2': situation = 'habitable'
            break
        case '3': situation = 'uninhabitable'
            break
        case '4': situation = 'unexplored'
    }

    return situation
}

function should(message: string) {
    let should = confirm(message)
    if (should) {
        return true
    }
}

function shouldExit() {
    let should = prompt('Voltar ao Menu?[S/N]')
    if (should === 'S') {
        return true
    } else {
        return false
    }
}

function verification(expression: string, regex?: RegExp) {
    if (regex) {

        if (regex.test(expression)) {
            return true
        } else {
            alert('Expressão inválida!')
            return false
        }

    } else {

        if (expression) {
            return true
        } else {
            alert('Expressão inválida!')
            return false
        }

    }
}

function goToMenu() {
    alert('Voltando ao menu...')
    menu()
}

menu()