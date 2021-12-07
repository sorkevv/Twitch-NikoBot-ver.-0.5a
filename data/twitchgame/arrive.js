const fs = require("fs")
function replacer(key,value){return value}

function arrive(){

	this.isNumeric = function(forwrite){return !isNaN(parseFloat(forwrite)) && isFinite(forwrite)}
	this.Random = function(min, max){return Math.floor(Math.random() * ((max + 1) - min)) + min}
	this.explvl = 100

	this.func = function(user){

		this.T = require("../users/twitchfile.json")	
		this.pets = require("../twitchgame/pets.js")
		this.P = new this.pets()

		if(this.T[user].timex === undefined){this.T[user].timex = 1} 

		this.user = this.T[user]
		this.msg = `Вы вернулись. `
		this.allow = `Опыт`

		this.rand1 = this.Random(1,this.explvl)
		this.rand2 = this.Random(1,this.explvl)
		//==========================================================================================
		this.time = Math.round(this.user.time * this.user.timex)
		if(this.user.timex != 1){this.user.timex = 1} 
		this.chat = this.user.chat

		// накопление опыта
		if(this.user.pet != "Пусто"){this.msg += this.P.func1(user,this.time,this.allow,0)}
		// первый поиск
		if(this.user.pet == "Пусто") this.rand2 = this.rand1
		// рандом на питомца
		if(this.rand1 <= this.rand2 + this.time && this.rand1 >= this.rand2 - this.time){this.msg += this.P.func(user,this.time,this.chat)}

		this.user.time = undefined
		this.user.chat = undefined

		fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
		return this.msg

	}

}

module.exports = arrive

