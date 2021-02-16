import {Character} from "../characters/Character";

interface Fighter {

    attack: () => number

    takeDamage: (damage: number) => number

}

export { Fighter }