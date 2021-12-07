const fs = require("fs");

function clear(){
	
	function replacer(key,value){return value}

	this.func = function(){

		this.A = require("../users/arrays.json")

		this.A.sorkevv = []
		this.A.anya_vetochka = []
		this.A.kosfaton = []
		this.A.tamarix = []
		this.A.moroz_549 = []
		  

		fs.writeFileSync("./data/users/arrays.json", JSON.stringify(this.A, replacer, "\t"), (err) => {if(err) console.log(err)}) 
		  
	}

}

module.exports = clear
