/* // Tipo literal
let literal: "Hello"
let pi: 3.14159

literal = 'Hello'
//literal = 'h1'  [ERROR]

const test = 5 // Por padrão, toda const é considerada um literal pois seu valor não pode ser reatribuído.
const test1: number = 1


// Union Types | (tipos união)
let option: "Yes" | "No" | "Maybe"
option = "Yes"

let option2: number | boolean
option2 = 1
option2 = true

let planet1: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

// Alias (Criando e reutilizando tipos)

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão" //  Não é obrigatório que a primeira letra do tipo seja maiúcula, planet ou Planet. No entendo, existe uma convenção amplamente adotada na comunidade de TypeScript e JavaScript que sugere que tipos e interfaces comecem com letra maiúscula.

let homePlanet: Planet

function checkPlanet(planet: Planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra.")
    }
}

// Também conseguimos criar Alias para tipos de função

type GreetingCallback = (name: string) => void
 
function greet(callbackfn: GreetingCallback) {
    const name = 'Gabriel'
    callbackfn(name)
} */ 
