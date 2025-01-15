export class LivraryItem {
    protected _title: string
    protected _publicationYear: number
    protected _author: string

    get title() {
        return this._title
    }

    set title(value: string) {
        this._title = value
    }

    get publicationYear() {
        return this._publicationYear
    }

    set publicationYear(value: number) {
        this._publicationYear = value
    }

    get author() {
        return this._author
    }

    set author(value: string) {
        this._author = value
    }

    constructor (title: string, publicationYear: number, author: string) {
        this.title = title
        this.publicationYear = publicationYear
        this.author = author
    }

    public getDetails() {
        return `Título: ${this.title}, Ano de publicação: ${this.publicationYear},
         Autor: ${this.author}`
    }
}

