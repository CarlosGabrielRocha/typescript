import { Book } from "./Book.js"
import { LivraryItem } from "./LivraryItem.js"
import { Magazine } from "./Magazine.js"

interface BookI {
    title: string
    publicationYear: number
    author: string
    gender: string
}

type BookPublicSummary = Pick<BookI, 'title' | 'publicationYear'>
type BookPrivateSummary = Omit<BookI, 'author'>

//

interface MagazineI {
    title: string
    publicationYear: number
    author: string
    edition: string
}

type MagazinePublicSummary = Pick<MagazineI, 'title' | 'publicationYear'>
type MagazinePrivateSummary = Omit<MagazineI, 'author'> 

//

function showPublicSummary(object: LivraryItem) {
    if (object instanceof Book) {
        const PublicSummary: BookPublicSummary = {
            publicationYear: object.publicationYear,
            title: object.title
        }

        return PublicSummary
    } else if (object instanceof Magazine) {
        const PublicSummary: MagazinePublicSummary = {
            publicationYear: object.publicationYear,
            title: object.title
        }

        return PublicSummary
    }
}

function showPrivateSummary(object: LivraryItem) {
    if (object instanceof Book) {
        const PrivateSummary: BookPrivateSummary = {
            publicationYear: object.publicationYear,
            title: object.title,
            gender: object.gender
        }

        return PrivateSummary
    } else if (object instanceof Magazine) {
        const PrivateSummary: MagazinePrivateSummary = {
            publicationYear: object.publicationYear,
            title: object.title,
            edition: object.edition
        }

        return PrivateSummary
    }
}

function showAllDetails(object: LivraryItem) {
    return object.getDetails()
}

const book1 = new Book('Como treinar o seu dragão', 2022, 'Cressida Cowell', 'Aventura')
const magazine1 = new Magazine('Teste', 2024, 'Teste', 'Testeeeeeeeeeeeeeeeeeee')
console.log(showAllDetails(book1))
console.log(showPublicSummary(book1))
console.log(showPrivateSummary(book1))
console.log(showPublicSummary(magazine1))
console.log(showPrivateSummary(magazine1))

