import { Counter } from "./counter";

export class CounterDown {
    private list: Counter[] = []
    constructor() {

    }
    public reboot() {
        this.list = [];
        this.list.push({ begin: 15 });
    }
    public decrease() {
        this.list[0].begin = Number(this.list[0].begin) - 1;
    }
    public result() {
        return this.list[0].begin;
    }
    public restart() {
        this.list = [];
    }
}