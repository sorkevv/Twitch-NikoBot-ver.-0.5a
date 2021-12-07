const fs = require("fs")
function replacer(key,value){return value}

function sorkevv(){
  
	this.mes = ``
       this.meslvl = 1
       this.lvlup = ` + уровень`
       this.doplvl = `: получен доп. опыт`
       this.lvlup = `. Уровень повышен`
       this.un = `. Найден уникальный питомец `
       this.leg = `получает максимальный уровень и становится Легендарным питомцем`
       this.div = `получает максимальный уровень и становится Божественным питомцем` 
       this.we = `получает максимальный уровень и становится Мировым Злом`

	this.Random = function(min, max){return Math.floor(Math.random() * ((max + 1) - min)) + min}
	this.explvl = 1000
	this.r = 10000
  
  this.func1 = function(user,time,allow,name){
    
    this.T = require("../../users/twitchfile.json")
    this.P = require("../pets.json")
    
    this.user = this.T[user]
    this.time = time * 1
    this.allow = allow
    this.name = name 
        
    switch(this.user.pet){
      case this.P.sorkevv[0]:
//------------  1 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp0 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp0 >= this.user.lvl0 * this.explvl)
{
this.user.lvl0++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl0 >= 50 && this.user.petrare0 === `Легендарный`){
				this.user.lvl0 = 1
				this.user.exp0 = 0
				this.user.petrare0 = `Божественный`
				this.mes = `${this.user.name0} ${this.div}`
			}
     

if(this.user.lvl0 >= 50 && this.user.petrare0 === `Божественный`)
{ 
 	this.user.lvl0 = 100
       this.user.petrare0 = `Мировое Зло`
 	this.user.exp0 = this.user.lvl0 * this.explvl 
       this.mes = `${this.user.name0} ${this.we}`
}

   }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name0}. Редкость: ${this.user.petrare0}. Уровень: ${this.user.lvl0}. `
			if(this.user.lvl0 <50){
				this.mes += `Опыт: ${this.user.exp0}/${this.user.lvl0*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name0 = this.name
//------------------------------------------- 
        break
      case this.P.sorkevv[1]:
//------------  2 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp1 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp1 >= this.user.lvl2 * this.explvl)
{
this.user.lvl2++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl2 >= 50 && this.user.petrare1 === `Уникальный`){
				this.user.lvl2 = 1
				this.user.exp1 = 0
				this.user.petrare1 = `Легендарный`
				this.mes = `${this.user.name1} ${this.leg}`
			} 
			if(this.user.lvl2 >= 50 && this.user.petrare1 === `Легендарный`){
				this.user.lvl2 = 1
				this.user.exp1 = 0
				this.user.petrare1 = `Божественный`
				this.mes = `${this.user.name1} ${this.div}`
			}
       

if(this.user.lvl1 >= 50 && this.user.petrare1 === `Божественный`)
{ 
 	this.user.lvl1 = 100
       this.user.petrare1 = `Мировое Зло`
 	this.user.exp1 = this.user.lvl1 * this.explvl 
       this.mes = `${this.user.name1} ${this.we}`
}

 }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name1}. Редкость: ${this.user.petrare1}. Уровень: ${this.user.lvl2}. `
			if(this.user.lvl2 <50){
				this.mes += `Опыт: ${this.user.exp1}/${this.user.lvl2*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name1 = this.name
//------------------------------------------- 
        break
      case this.P.sorkevv[2]:
//------------  3 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp2 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp2 >= this.user.lvl2 * this.explvl)
{
this.user.lvl2++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl2 >= 50 && this.user.petrare2 === `Уникальный`){
				this.user.lvl2 = 1
				this.user.exp2 = 0
				this.user.petrare2 = `Легендарный`
				this.mes = `${this.user.name2} ${this.leg}`
			}
			if(this.user.lvl2 >= 50 && this.user.petrare2 === `Легендарный`){
				this.user.lvl2 = 1
				this.user.exp2 = 0
				this.user.petrare2 = `Божественный`
				this.mes = `${this.user.name2} ${this.div}`
			}
     

if(this.user.lvl2 >= 50 && this.user.petrare2 === `Божественный`)
{ 
 	this.user.lvl2 = 100
       this.user.petrare2 = `Мировое Зло`
 	this.user.exp2 = this.user.lvl2 * this.explvl 
       this.mes = `${this.user.name2} ${this.we}`
}

   }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name2}. Редкость: ${this.user.petrare2}. Уровень: ${this.user.lvl2}. `
			if(this.user.lvl2 <50){
				this.mes += `Опыт: ${this.user.exp2}/${this.user.lvl2*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name2 = this.name
//------------------------------------------- 
        break
      case this.P.sorkevv[3]:
//------------  4 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp3 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp3 >= this.user.lvl3 * this.explvl)
{
this.user.lvl3++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl3 >= 50 && this.user.petrare3 === `Уникальный`){
				this.user.lvl3 = 1
				this.user.exp3 = 0
				this.user.petrare3 = `Легендарный`
				this.mes = `${this.user.name3} ${this.leg}`
			}
			if(this.user.lvl3 >= 50 && this.user.petrare3 === `Легендарный`){
				this.user.lvl3 = 1
				this.user.exp3 = 0
				this.user.petrare3 = `Божественный`
				this.mes = `${this.user.name3} ${this.div}`
			}
      

if(this.user.lvl3 >= 50 && this.user.petrare3 === `Божественный`)
{ 
 	this.user.lvl3 = 100
       this.user.petrare3 = `Мировое Зло`
 	this.user.exp3 = this.user.lvl3 * this.explvl 
       this.mes = `${this.user.name3} ${this.we}`
}

  }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name3}. Редкость: ${this.user.petrare3}. Уровень: ${this.user.lvl3}. `
			if(this.user.lvl3 <50){
				this.mes += `Опыт: ${this.user.exp3}/${this.user.lvl3*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name3 = this.name
//------------------------------------------- 
        break
      case this.P.sorkevv[4]:
//------------  5 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp4 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp4 >= this.user.lvl4 * this.explvl)
{
this.user.lvl4++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl4 >= 50 && this.user.petrare4 === `Уникальный`){
				this.user.lvl4 = 1
				this.user.exp4 = 0
				this.user.petrare4 = `Легендарный`
				this.mes = `${this.user.name4} ${this.leg}`
			}
			if(this.user.lvl4 >= 50 && this.user.petrare4 === `Легендарный`){
				this.user.lvl4 = 1
				this.user.exp4 = 0
				this.user.petrare4 = `Божественный`
				this.mes = `${this.user.name4} ${this.div}`
			}
    

if(this.user.lvl4 >= 50 && this.user.petrare4 === `Божественный`)
{ 
 	this.user.lvl4 = 100
       this.user.petrare4 = `Мировое Зло`
 	this.user.exp4 = this.user.lvl4 * this.explvl 
       this.mes = `${this.user.name4} ${this.we}`
}

    }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name4}. Редкость: ${this.user.petrare4}. Уровень: ${this.user.lvl4}. `
			if(this.user.lvl4 <50){
				this.mes += `Опыт: ${this.user.exp4}/${this.user.lvl4*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name4 = this.name
//------------------------------------------- 
        break
      case this.P.sorkevv[5]:
//------------  6 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp5 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp5 >= this.user.lvl5 * this.explvl)
{
this.user.lvl5++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl5 >= 50 && this.user.petrare5 === `Уникальный`){
				this.user.lvl5 = 1
				this.user.exp5 = 0
				this.user.petrare5 = `Легендарный`
				this.mes = `${this.user.name5} ${this.leg}`
			} 
			if(this.user.lvl5 >= 50 && this.user.petrare5 === `Легендарный`){
				this.user.lvl5 = 1
				this.user.exp5 = 0
				this.user.petrare5 = `Божественный`
				this.mes = `${this.user.name5} ${this.div}`
			}
     

if(this.user.lvl5 >= 50 && this.user.petrare5 === `Божественный`)
{ 
 	this.user.lvl5 = 100
       this.user.petrare5 = `Мировое Зло`
 	this.user.exp5 = this.user.lvl5 * this.explvl 
       this.mes = `${this.user.name5} ${this.we}`
}

   }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name5}. Редкость: ${this.user.petrare5}. Уровень: ${this.user.lvl5}. `
			if(this.user.lvl5 <50){
				this.mes += `Опыт: ${this.user.exp5}/${this.user.lvl5*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name5 = this.name
//------------------------------------------- 
        break
      case this.P.sorkevv[6]:
//------------  7 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp6 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp6 >= this.user.lvl6 * this.explvl)
{
this.user.lvl6++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl6 >= 50 && this.user.petrare6 === `Уникальный`){
				this.user.lvl6 = 1
				this.user.exp6 = 0
				this.user.petrare6 = `Легендарный`
				this.mes = `${this.user.name6} ${this.leg}`
			} 
			if(this.user.lvl6 >= 50 && this.user.petrare6 === `Легендарный`){
				this.user.lvl6 = 1
				this.user.exp6 = 0
				this.user.petrare6 = `Божественный`
				this.mes = `${this.user.name6} ${this.div}`
			}
      

if(this.user.lvl6 >= 50 && this.user.petrare6 === `Божественный`)
{ 
 	this.user.lvl6 = 100
       this.user.petrare6 = `Мировое Зло`
 	this.user.exp6 = this.user.lvl6 * this.explvl 
       this.mes = `${this.user.name6} ${this.we}`
}
  }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name6}. Редкость: ${this.user.petrare6}. Уровень: ${this.user.lvl6}. `
			if(this.user.lvl6 <50){
				this.mes += `Опыт: ${this.user.exp6}/${this.user.lvl6*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name6 = this.name
//------------------------------------------- 
        break
      case this.P.sorkevv[7]:
//------------  8 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp7 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp7 >= this.user.lvl7 * this.explvl)
{
this.user.lvl7++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl7 >= 50 && this.user.petrare7 === `Уникальный`){
				this.user.lvl7 = 1
				this.user.exp7 = 0
				this.user.petrare7 = `Легендарный`
				this.mes = `${this.user.name7} ${this.leg}`
			}
			if(this.user.lvl7 >= 50 && this.user.petrare7 === `Легендарный`){
				this.user.lvl7 = 1
				this.user.exp7 = 0
				this.user.petrare7 = `Божественный`
				this.mes = `${this.user.name7} ${this.div}`
			}
      

if(this.user.lvl7 >= 50 && this.user.petrare7 === `Божественный`)
{ 
 	this.user.lvl7 = 100
       this.user.petrare7 = `Мировое Зло`
 	this.user.exp7 = this.user.lvl7 * this.explvl 
       this.mes = `${this.user.name7} ${this.we}`
}

  }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name7}. Редкость: ${this.user.petrare7}. Уровень: ${this.user.lvl7}. `
			if(this.user.lvl7 <50){
				this.mes += `Опыт: ${this.user.exp7}/${this.user.lvl7*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name7 = this.name
//------------------------------------------- 
        break
      case this.P.sorkevv[8]:
        break
      case this.P.sorkevv[9]:
        break
    }
    
    this.msg = this.mes
    
           fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
	  return this.msg
    
  }
  
}

module.exports = sorkevv
