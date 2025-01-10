type PlanetExemple = {
    name: string
    sattelites: string[]
}

interface CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: PlanetExemple[]
}

interface Planet extends CelestialBody {
    population: number
    createSattelite: (name: string) => void
}

let sun: Star

sun.name = "Sol"
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

/* Fazer o que o extends faz no interface com o type, seria algo menos legível: */

type Asteroid = CelestialBody & {
    size: number
}

/* Podemos utilizar as interfaces para moldar classes */
/* Cria-se então o que chamamos de contrato, ou seja, a classe precisa ter as propriedades da interface Planet. */

class MilkyWayPlanet implements Planet {
    mass: number;
    name: string;
    population: number;

    constructor(mass: number, name: string, population: number) {
        this.mass = mass
        this.name = name
        this.population = population
    }

    createSattelite(name: 'test') {
        //...
    }
}

/* Utilizamos bastante as interfaces ao consurmirmos APIS, já que podemos criar tipos pro retorno das APIS, assim deixando tudo mais produtivo e intuítivo. */

/* Não é possível duplicar allies mas é possível duplicar interfaces. A diferença é que ao duplicar uma interface nós não estamos reescrevendo e sim adicionando uma nova propriedade. */

/* type PlanetExemple = {
    test: string
} */ /* ERRROR */

interface Planet {
    sattelites?: string[]
}