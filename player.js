function Player(name, position, offense, defense){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}

Player.prototype.printStats = function(){
    console.log(
        " Name: " + this.name + "\n",
        "Position: " + this.position + "\n",
        "Offense: " + this.offense + "\n",
        "Defense: " + this.defense + "\n",
    )
}
Player.prototype.goodGame = function(){
    
}
Player.prototype.badGame = function(){
    
}
module.exports = Player;