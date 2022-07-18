`use strict`


//
class Pokemon {
    
    //The constructor takes 3 param: 1st of string and 2 of number
    constructor( name, health, magic ) {
         
        this.name = name
        this.health = health
        this.magic = magic

        // a property that takes an empty array, where I'm gonna push the values of the method learnAttackSkill 
        this.attacks = []
        
    }

    learnAttackSkill(newAttack) {
        this.attacks.push( newAttack )
    } 

    //
    attack( attackToBeUsed, opponent ) {
                
        //check if the attacker has still magic to attack! (not sure about this!)
         if ( this.magic < this.attacks[attackToBeUsed].magic ){

            console.log( this.showStatus() )

        //proceed with the attack
        //It should subt health from the opponent and magic from the attacker
        } else {

            opponent.health -= this.attacks[attackToBeUsed].power;
            this.magic -= this.attacks[attackToBeUsed].magic;

            console.log(`\n---- POKEMON ATTACK`)
            console.log(`${this.name} launched skill "${this.attacks[attackToBeUsed].skill}" successfully!`)
            console.log(`${opponent.name} got ${this.attacks[attackToBeUsed].power} of his health damage.  \nHealth left: ${opponent.health}`)
        
            //if after the attack, hte opponent health is 0, the opponent is killed
            if( opponent.health < 1 ) {
                
                console.log(`\n---- POKEMON ATTACK`)
                console.log(`Game over for ${opponent.name} `)
            
            }
        }
    }

    //When logged to the console, this method add values to the magic property
    getMagic() {
        //this.health += 30
        this.magic += 20
        console.log(`\n---- Magic gained`) 
        console.log(`${this.name} got 20 magic back!`)
    }

    showStatus( ) {
        
        //Each attack requires a different level of magic of each pokemon
        if ( this.name === "pikachu" && this.magic < 30 ||
            this.name === "bulbassaur" && this.magic < 20 ||
            this.name === "charmander" && this.magic < 35) {

            console.log( `\n---- STATUS`) 
            console.log(`${this.name} has not enough magic, cannot launch attack!` )

        } else {

            console.log( `\n---- STATUS ${this.name}`) 
            console.log(`Health: ${this.health}`)
            console.log(`Magic: ${this.magic}`)

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


console.clear()
pikachu.learnAttackSkill( lightning )
console.log( pikachu )
console.log()
bulbassaur.learnAttackSkill( poisonSeed )
console.log( bulbassaur )
console.log()
charmander.learnAttackSkill( flamethrower )
console.log( charmander )

/* 
console.clear
console.log(`\n-----------New round!---------`)
pikachu.attack( 0, bulbassaur )
//---- POKEMON ATTACK 
//pikachu launched skill lightning successfully! 
//bulbassaur got 40 of his health damage 
*/

////////////////////////
/* 
console.clear()
console.log(`\n-----------New round!---------`)
bulbassaur.attack(0, pikachu)
// ---- POKEMON ATTACK 
// bulbassaur launched skill "poison seed" successfully! 
// pikachu got 20 of his health damage

pikachu.showStatus()
// ---- STATUS pikachu 
// Health:100 
// Magic: 50 

bulbassaur.showStatus()
//---- STATUS bulbassaur 
// Health:55 
// Magic: 85  
*/

////////////////////////
/* 
console.clear()
console.log(`\n-----------New round!---------`)
pikachu.attack(0, bulbassaur)
// ---- POKEMON ATTACK 
// pikachu launched skill "lightning" successfully! 
// bulbassaur got 40 of his health damage

pikachu.showStatus()
// ---- STATUS 
// pikachu has not enough magic, cannot launch attack!

pikachu.getMagic()

pikachu.showStatus()
// ---- STATUS pikachu 
// Health:100 
// Magic: 40  
*/

////////////////////////
/* 
console.clear()
console.log(`\n-----------New round!---------`)
bulbassaur.attack( 0, charmander )
// ---- POKEMON ATTACK
// bulbassaur launched skill "poison seed" successfully!
// charmander got 20 of his health damage.  
// Health left: 65 
*/

////////////////////////
/* 
console.clear()
console.log(`\n-----------New round!---------`)
bulbassaur.attack(0, pikachu)
// ---- POKEMON ATTACK 
// bulbassaur launched skill "poison seed" successfully! 
// pikachu got 20 of his health damage 
*/

////////////////////////
/* 
console.clear()
console.log(`\n-----------New round!---------`)
bulbassaur.attack( 0, pikachu ) 
*/

////////////////////////
/*
console.clear()
console.log(`\n-----------New round!---------`)
pikachu.attack( 0, charmander )
pikachu.getMagic() 
*/

////////////////////////
/* 
console.clear()
console.log(`\n-----------New round!---------`)
pikachu.attack( 0, charmander ) 
*/










