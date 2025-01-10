let sun;
sun.name = "Sol";
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.603 * (10 ** 9);
sun.planets = [];
/* Podemos utilizar as interfaces para moldar classes */
/* Cria-se então o que chamamos de contrato, ou seja, a classe precisa ter as propriedades da interface Planet. */
class MilkyWayPlanet {
    mass;
    name;
    population;
    constructor(mass, name, population) {
        this.mass = mass;
        this.name = name;
        this.population = population;
    }
    createSattelite(name) {
        //...
    }
}
