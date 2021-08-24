class GuessingGame {
    constructor() {
        this.minNumber;
        this.maxNumber;
        this.middle;
    }

    setRange(min, max) {
        this.minNumber=min;
        this.maxNumber=max;
    }

    guess() {
        this.middle=Math.ceil((this.minNumber+this.maxNumber)/2)
        return this.middle
    }

    lower() {
        this.maxNumber=this.middle
    }

    greater() {
        this.minNumber=this.middle
    }
}

module.exports = GuessingGame;
