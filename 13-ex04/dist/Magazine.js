import { LivraryItem } from "./LivraryItem.js";
export class Magazine extends LivraryItem {
    _edition;
    get edition() {
        return this._edition;
    }
    set edition(value) {
        this._edition = value;
    }
    constructor(title, publicationYear, author, edition) {
        super(title, publicationYear, author);
        this.edition = edition;
    }
    getDetails() {
        return `${super.getDetails()}, ${this._edition}`;
    }
}
