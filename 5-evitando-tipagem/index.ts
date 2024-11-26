// Propriedades opcionais

function sendSpaceship(spaceship: { pilot: string, copilot?: string}, test?: number) {
    //...
}

sendSpaceship({ pilot: 'Gabriel', copilot: 'Dayse'})

sendSpaceship({pilot: 'Gabriel', copilot: ''})

// Tipo unknown

let input: unknown

input = 'text'
input = 99
input = []

let text: string
/* text = input */ // {*ERRO*} Pois o Ts não tem certeza de qual é o valor de input, por ser unknown
input = text // Como o tipo de input é desconhecido, uma string pode ser atribuida a ele.


// Tipo any

let input2: any

input = 'text'
input = 99
input = []

let text2: string
text = input2 // O erro anterior não acontece mais, pois o ts deixa de fazer quaisquer verificação.
input = text 

// Tipo never

function verification(test) {
    if (test) {

    } else {
        let _check: never
        let test: string
        test = _check
        /* test = ''  */ // {*ERRO*}
        return test
    }
}