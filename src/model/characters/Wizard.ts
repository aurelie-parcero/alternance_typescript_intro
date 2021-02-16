import {Character} from "./Character";
import {Weapon} from "../weapons/Weapon";

class Wizard extends Character {

    _maxAttack: number;

    constructor(name: string, gender: string, weapon?: Weapon) {
        super(name, gender, weapon);
        this._life = 120;
        this._maxAttack = 50;
    }


}

export {Wizard}