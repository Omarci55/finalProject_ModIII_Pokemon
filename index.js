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

    attack( attakLearned, competitor ) {
        //if else
        //what if the pokemon doesn't have enough magic to launch the attack skill?
    }

    showStatus( ) {
        //console.log(`${this.name} has ${this.health} health and ${this.magic} magic level left.`)
    }
}

class AttackSkill {

    constructor( attack, power, magic ) {
        
        this.attack = attack
        this.power = power
        this.magic = magic
    }

} 

const pikachu = new Pokemon( "pikachu", 120, 80 )
const bulbassaur = new Pokemon( "bulbassaur", 95, 105 )

const lightning = new AttackSkill( "lightning", 40, 30 )


pikachu.learnAttackSkill( lightning )

console.log( pikachu )