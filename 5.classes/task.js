class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }

    set state(FixState) {
        if (FixState < 0) {
            this._State = 0;
        }
        else if (FixState > 100) {
            this._State = 100;
        }
        else {
            this._State = FixState;
        }
    }
    get state() {
        return this._State;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = author;
        this.type = "book";
    }
}

class NoveBook extends book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "detective";
    }
}