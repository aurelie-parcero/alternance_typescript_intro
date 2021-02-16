import {Character} from "./Character";
import {Weapon} from "../weapons/Weapon";

class Warrior extends Character {

    _maxAttack: number;

    constructor(name: string, gender: string, weapon?: Weapon) {
        super(name, gender, weapon);
        this._life = 100;
        this._maxAttack = 80;
    }

}

export {Warrior}