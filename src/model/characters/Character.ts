import {Fighter} from "../interfaces/Fighter";
import {Weapon} from "../weapons/Weapon";
import {WeaponsList} from "../weapons/WeaponsList";


abstract class Character implements Fighter {

    private _name: string;
    private _gender: string;
    protected _life: number | undefined;
    abstract _maxAttack: number;
    private _weapon: Weapon | undefined;


    protected constructor(name: string, gender: string, weapon?: Weapon) {
        this._name = name;
        this._gender = gender;

        if (weapon) {
            this._weapon = weapon;
        } else {
            this._weapon = new Weapon(WeaponsList.NONE);
        }

    }


    get weapon(): Weapon {
        return <Weapon>this._weapon;
    }

    set weapon(value: Weapon) {
        this._weapon = value;
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
        return <number>this._life;
    }

    set life(value: number) {
        this._life = value;
    }

    summary() {
        return '\n\n' +
            '|********************************|\n' +
            '| Type ----------------- ' + this.constructor.name + ' | \n' +
            '| Name -------------------- ' + this.name + ' | \n' +
            '| Gender ------------------ ' + this.gender + ' | \n' +
            '| Health ------------------- ' + this.life + ' | \n' +
            '| Weapon ----------------- ' + this.weapon.name + ' | \n' +
            '|********************************|\n';
    }


    takeDamage(damage: number): number {

        return this.life -= damage * 0.5;
    }

    attack(weapon?: Weapon): number {
        let damage = Math.floor(Math.random() * this._maxAttack) + 1;
        return weapon ? damage + weapon.damage : damage;
    }

}

export {Character}