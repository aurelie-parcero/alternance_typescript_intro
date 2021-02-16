import {Enemy} from "./Enemy";
import {Fighter} from "./Fighter";

class Character implements Fighter {
    private _name: string;
    private _gender: string;
    private _life: number;

    constructor(name: string, gender: string) {
        this._name = name;
        this._gender = gender;
        this._life = 100;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get life(): number {
        return this._life;
    }

    set life(value: number) {
        this._life = value;
    }

    summary() {
        return 'Name: ' + this.name + ' | ' + 'Gender: ' + this.gender + ' | ' + 'Health: ' + this.life;
    }

    attack(): number {
        //let force = Math.floor(Math.random() * 50) + 1;
        // console.log('Your strength =>  ' + force);
        // return charac.life = charac.life - force;
        return Math.floor(Math.random() * 50) + 1;
    }

    takeDamage(damage: number): number {

        return damage * 0.5;
    }

}

export {Character}