`use strict`

//
class Pokemon {

    //The constructor takes 3 param: 1st of string and 2 of number
    constructor( name, health, magic ) {
        
        //Pokemon's name
        this.name = name
        //Pokemon starts the game with X value for health...
        this.health = health
        //...and X for magic
        this.magic = magic

        //plus: a property that takes an empty array, where I'm gonna push the values of the method learnAttackSkill 
        this.attacks = []
        
    }

    //This method is gonna generate 
    learnAttackSkill(newAttack) {
        this.attacks.push( newAttack )
    } 


    attack( attackToBeUsed, competitor ) {

        //the competitor loses health
        competitor.health -= this.attacks[attackToBeUsed].power;

        this.magic -= this.attacks[attackToBeUsed].magic

        console.log(`${this.name} launched skill ${this.attacks[attackToBeUsed].skill} successfully! \n${competitor.name} got ${this.attacks[attackToBeUsed].power} of his health damage`)
    }

    //When logged to the console, this method add values to the properties
    healCenter() {
        this.health += 30
        this.magic += 20
    }

    showStatus( ) {
        console.log(`${this.name} has ${this.health} health and ${this.magic} magic level left.`)
    }
}

//This method allows to create instances of new Attacks, which are gonna be add to the array Pokemon.attacks 
class AttackSkill {

    //It takes 3 param, which are gonna interact with the Pokemon properties (the first created class)
    constructor( skill, power, magic ) {
        
        //Name of the skill
        this.skill = skill
        //How much health takes from the competitor
        this.power = power
        //how much of magic requires of himself for the attack
        this.magic = magic
    }

} 
//New instances Pokemons
//The Pokemon pikachu starts the game with 120 Health and 80 Magic...
const pikachu = new Pokemon( "pikachu", 120, 80 )
const bulbassaur = new Pokemon( "bulbassaur", 95, 105 )
const charmander = new Pokemon( "charmander", 110, 85 )

//New instances for AttackSkill
//The Lightning(z. B.) Attack takes 40 of the competitor Health, but also 30 of magic of who launches the attack
const lightning = new AttackSkill( "lightning", 40, 30 )
const poisonSeed = new AttackSkill ( "poison seed", 20, 20 )
const flamethrower = new AttackSkill( "flamethrower", 35, 25)

bulbassaur.learnAttackSkill( poisonSeed )
pikachu.learnAttackSkill( lightning )

console.log( pikachu )

console.log( pikachu.attack(0, bulbassaur ) )
console.log( bulbassaur )
console.log( pikachu )
charmander.learnAttackSkill( flamethrower )

pikachu.attack(0, bulbassaur);




