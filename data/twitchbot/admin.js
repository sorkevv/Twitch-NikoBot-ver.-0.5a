const fs = require("fs")

function admin(){

	function replacer(key,value){return value}

	this.func = function(user,args){

		this.A = require("../users/admin.json")

		if(!args[0]) return this.otvet = `"?админ чат/лс/питомец [Ник]/бан [Ник]"`

		if(args[0] == 'чат'){
			this.A[user].chat = `chat`
			this.otvet = `${user}, Сообщения выводятся в чат`
		}

		if(args[0] == 'лс'){
			this.A[user].chat = `ls`
			this.otvet = `${user}, Сообщения отправляются в личные сообщения`
		} 

		if(args[0] == 'питомец'){
			this.T = require("../users/twitchfile.json")
			if(!this.T[args[1]]) this.otvet = `${user}, Пользователя ${args[1]} нет в базе`
			this.T[args[1]].petname = true
			this.otvet = `${args[1]} теперь может изменять имя питомца`
			fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
		}

		if(args[0] == 'бан'){
			this.T = require("../users/twitchfile.json")
			this.D = require("../users/database.json")
			this.B = require("../users/ban.json")
			//==================================================================================================		
			if(!this.T[args[1]]){this.otvet = `${user}, Пользователя ${args[1]} нет в базе`} 
			//==================================================================================================
			function adverst(user_database){
				var result = false
				if(user_database != args[1]){result = true}
				return result
			}
			//==================================================================================================		
			this.T[args[1]] = undefined
			this.D.database = this.D.database.filter(adverst)
			if(this.B.ban.lastIndexOf(args[1]) === -1) this.B.ban.push(args[1])
			//==================================================================================================	
			this.otvet = `${args[1]} был(а) забанен(а)`
			//==================================================================================================
			fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
			fs.writeFileSync("./data/users/database.json", JSON.stringify(this.D, replacer, "\t"), (err) => {if(err) console.log(err)})
			fs.writeFileSync("./data/users/ban.json", JSON.stringify(this.B, replacer, "\t"), (err) => {if(err) console.log(err)})
		}

		fs.writeFileSync("./data/users/admin.json", JSON.stringify(this.A, replacer, "\t"), (err) => {if(err) console.log(err)})

		return this.otvet

	}

}

module.exports = admin

