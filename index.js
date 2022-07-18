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

    attack( attackToBeUsed, opponent ) {
        
            opponent.health -= this.attacks[attackToBeUsed].power;

            console.log(opponent.health)
            this.magic -= this.attacks[attackToBeUsed].magic;

        console.log(`---- POKEMON ATTACK \n${this.name} launched skill ${this.attacks[attackToBeUsed].skill} successfully! \n${opponent.name} got ${this.attacks[attackToBeUsed].power} of his health damage`)
       
    }

    //When logged to the console, this method add values to the properties
    getMagic() {
        //this.health += 30
        this.magic += 20
    }

    showStatus( ) {
        
        if ( this.name === "pikachu" && this.health < 30 ||
            this.name === "bulbassaur" && this.health < 20 ||
            this.name === "charmander" && this.health < 25) {

            console.log( `${this.name} has not enough magic, cannot launch attack!` )

        } else {

            console.log( `---- STATUS ${this.name} \nHealth:${this.health} \nMagic: ${this.magic} ` )

        }
        
    }
}


//This method allows to create instances of new Attacks, which are gonna be add to the array Pokemon.attacks 
class AttackSkill {

    //It takes 3 param, which are gonna interact with the Pokemon properties (the first created class)
    constructor( skill, power, magic ) {
        
        this.skill = skill
        this.power = power
        this.magic = magic
    }

} 

//New instances Pokemons
//The Pokemon pikachu starts the game with 120 Health and 80 Magic...
const pikachu = new Pokemon( "pikachu", 120, 80 )
const bulbassaur = new Pokemon( "bulbassaur", 95, 105 )
const charmander = new Pokemon( "charmander", 110, 85 )

//New instances for AttackSkill
//The Lightning(z. B.) Attack takes 40 of the opponent Health, but also 30 of magic of who launches the attack
const lightning = new AttackSkill( "lightning", 40, 30 )
const poisonSeed = new AttackSkill ( "poison seed", 20, 20 )
const flamethrower = new AttackSkill( "flamethrower", 35, 25)


pikachu.learnAttackSkill( lightning )
console.log( pikachu )

bulbassaur.learnAttackSkill( poisonSeed )
console.log( bulbassaur )

charmander.learnAttackSkill( flamethrower )
console.log( charmander )

pikachu.attack( 0, bulbassaur )

/* pikachu.showStatus()
pikachu.attack(0, bulbassaur ) 
pikachu.learnAttackSkill( lightning )
console.log( bulbassaur.attack(0, pikachu ) )
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu); */






