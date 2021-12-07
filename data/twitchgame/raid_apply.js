const fs = require("fs")
function replacer(key,value){return value}

function raid_apply(){

	this.func = function(user,chat,raid_list,raid_lvl){

	this.T = require("../users/twitchfile.json")
	this.raid_pets = require("../twitchgame/raid_pets.js")
	this.DP = new this.raid_pets()
	//==========================================================================================
	this.user = this.T[user]
	this.chat = chat
	//==========================================================================================
	this.user.petlvl = this.DP.func(user,"lvl")	
	this.user.petrare = this.DP.func(user,"rare")
	//==========================================================================================
	this.we = 0
	this.divine = 0
	this.legs = 0
	this.unqs = 0
	this.lvl_all = 0
	this.x = 0
	for(var i = 0; i < raid_list.length; i++){
		this.x++
		this.petlvl = this.T[raid_list[i]].petlvl 
		if(this.T[raid_list[i]].petrare === `Мировое Зло`){this.we++}
		if(this.T[raid_list[i]].petrare === `Божественный`){
			this.divine++
			this.petlvl += 50
		}
		if(this.T[raid_list[i]].petrare === `Легендарный`){
			this.legs++
			this.petlvl += 25 
		}
		if(this.T[raid_list[i]].petrare === `Уникальный`){this.unqs++}		
		this.lvl_all += this.petlvl
	}
	// здоровье босса
	this.boss_hp = Math.round(raid_lvl * 
		(this.x + this.lvl_all + 
		(this.unqs * 2) + 
		(this.legs * 15) + 
		(this.divine * 25) + 
		(this.we * 80) 
		) 
	)	

	fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})

	return this.msg = `${user} вступил(а) в рейд-группу SirShield SirMad SirSword `+
		`Здоровье: рейд-группы(${this.x}) ${this.lvl_all} | босса ${this.boss_hp}`

	}

}

module.exports = raid_apply

