`use strict`

class Pokemon {

    constructor( name, health, magic ) {
        this.name = name
        this.health = health
        this.magic = magic

        this.attacks = []
        
    }

    learnAttackSkill(newAttack) {
        this.attacks.push( newAttack )
    } 

    attack( attackToBeUsed, competitor ) {
        // reduce ???
        console.log(`${this.name} launched skill ${this.attacks[attackToBeUsed].skills} successfully`)
        console.log(`${competitor.name} got ${competitor.health} damage`)
    }

    healCenter() {
        this.health += 50
        this.magic += 50
    }

    showStatus( ) {
        //console.log(`${this.name} has ${this.health} health and ${this.magic} magic level left.`)
    }
}

class AttackSkill {

    constructor( skills, power, magic ) {
        
        this.skills = skills
        this.power = power
        this.magic = magic
    }

} 
//New Pokemons
const pikachu = new Pokemon( "pikachu", 120, 80 )
const bulbassaur = new Pokemon( "bulbassaur", 95, 105 )
const charmander = new Pokemon( "charmander", 110, 85 )

//New Attacks
const lightning = new AttackSkill( "lightning", 40, 30 )
const poisonSeed = new AttackSkill ( "poison seed", 20, 20 )
const flamethrower = new AttackSkill( "flamethrower", 35, 25)

bulbassaur.learnAttackSkill( poisonSeed )
pikachu.learnAttackSkill( lightning )
pikachu.learnAttackSkill( poisonSeed )
charmander.learnAttackSkill( flamethrower )

pikachu.attack(1, bulbassaur);

//pikachu.healCenter()

//console.log( pikachu )
//console.log( bulbassaur )


