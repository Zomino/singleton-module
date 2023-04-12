class Konnichiwa {
    static instance;

    constructor() {
        this.count = 0;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Konnichiwa();
        }

        this.instance.count += 1;

        return this.instance;
    }
};

export default Konnichiwa;
