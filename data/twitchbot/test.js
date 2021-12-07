const fs = require("fs")

function test(){

	this.func = function(){
		this.Random = function(min, max){return Math.floor(Math.random() * ((max + 1) - min)) + min}
/*
		this.luck = 0
		this.r1 = 0
		this.r2 = 0
		for(i = 0; i < 99999999; i++){
			this.r1 = this.Random(1,100000000)
			this.r2 = this.Random(1,100000000)
			if(this.r1 == this.r2) this.luck++ 
		}
		
		*/
		this.luck = 0
		this.checkChance = (chance) => Math.random() < chance / 100

		this.checkChance(0.0000002)


		return `удачных попыток ${this.luck}`

/*
function checkChance(chance) {
	const r = Math.random();
  const res = chance / 100;
  
  for (let i = 0; i < 10000; i++) {
    return r < res;
  }
}

const result = checkChance(100);
let isTrue = 0;
let isFalse = 0;

for (let i = 0; i < 1000; i++) {
	const result = checkChance(50);
  
  isTrue += result;
  isFalse += !result;
}

console.log(isTrue, isFalse);*/





	}

		//this.T = require("../users/twitchfile.json")
		
	/*	for(var i = 0; i < this.D.length; i++){
			
			this.user = this.T[this.D[i]]
		
			if(this.user.pet50 != undefined) this.user.petrare50 = `legendary`
			if(this.user.pet51 != undefined) this.user.petrare51 = `common`
			if(this.user.pet52 != undefined) this.user.petrare52 = `common`
			
		}*/
		
	    //fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, null, "\t"), (err) => {if(err) console.log(err)})
		
	 
}

module.exports = test