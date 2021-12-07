const fs = require("fs")

function replacer(key,value){return value}

function raid(){
	
	this.Random = function(min, max){return Math.floor(Math.random() * ((max + 1) - min)) + min}
	 
	this.func = function(raid_list){
		
		if(raid_list.length === 0) return this.msg = `SirPrise Но никто не пришел SirPrise`
		
		this.T = require("../users/twitchfile.json")
		this.msg = `Ошибка рейда`
		//========================================================================================
		this.damage = 0
		this.mindb = 0
		this.lvl_all = 0
		this.x = raid_list.length
		this.user_hp = []
		this.dead = raid_list.length
		this.divine = 0
	    this.we = 0
		this.legs = 0
	    this.unqs = 0
		this.damage_boss = 0
		this.user_win = `Пусто`
		//========================================================================================
		for(var i = 0; i < raid_list.length; i++){	
			// уровень пета	
			this.petlvl = this.T[raid_list[i]].petlvl
			// редкость пета
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
			// здоровье 1 чел
			this.user_hp[i] = this.petlvl
			// общее здоровье группы
			this.lvl_all += this.petlvl

			console.log(`Здоровье ${raid_list[i]} ${this.user_hp[i]}\n`)
		}
		//========================================================================================== 
		// Урон босса
		this.damage_boss = Math.round(raid_lvl * 
			((this.unqs * 2) + 
			(this.legs * 10) + 
			(this.divine * 15) + 
			(this.we * 40) 
			) 
		)
		// Здоровье босса
		this.boss_hp = Math.round(raid_lvl * 
			(this.x + this.lvl_all + 
			(this.unqs * 2) + 
			(this.legs * 15) + 
			(this.divine * 25) + 
			(this.we * 80) 
			) 
		)

		console.log(`Здоровье босса ${this.boss_hp}\nЗдоровье рейд-группы ${this.lvl_all}\n\n`)
		//========================================================================================== 
		while(this.dead > 0){
			for(var i = 0; i < raid_list.length; i++){	
				if(this.user_hp[i] > 0){
					this.petlvl = this.T[raid_list[i]].petlvl
					this.at1 = 0
					this.at2 = 0
					//== УРОН РЕЙД-ГРУППЫ ==============================================================
				    if(this.T[raid_list[i]].petrare === `Уникальный`){
						this.at1 = 1
						this.at2 = this.petlvl
					} 
				    if(this.T[raid_list[i]].petrare === `Легендарный`){	
						this.at1 = this.petlvl	
						this.at2 = this.at1 + this.legs 
					} 
				    if(this.T[raid_list[i]].petrare === `Божественный`){	
						this.at1 = 49 + this.petlvl
						his.at2 = this.at1 + this.petlvl 
					}
				    if(this.T[raid_list[i]].petrare === `Мировое Зло`){ 
						this.at1 = 250
						this.at2 = 300
				    }
							
					this.damage = this.Random(this.at1,this.at2)
					//== КРИТИЧЕСКИЙ УРОН ==============
					this.rand1 = this.Random(1,100)
					this.rand2 = this.Random(1,100)
					if(this.rand1 >= this.rand2 - raid_list.length && this.rand1 <= this.rand2 + raid_list.length){
						this.damage = Math.round(this.damage * (1 + (this.lvl_all / 100)) )	}
					//==================================================================================
					this.boss_hp -= this.damage
					this.mindb = Math.round(this.damage_boss * (1 - (this.x * raid_lvl / 100)) )
					if(this.mindb <= 0) this.mindb = 1 
					this.db = this.Random(this.mindb, this.damage_boss) 
					this.rand3 = this.Random(1,100)
					this.rand4 = this.Random(1,100)
					if(this.rand3 >= this.rand4 - Math.pow(raid_lvl,2) && this.rand3 <= this.rand4 + Math.pow(raid_lvl,2)){
						this.db = Math.round(this.db * (1 + (this.lvl_all / 100)) )	}
					
					console.log(`Урон босса ${this.db}\nУрон ${raid_list[i]} ${this.damage}\n\n`)

					this.user_hp[i] -= this.db
					if(this.user_hp[i] <= 0){this.dead--} 
					console.log(`dead: ${this.dead}`)
					this.user_win = raid_list[i]
						
					console.log(`Здоровье босса ${this.boss_hp}\nЗдоровье ${raid_list[i]} ${this.user_hp[i]}\n\n`)
						
					if(this.boss_hp <= 0) break
				}
					
					if(this.boss_hp <= 0) break
			}
				if(this.boss_hp <= 0) break
		}
		//==========================================================================================
		if(this.boss_hp > 0) this.msg = `SirSad Вам не удалось победить "${raid_boss}" SirSad`
		if(this.boss_hp <= 0){ 
			this.x += Math.pow(raid_lvl,raid_lvl)			
			this.msg = `SirUwU ${this.user_win} добил(а) Босса "${raid_boss}". Бонус участникам рейда ${this.x}х SirUwU`
			//========================================================================================
			for(var i = 0; i < raid_list.length; i++){
				if(this.x >= this.T[raid_list[i]].timex) this.T[raid_list[i]].timex = this.x
			}
			//========================================================================================
		}
		
		fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
		return this.msg
	
	}
	  
}

module.exports = raid

