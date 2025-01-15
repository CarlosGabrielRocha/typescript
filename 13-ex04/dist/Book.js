import { LivraryItem } from "./LivraryItem.js";
export class Book extends LivraryItem {
    _gender;
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    constructor(title, publicationYear, author, gender) {
        super(title, publicationYear, author);
        this.gender = gender;
    }
    getDetails() {
        return `${super.getDetails()}, ${this._gender}`;
    }
}
