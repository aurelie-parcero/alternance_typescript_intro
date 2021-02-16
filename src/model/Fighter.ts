import {Enemy} from "./Enemy";
import {Character} from "./Character";

interface Fighter {

    attack: () => number

    takeDamage: (damage: number) => number

}

export { Fighter }