import { Store } from "almin";

export class CounterState {
    constructor({ count, historyCount }) {
        this.count = count;
        this.historyCount = historyCount;
    }

    reduce(payload) {
        switch (payload.type) {
            case "Increment":
                return new CounterState(Object.assign({}, this, {
                    historyCount: this.historyCount.concat(this.count),
                    count: this.count + 1
                }));
            case "Decrement":
                return new CounterState(Object.assign({}, this, {
                    historyCount: this.historyCount.concat(this.count),
                    count: this.count - 1
                }));
            default:
                return this;
        }
    }
}

export class CounterStore extends Store {
    constructor() {
        super();
        this.state = new CounterState({
            count: 0,
            historyCount: []
        });
    }

    receivePayload(payload) {
        this.setState(this.state.reduce(payload));
    }

    getState() {
        return this.state;
    }
}