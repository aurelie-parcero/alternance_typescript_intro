import {Character} from "./model/Character";
import {Enemy} from "./model/Enemy";

const prompts = require('prompts');

let interval: NodeJS.Timeout;

(async () => {
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
        }];


    const createChar = await prompts(charQuestions);

    let character: Character = new Character(createChar.username, createChar.gender);
    console.log('Character created! => ' + character.summary());

    console.log('Enemy is coming !');

    let enemy = new Enemy();

    while (character.life > 0 && enemy.life > 0) {

        const willFight = await prompts({
            type: 'select',
            name: 'fightAction',
            message: 'Want to fight?',
            choices: [
                {title: 'I do!', value: 'fight'},
                {title: 'No, I\'m leaving.', value: 'retreat'},
            ]
        });

        if (willFight.fightAction === 'fight') {

            console.log('* --------------------------------*');
            console.log('Your enemy\'s health level : ' + enemy.life);
            console.log('You\'re attacking first');
            let characPower = character.attack();
            console.log('Your power => ' + characPower);
            enemy.life = enemy.life - enemy.takeDamage(characPower);


            if (enemy.life > 0) {
                console.log('Your enemy has ' + enemy.life + ' health left !');
                console.log('* --------------------------------*');
                console.log('Your enemy is now attacking !');
                console.log('Your health => ' + character.life);
                let enemyPower = enemy.attack();
                console.log('Enemy\'s power => ' + enemyPower);
                character.life = character.life - character.takeDamage(enemyPower);
                console.log('You have ' + character.life + ' health points left now!');

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

function cleanup() {
    clearInterval(interval);
}