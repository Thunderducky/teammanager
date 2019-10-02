var inquirer = require("inquirer");
var Player = require("./player.js");

let playerCount = 0;
let teamSize = 3;
let starterSize = 2;
let subSize = 1;
var starters = [];
var subs = [];

function isValidStat(value){
    if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) < 11){
        return true;
    } else {
        return false;
    }
}

function createPlayer(){
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Player name: "
    }, {
        type: "input",
        name: "position",
        message: "Player position: "
    }, {
        type: "input",
        name: "offense",
        message: "Player offense: ",
        validate: isValidStat
    }, {
        type: "input",
        name: "defense",
        message: "Player defense: ",
        validate: isValidStat
    }]).then(function(response){
        var player = new Player(response.name, response.position, parseInt(response.offense), parseInt(response.defense));
        if(starters.length < starterSize){
            starters.push(player);
        } else {
            subs.push(player)
        }
        playerCount++;
        if(playerCount < teamSize){
            createPlayer();
        } else {
            console.log(starters, subs);
            playGame(starters, subs);
        }
    })
}

createPlayer();