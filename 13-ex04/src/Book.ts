import { LivraryItem } from "./LivraryItem.js";

export class Book extends LivraryItem {
    private _gender: string

    get gender() {
        return this._gender
    }

    set gender(value: string) {
        this._gender = value
    }

    constructor(title: string, publicationYear: number, author: string, gender: string) {
        super(title, publicationYear, author)
        this.gender = gender
    }

    public getDetails() {
       return `${super.getDetails()}, ${this._gender}`
    }
}

