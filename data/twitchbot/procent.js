function procent(){
  
  this.T = require("../users/twitchfile.json");

  this.Random = function(min, max){return Math.floor(Math.random() * ((max + 1) - min)) + min}
  
  this.proc = [`по моим расчетам ${this.Random(1,100)}%`,
				       `думаю что ${this.Random(1,100)}%`,
				       `приблизительно ${this.Random(1,100)}%`,
				       `в гороскопе написано что ${this.Random(1,100)}%`]
   
  this.otvet = `${this.proc[Math.floor(Math.random() * this.proc.length)]}` 
		
}

module.exports = procent

	
   