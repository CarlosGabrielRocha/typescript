/* function first(array) {
    return array[0]
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
    return array[array.length - 1]
}

const pilots = [1, 2, 3, 4] // ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']

const firstPilot = first(pilots)
const lastPilot = last(pilots)
 */

interface Ship {
    name: string
    pilot: string
}

interface Fighter extends Ship {
    weapons: number
    shields: number
}

interface Transport extends Ship {
    capacity: number
}

interface Speeder extends Ship {
    speed: number
    acceleration: number
}

// Se deixássemos sem o tipo Ship desativaríamos
// totalmente o typescript para esse argumento
/* Ao utilizarmos um tipo genérico como argumento, o TS não consegue saber que o
argumento ShipType possui as propriedades name e pilot por isso precisamos explicitar isso, já 
que o shipType pode ser literalmente qualquer coisa. */
//Então vamos dizer que a nave precisa de no mínimo um nome e um piloto para ser válida.

function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
}


const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
}

const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
}

// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship já que o TS se confunde enquanto a isso.
// Por isso é interessante o uso dos Generics.
const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(xWing, 'Black One', 'Poe')

interface EnemyShip {
    name: string
    pilot: string
    flag?: string // A propriedade é opcional para evitar erros
}

// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo EnemyShip atribuido corretamente
const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')

// Aqui temos um erro por conta do tipo Ship
/* enemyCopy.flag = 'Imperial' */
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial'

// CLASSES

// Segue a mesma implementação das funções
// e o mesmo valeria para as interfaces

type Weapons = 'foguete' | 'lazer'

class Pilot <ShipType, WeaponsType> {
    name: string
    ship: ShipType
    weapons: WeaponsType
  
    constructor(name: string, ship: ShipType, weapons: WeaponsType) {
      this.name = name
      this.ship = ship
      this.weapons = weapons
    }
  }
  
const han = new Pilot('Han Solo', falcon, 'foguete')
const luke = new Pilot<Fighter, Weapons>('Luke Skywalker', xWing, 'lazer')
luke.ship
luke.weapons

// Interfaces

interface Container<T> {
    value: T;
    description: string;
  }
  
  const stringContainer: Container<string> = {
    value: 'A string value',
    description: 'This is a string container',
  };
  
  const numberContainer: Container<number> = {
    value: 42,
    description: 'This is a number container',
  };