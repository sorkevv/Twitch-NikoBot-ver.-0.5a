const fs = require("fs")
function replacer(key,value){return value}

function search(){

	this.func = function(user,args,channel,chat){
			
		this.T = require("../users/twitchfile.json")
			
		this.user = this.T[user]
		this.chat = chat
			
		if(this.user.adventure != 0){ 
			this.mes = `Возвращение через ${this.user.adventure} мин.`
			if(this.chat === `ls`) return this.msg = `/w ${user} ${this.mes}`
			if(this.chat === `chat`) return this.msg = `${user}, ${this.mes}`
		}

		this.user.adventure = 10
		if(args[0] >= 10 && args[0] <= 100) this.user.adventure = Math.floor(args[0])
		if(args[0] > 100) this.user.adventure = 100
		if(this.user.pet == "Пусто") this.user.adventure = 10
		this.user.time = this.user.adventure
		this.user.chat = channel

		this.mes = `Вы отправились на поиски: ${this.user.adventure} мин.`

		fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})

		if(this.chat === `ls`) return this.msg = `/w ${user} ${this.mes}`
		if(this.chat === `chat`) return this.msg = `${user}, ${this.mes}`
			
	}
	  
}

module.exports = search

