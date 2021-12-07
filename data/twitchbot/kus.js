
function kus(user,chan){
  
	this.chan = chan
	this.ruser = this.chan[Math.floor(Math.random() * this.chan.length)]
	this.user = user.toLowerCase()
	this.nkuser = ["anya_vetochka","Maria_MiraclE"]


	if(this.user == this.ruser) return this.otvet = `${user} самокусьнулся SeemsGood`
	if(this.nkuser.indexOf(this.ruser) != -1) 
		return this.otvet = `${user} пытался(ась) укусить того, кого нельзя кусать D:`
	this.kus = [`${user} цапнул(а) ${this.ruser} Kappa`,
              `${user} промахнулся(ась) и никого не укусил(а) SeriousSloth`,
              `Вместо кусь, ${user} съедает ${this.ruser} sorkewDurka`,
              `${user} накусался(ась) и спит sorkewSleep`,
              `${this.ruser} увернулся(ась) от куся ${user} sorkewEz`,
              `${user} кусает ${this.ruser} за попу Kreygasm`,
			  `${user} сделал(а) кусь и теперь высасывает кровь из ${this.ruser} sorkewDrink`,
              `${user} не кусайся sorkewREEE`]
			  
	this.vart = this.kus[Math.floor(Math.random() * this.kus.length)]	
	
	this.otvet = this.vart
	
}

module.exports = kus
