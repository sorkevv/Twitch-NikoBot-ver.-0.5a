const fs = require("fs")

function join(){

	function replacer(key,value){return value}

	this.func = function(user,channel){ 

		this.A = require("../users/arrays.json")

		if(this.A.ban_list.lastIndexOf(user) != -1) return

		console.log(`${user} зашел на стрим ${channel}`)

		if(this.A.sorkevv.lastIndexOf(user) === -1 && channel === "#sorkevv") this.A.sorkevv.push(user)  
		if(this.A.anya_vetochka.lastIndexOf(user) === -1 && channel === "#anya_vetochka") this.A.anya_vetochka.push(user)
		if(this.A.kosfaton.lastIndexOf(user) === -1 && channel === "#kosfaton") this.A.kosfaton.push(user)
		if(this.A.tamarix.lastIndexOf(user) === -1 && channel === "#tamarix") this.A.tamarix.push(user) 
		if(this.A.moroz_549.lastIndexOf(user) === -1 && channel === "#moroz_549") this.A.moroz_549.push(user)  

		fs.writeFileSync("./data/users/arrays.json", JSON.stringify(this.A, replacer, "\t"), (err) => {if(err) console.log(err)}) 

	}

}

module.exports = join
