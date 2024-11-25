enum Planets {
    MERCURIO, // 0
    VENUS, // 1
    TERRA, // 2
    MARTE // 3
}

Planets.TERRA // Retorna 2

enum Planets2 {
    MERCURIO = 1, // O restante receberá automaticamente um valor número seguido de 1.
    VENUS, 
    TERRA,
    MARTE
}

enum Planets3 { // Também é possível atribuir strings
    MERCURIO = 'Mercurio',
    VENUS = 'Venus',
    TERRA = 'Terra',
    MARTE = 'Marte'
}

enum Roles {
    ADMIN = 'Admin',
    USER = 'User'
}

