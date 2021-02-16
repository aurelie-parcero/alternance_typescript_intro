import {Enemy} from "./model/Enemy";
import {WeaponsList} from "./model/weapons/WeaponsList";
import {Wizard} from "./model/characters/Wizard";
import {Warrior} from "./model/characters/Warrior";
import {Weapon} from "./model/weapons/Weapon";

const prompts = require('prompts');

// let interval: NodeJS.Timeout;


const charQuestions = [{
    type: 'text',
    name: 'username',
    message: 'What\'s your name?',
    validate: (username: string | any[]) => username.length < 1 ? `Please enter a valid name` : true
},
    {
        type: 'select',
        name: 'gender',
        message: 'Male or female?',
        choices: [
            {title: 'Male', value: 'male'},
            {title: 'Female', value: 'female'},
        ]
    },
    {
        type: 'select',
        name: 'character',
        message: 'Are you a warrior or a wizard?',
        choices: [
            {title: 'Warrior', value: Warrior},
            {title: 'Wizard', value: Wizard},
        ]
    },
    {
        type: 'select',
        name: 'weapon',
        message: 'Will you use a weapon?',
        choices: [
            {title: 'Yes please!', value: 1},
            {title: 'I don\'t need a weapon, I can kill with my bare hands!', value: 0},
        ]
    }


];

const weaponChoice = {
    type: 'select',
    name: 'weapon',
    message: 'Choose your weapon',
    choices: [
        {title: 'Sword', value: WeaponsList.SWORD},
        {title: 'Spell', value: WeaponsList.SPELL},
        {title: 'Thunderbolt', value: WeaponsList.THUNDERBOLT},
        {title: 'I don\'t need a weapon, I can kill with my bare hands!', value: null},
    ]
}

const fight = {
    type: 'select',
    name: 'fightAction',
    message: 'Want to fight?',
    choices: [
        {title: 'I do!', value: 'fight'},
        {title: 'No, I\'m leaving.', value: 'retreat'},
    ]
};


// Let's play the game!

(async () => {

    const createChar = await prompts(charQuestions);
    let character = new createChar.character(createChar.username, createChar.gender);

    if (createChar.weapon === 1) {
        const chooseWeapon = await prompts(weaponChoice);
        character.weapon = new Weapon(chooseWeapon.weapon);
    }

    console.log(character.constructor.name + ' created! => ' + character.summary());

    console.log('Enemy is coming !');

    let enemy = new Enemy();

    while (character.life > 0 && enemy.life > 0) {

        const willFight = await prompts(fight);

        if (willFight.fightAction === 'fight') {

            console.log('* --------------------------------*');
            console.log('Your enemy\'s health level : ' + enemy.life);
            console.log(' -- You\'re attacking first -- ');

            let characPower = character.attack(character.weapon);
            console.log('Your attack power is ' + characPower + ' point(s)');
            let healthLeft = enemy.takeDamage(characPower);

            if (enemy.life > 0) {

                console.log('Your enemy has ' + healthLeft + ' health points left.');
                console.log('* --------------------------------*');
                console.log('Your enemy is now attacking !');
                console.log('Your health => ' + character.life);
                let enemyPower = enemy.attack();
                console.log('Enemy\'s power => ' + enemyPower);
                console.log('You have ' + character.takeDamage(enemyPower) + ' health points left');

            } else {
                console.log('Your enemy is dead !');
                console.log('You win the fight !');
                console.log('* --------------------------------*');

            }
        } else {
            console.log('Coward...');
            break;
        }
    }

    if (character.life <= 0) {
        console.log('You\'re dead!!');
    }


    console.log('* ----------------------------------------- *');
    console.log('Thanks for playing! Bye!');
    console.log('* ----------------------------------------- *');

})();

// function cleanup() {
//     clearInterval(interval);
// }