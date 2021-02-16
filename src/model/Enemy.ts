import {Fighter} from "./interfaces/Fighter";

class Enemy implements Fighter {

    private _life: number;

    constructor() {
        this._life = Math.floor(Math.random() * 50) + 50;
    }

    get life(): number {
        return this._life;
    }

    set life(value: number) {
        this._life = value;
    }

    summary() {
        return 'Health: ' + this.life;
    }

    attack(): number {
        return Math.floor(Math.random() * 50) + 1;
    }

    takeDamage(damage: number): number {
        return this.life -= damage;
    }

}

export {Enemy}