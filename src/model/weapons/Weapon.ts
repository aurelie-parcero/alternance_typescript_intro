import {WeaponsList} from "./WeaponsList";

class Weapon {

    private _name: string;
    private _damage: number;

    constructor(name: WeaponsList) {
        this._name = WeaponsList[name];
        this._damage = name;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }


    get damage(): number {
        return this._damage;
    }

    set damage(value: number) {
        this._damage = value;
    }


}

export {Weapon}