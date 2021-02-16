import {Character} from "./Character";
import {Fighter} from "./Fighter";

class Enemy implements Fighter {

    constructor() {
        this._life = Math.floor(Math.random() * 50) + 50;
    }


    get life(): number {
        return this._life;
    }

    set life(value: number) {
        this._life = value;
    }

    private _life: number;


    summary() {
        return 'Health: ' + this.life;
    }

    attack(): number {
        // let force = Math.floor(Math.random() * 50) + 1;
        // console.log('Enemy\'s strength =>  ' + force);
        // return charac.life = charac.life - (force * 0.5);
        return Math.floor(Math.random() * 50) + 1;
    }

    takeDamage(damage: number): number {
        return damage;
    }

}

export {Enemy}