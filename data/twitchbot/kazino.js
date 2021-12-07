function kazino(){

  this.smile = 	[	"sorkewEz", "sorkewSleep", "sorkewREEE",
					"sorkewDrink", "sorkewP",
					"sorkewDurka", "sorkewLove"
				]
  this.ruletka = []

  for(var i = 0; i < 3; i++){
    this.ruletka[i] = this.smile[Math.floor(Math.random() * this.smile.length)]
  }
  	
	if(this.ruletka[0] === this.ruletka[1] && this.ruletka[0] === this.ruletka[2] && this.ruletka[1] === this.ruletka[2]){
    this.otvet = `${this.ruletka[0]} | ${this.ruletka[1]} | ${this.ruletka[2]} . Победа`                   
  }
	else if(this.ruletka[0] != this.ruletka[1] || this.ruletka[0] != this.ruletka[2] || this.ruletka[1] != this.ruletka[2]){ 
    this.otvet = `${this.ruletka[0]} | ${this.ruletka[1]} | ${this.ruletka[2]}`  
  }                    
	
}

module.exports = kazino