export class LivraryItem {
    _title;
    _publicationYear;
    _author;
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get publicationYear() {
        return this._publicationYear;
    }
    set publicationYear(value) {
        this._publicationYear = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    constructor(title, publicationYear, author) {
        this.title = title;
        this.publicationYear = publicationYear;
        this.author = author;
    }
    getDetails() {
        return `Título: ${this.title}, Ano de publicação: ${this.publicationYear},
         Autor: ${this.author}`;
    }
}
