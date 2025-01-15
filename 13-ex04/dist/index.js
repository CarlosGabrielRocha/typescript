import { Book } from "./Book.js";
import { Magazine } from "./Magazine.js";
//
function showPublicSummary(object) {
    if (object instanceof Book) {
        const PublicSummary = {
            publicationYear: object.publicationYear,
            title: object.title
        };
        return PublicSummary;
    }
    else if (object instanceof Magazine) {
        const PublicSummary = {
            publicationYear: object.publicationYear,
            title: object.title
        };
        return PublicSummary;
    }
}
function showPrivateSummary(object) {
    if (object instanceof Book) {
        const PrivateSummary = {
            publicationYear: object.publicationYear,
            title: object.title,
            gender: object.gender
        };
        return PrivateSummary;
    }
    else if (object instanceof Magazine) {
        const PrivateSummary = {
            publicationYear: object.publicationYear,
            title: object.title,
            edition: object.edition
        };
        return PrivateSummary;
    }
}
function showAllDetails(object) {
    return object.getDetails();
}
const book1 = new Book('Como treinar o seu dragão', 2022, 'Cressida Cowell', 'Aventura');
const magazine1 = new Magazine('Teste', 2024, 'Teste', 'Testeeeeeeeeeeeeeeeeeee');
console.log(showAllDetails(book1));
console.log(showPublicSummary(book1));
console.log(showPrivateSummary(book1));
console.log(showPublicSummary(magazine1));
console.log(showPrivateSummary(magazine1));
