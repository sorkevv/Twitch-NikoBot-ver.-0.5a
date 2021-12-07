function raidboss(){
	
	this.func = function(raid_channel){
		
		this.Random = function(min, max){return Math.floor(Math.random() * ((max + 1) - min)) + min}
		this.boss = this.Random(0,10000)
		this.r = 1
		
		if(this.boss >= 4600 && this.boss <= 5400) this.r = 3
		if((this.boss >= 2300 && this.boss <= 3700) || (this.boss >= 6300 && this.boss <= 7700)) this.r = 2
		
		switch(raid_channel){
			case '#sorkevv':
				if(this.r === 1) this.mes = `Error`
				if(this.r === 2) this.mes = `System Error`
				if(this.r === 3) this.mes = `Fatal Error`
				break
			case '#anya_vetochka':
				if(this.r === 1) this.mes = `Сосисочка`
				if(this.r === 2) this.mes = `Злобная Сосисочка`
				if(this.r === 3) this.mes = `Сосисочка-импостер`
				break
			case '#kosfaton':
				if(this.r === 1) this.mes = `Эндер дракон`
				if(this.r === 2) this.mes = `Изумрудный Эндер дракон`
				if(this.r === 3) this.mes = `Роботизированный Эндер дракон`
				break
			case '#tamarix':
				if(this.r === 1) this.mes = `Мерседес`
				if(this.r === 2) this.mes = `Конор`
				if(this.r === 3) this.mes = `Путис Крош`
				break
			case '#moroz_549':
				if(this.r === 1) this.mes = `Sans`
				if(this.r === 2) this.mes = `Hard Mode Sans`
				if(this.r === 3) this.mes = `ULTRA SANS`
				break

		}
		
		return this.boss = this.mes
		
	}
	
	this.func1 = function(raid_channel,raid_boss){

		this.r = 1

		switch(raid_channel){
			case '#sorkevv':
				if(raid_boss === `System Error`) this.r = 2
				if(raid_boss === `Fatal Error`) this.r = 3
				break
			case '#anya_vetochka':
				if(raid_boss === `Злобная Сосисочка`) this.r = 2
				if(raid_boss === `Сосисочка-импостер`) this.r = 3
				break
			case '#kosfaton':
				if(raid_boss === `Изумрудный Эндер дракон`) this.r = 2
				if(raid_boss === `Роботизированный Эндер дракон`) this.r = 3
				break
			case '#tamarix':
				if(raid_boss === `Конор`) this.r = 2
				if(raid_boss === `Путис Крош`) this.r = 3
				break
			case '#moroz_549':
				if(raid_boss === `Hard Mode Sans`) this.r = 2
				if(raid_boss === `ULTRA SANS`) this.r = 3
				break

		}
		
		return this.lvlboss = this.r
		
	}
	
	this.func2 = function(channels){
		
		this.A = require("../users/arrays.json")
		
		this.R = []
		this.R[0] = this.A.sorkevv.length
		this.R[1] = this.A.moroz_549.length
		this.R[2] = this.A.tamarix.length
		this.R[3] = this.A.kosfaton.length
		this.R[4] = this.A.anya_vetochka.length

		this.channels = ["#sorkevv","#moroz_549","#tamarix","#kosfaton","#anya_vetochka",]
		this.channel = `Пусто`
		
		this.ch = -1
		this.raid_channels = []
		
		for(var i = 0; i < 4; i++){
			if(this.R[i] > 5) this.raid_channels.push(this.channels[i])
		}
		 
		if(this.raid_channels.length != 0){this.channel = this.raid_channels[Math.floor(Math.random() * this.raid_channels.length)]} 

		return this.channel 
		
	}
	
}

module.exports = raidboss

