import { LivraryItem } from "./LivraryItem.js";

export class Magazine extends LivraryItem {
    private _edition: string

    get edition() {
        return this._edition
    }

    set edition(value: string) {
        this._edition = value
    }

    constructor(title: string, publicationYear: number, author: string, edition: string) {
        super(title, publicationYear, author)
        this.edition = edition
    }

    public getDetails() {
        return `${super.getDetails()}, ${this._edition}`
    }
}


