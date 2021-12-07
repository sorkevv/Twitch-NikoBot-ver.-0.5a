const fs = require("fs")
function replacer(key,value){return value}

function moroz_549(){

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

  this.func = function(user,time){
    
    this.T = require("../../users/twitchfile.json")
    this.P = require("../pets.json")

    this.user = this.T[user]
    this.time = time * 1
    
    this.randompet = this.P.moroz_549[Math.floor(Math.random() * this.P.moroz_549.length)]
    if(this.user.pet === "Пусто" && this.randompet != this.P.moroz_549[0]) this.user.pet = this.randompet
    
    this.rand1 = this.Random(1,this.r)
    this.rand2 = this.Random(1,this.r)
    if(this.rand1 >= this.rand2 - this.time && this.rand1 <= this.rand2 + this.time){
//------------  1 питомец  ------------------   
      if(this.user.pet20 === undefined){
        if(this.user.pet === "Пусто") this.user.pet = this.P.moroz_549[0]
        this.user.pet20 = this.P.moroz_549[0]
        this.user.name20 = this.P.moroz_549[0]
        this.user.lvl20 = 1
        this.user.exp20 = 0     
		this.user.petrare20 = `Легендарный` 
        this.mes = `. Найден легендарный питомец "${this.P.moroz_549[0]}"`
      }
      else if(this.user.pet20 != undefined && this.user.lvl20 <= 50){
        this.user.exp20 += this.time + (this.time * this.user.lvl20)
        this.mes = `. Найден легендарный питомец "${this.P.moroz_549[0]}"${this.doplvl}`


while(this.user.exp20 >= this.user.lvl20 * this.explvl)
{
this.user.lvl20++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl20 >= 50 && this.user.petrare20 === `Легендарный`){
				this.user.lvl20 = 1
				this.user.exp20 = 0
				this.user.petrare20 = `Божественный`
				this.mes = `${this.user.name20} ${this.div}`
			}
     
if(this.user.lvl20 >= 50 && this.user.petrare20 === `Божественный`)
{ 
 	this.user.lvl20 = 100
       this.user.petrare20 = `Мировое Зло`
 	this.user.exp20 = this.user.lvl20 * this.explvl 
       this.mes = `${this.user.name20} ${this.we}`
}

 }
//------------------------------------------   
    }
    else switch(this.randompet){
      case this.P.moroz_549[1]:
//------------  2 питомец  ------------------         
        if(this.user.pet21 === undefined){
          this.user.pet21 = this.P.moroz_549[1]
          this.user.name21 = this.P.moroz_549[1]
          this.user.lvl21 = 1
          this.user.exp21 = 0     
		  this.user.petrare21 = `Уникальный`
          this.mes = `${this.un}"${this.P.moroz_549[1]}"`
        }
        else if(this.user.pet21 != undefined && this.user.lvl21 <= 50){
          this.user.exp21 += this.time + (this.time * this.user.lvl21)
          this.mes = `${this.un}"${this.P.moroz_549[1]}"${this.doplvl}`


while(this.user.exp21 >= this.user.lvl21 * this.explvl)
{
this.user.lvl21++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl21 >= 50 && this.user.petrare21 === `Уникальный`){
				this.user.lvl21 = 1
				this.user.exp21 = 0
				this.user.petrare21 = `Легендарный`
				this.mes = `${this.user.name21} ${this.leg}`
			}
			if(this.user.lvl21 >= 50 && this.user.petrare21 === `Легендарный`){
				this.user.lvl21 = 1
				this.user.exp21 = 0
				this.user.petrare21 = `Божественный`
				this.mes = `${this.user.name21} ${this.div}`
			}
       


if(this.user.lvl21 >= 50 && this.user.petrare21 === `Божественный`)
{ 
 	this.user.lvl21 = 100
       this.user.petrare21 = `Мировое Зло`
 	this.user.exp21 = this.user.lvl21 * this.explvl 
       this.mes = `${this.user.name21} ${this.we}`
}

 } 
//------------------------------------------ 
        break
      case this.P.moroz_549[2]:
//------------  3 питомец  ------------------         
        if(this.user.pet22 === undefined){
          this.user.pet22 = this.P.moroz_549[2]
          this.user.name22 = this.P.moroz_549[2]
          this.user.lvl22 = 1
          this.user.exp22 = 0        
		  this.user.petrare22 = `Уникальный`
          this.mes = `${this.un}"${this.P.moroz_549[2]}"`
        }
        else if(this.user.pet22 != undefined && this.user.lvl22 <= 50){
          this.user.exp22 += this.time + (this.time * this.user.lvl22)
          this.mes = `${this.un}"${this.P.moroz_549[2]}"${this.doplvl}`


while(this.user.exp22 >= this.user.lvl22 * this.explvl)
{
this.user.lvl22++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl22 >= 50 && this.user.petrare22 === `Уникальный`){
				this.user.lvl22 = 1
				this.user.exp22 = 0
				this.user.petrare22 = `Легендарный`
				this.mes = `${this.user.name22} ${this.leg}`
			}
			if(this.user.lvl22 >= 50 && this.user.petrare22 === `Легендарный`){
				this.user.lvl22 = 1
				this.user.exp22 = 0
				this.user.petrare22 = `Божественный`
				this.mes = `${this.user.name22} ${this.div}`
			}
       
if(this.user.lvl22 >= 50 && this.user.petrare22 === `Божественный`)
{ 
 	this.user.lvl22 = 100
       this.user.petrare22 = `Мировое Зло`
 	this.user.exp22 = this.user.lvl22 * this.explvl 
       this.mes = `${this.user.name22} ${this.we}`
}

 } 
//------------------------------------------ 
        break
      case this.P.moroz_549[3]:
//------------  4 питомец  ------------------         
        if(this.user.pet23 === undefined){
          this.user.pet23 = this.P.moroz_549[3]
          this.user.name23 = this.P.moroz_549[3]
          this.user.lvl23 = 1
          this.user.exp23 = 0       
		  this.user.petrare23 = `Уникальный`
          this.mes = `${this.un}"${this.P.moroz_549[3]}"`
        }
        else if(this.user.pet23 != undefined && this.user.lvl23 <= 50){
          this.user.exp23 += this.time + (this.time * this.user.lvl23)
          this.mes = `${this.un}"${this.P.moroz_549[3]}"${this.doplvl}`


while(this.user.exp23 >= this.user.lvl23 * this.explvl)
{
this.user.lvl23++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl23 >= 50 && this.user.petrare23 === `Уникальный`){
				this.user.lvl23 = 1
				this.user.exp23 = 0
				this.user.petrare23 = `Легендарный`
				this.mes = `${this.user.name23} ${this.leg}`
			}
			if(this.user.lvl23 >= 50 && this.user.petrare23 === `Легендарный`){
				this.user.lvl23 = 1
				this.user.exp23 = 0
				this.user.petrare23 = `Божественный`
				this.mes = `${this.user.name23} ${this.div}`
			}
       
if(this.user.lvl23 >= 50 && this.user.petrare23 === `Божественный`)
{ 
 	this.user.lvl23 = 100
       this.user.petrare23 = `Мировое Зло`
 	this.user.exp23 = this.user.lvl23 * this.explvl 
       this.mes = `${this.user.name23} ${this.we}`
}

 } 
//------------------------------------------        
        break
      case this.P.moroz_549[4]:   
//------------  5 питомец  ------------------         
        if(this.user.pet24 === undefined){
          this.user.pet24 = this.P.moroz_549[4]
          this.user.name24 = this.P.moroz_549[4]
          this.user.lvl24 = 1
          this.user.exp24 = 0      
		  this.user.petrare24 = `Уникальный`
          this.mes = `${this.un}"${this.P.moroz_549[4]}"`
        }
        else if(this.user.pet24 != undefined && this.user.lvl24 <= 50){
          this.user.exp24 += this.time + (this.time * this.user.lvl24)
          this.mes = `${this.un}"${this.P.moroz_549[4]}"${this.doplvl}`


while(this.user.exp24 >= this.user.lvl24 * this.explvl)
{
this.user.lvl24++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl24 >= 50 && this.user.petrare24 === `Уникальный`){
				this.user.lvl24 = 1
				this.user.exp24 = 0
				this.user.petrare24 = `Легендарный`
				this.mes = `${this.user.name24} ${this.leg}`
			}
			if(this.user.lvl24 >= 50 && this.user.petrare24 === `Легендарный`){
				this.user.lvl24 = 1
				this.user.exp24 = 0
				this.user.petrare24 = `Божественный`
				this.mes = `${this.user.name24} ${this.div}`
			}
       
if(this.user.petrare24 === `Божественный` && this.user.lvl24 >= 50 && this.user.lvl24 < 100  && this.user.exp24 >= this.user.lvl24 * this.explvl)
{ 
       this.user.lvl24 = 100
       this.user.exp24 = this.user.lvl24 * this.explvl 
}

 } 
//------------------------------------------     
        break
      case this.P.moroz_549[5]:
	  //------------  6 питомец  ------------------         
        if(this.user.pet25 === undefined){
          this.user.pet25 = this.P.moroz_549[5]
          this.user.name25 = this.P.moroz_549[5]
          this.user.lvl25 = 1
          this.user.exp25 = 0     
		  this.user.petrare25 = `Уникальный`
          this.mes = `${this.un}"${this.P.moroz_549[5]}"`
        }
        else if(this.user.pet25 != undefined && this.user.lvl25 <= 50){
          this.user.exp25 += this.time + (this.time * this.user.lvl25)
          this.mes = `${this.un}"${this.P.moroz_549[5]}"${this.doplvl}`


while(this.user.exp25 >= this.user.lvl25 * this.explvl)
{
this.user.lvl25++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl25 >= 50 && this.user.petrare25 === `Уникальный`){
				this.user.lvl25 = 1
				this.user.exp25 = 0
				this.user.petrare25 = `Легендарный`
				this.mes = `${this.user.name25} ${this.leg}`
			}
			if(this.user.lvl25 >= 50 && this.user.petrare25 === `Легендарный`){
				this.user.lvl25 = 1
				this.user.exp25 = 0
				this.user.petrare25 = `Божественный`
				this.mes = `${this.user.name25} ${this.div}`
			}
     
if(this.user.lvl25 >= 50 && this.user.petrare25 === `Божественный`)
{ 
 	this.user.lvl25 = 100
       this.user.petrare25 = `Мировое Зло`
 	this.user.exp25 = this.user.lvl25 * this.explvl 
       this.mes = `${this.user.name25} ${this.we}`
}

   } 
//------------------------------------------ 
        break
      case this.P.moroz_549[6]:
        break
      case this.P.moroz_549[7]:
        break
      case this.P.moroz_549[8]:
        break
      case this.P.moroz_549[9]:
        break
    }
    
    this.msg = this.mes
    
    fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
	  return this.msg
    
  }
  
  this.func1 = function(user,time,allow,name){
    
    this.T = require("../../users/twitchfile.json")
    this.P = require("../pets.json")
    
    this.user = this.T[user]
    this.time = time * 1
    this.allow = allow
    this.name = name 
    
    switch(this.user.pet){
      case this.P.moroz_549[0]:
//------------  1 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp20 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp20 >= this.user.lvl20 * this.explvl)
{
this.user.lvl20++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl20 >= 50 && this.user.petrare20 === `Легендарный`){
				this.user.lvl20 = 1
				this.user.exp20 = 0
				this.user.petrare20 = `Божественный`
				this.mes = `${this.user.name20} ${this.div}`
			}
     

if(this.user.lvl20 >= 50 && this.user.petrare20 === `Божественный`)
{ 
 	this.user.lvl20 = 100
       this.user.petrare20 = `Мировое Зло`
 	this.user.exp20 = this.user.lvl20 * this.explvl 
       this.mes = `${this.user.name20} ${this.we}`
}


   }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name20}. Редкость: ${this.user.petrare20}. Уровень: ${this.user.lvl20}. `
			if(this.user.lvl20 <50){
				this.mes += `Опыт: ${this.user.exp20}/${this.user.lvl20*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name20 = this.name
//------------------------------------------- 
        break
      case this.P.moroz_549[1]:
//------------  2 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp21 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp21 >= this.user.lvl21 * this.explvl)
{
this.user.lvl21++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl21 >= 50 && this.user.petrare21 === `Уникальный`){
				this.user.lvl21 = 1
				this.user.exp21 = 0
				this.user.petrare21 = `Легендарный`
				this.mes = `${this.user.name21} ${this.leg}`
			}
			if(this.user.lvl21 >= 50 && this.user.petrare21 === `Легендарный`){
				this.user.lvl21 = 1
				this.user.exp21 = 0
				this.user.petrare21 = `Божественный`
				this.mes = `${this.user.name21} ${this.div}`
			}
       

if(this.user.lvl21 >= 50 && this.user.petrare21 === `Божественный`)
{ 
 	this.user.lvl21 = 100
       this.user.petrare21 = `Мировое Зло`
 	this.user.exp21 = this.user.lvl21 * this.explvl 
       this.mes = `${this.user.name21} ${this.we}`
}

 }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name21}. Редкость: ${this.user.petrare21}. Уровень: ${this.user.lvl21}. `
			if(this.user.lvl21 <50){
				this.mes += `Опыт: ${this.user.exp21}/${this.user.lvl21*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name21 = this.name
//------------------------------------------- 
        break
      case this.P.moroz_549[2]:
//------------  3 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp22 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp22 >= this.user.lvl22 * this.explvl)
{
this.user.lvl22++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl22 >= 50 && this.user.petrare22 === `Уникальный`){
				this.user.lvl22 = 1
				this.user.exp22 = 0
				this.user.petrare22 = `Легендарный`
				this.mes = `${this.user.name22} ${this.leg}`
			}
			if(this.user.lvl22 >= 50 && this.user.petrare22 === `Легендарный`){
				this.user.lvl22 = 1
				this.user.exp22 = 0
				this.user.petrare22 = `Божественный`
				this.mes = `${this.user.name22} ${this.div}`
			}
       

if(this.user.lvl22 >= 50 && this.user.petrare22 === `Божественный`)
{ 
 	this.user.lvl22 = 100
       this.user.petrare22 = `Мировое Зло`
 	this.user.exp22 = this.user.lvl22 * this.explvl 
       this.mes = `${this.user.name22} ${this.we}`
}

 }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name22}. Редкость: ${this.user.petrare22}. Уровень: ${this.user.lvl22}. `
			if(this.user.lvl22 <50){
				this.mes += `Опыт: ${this.user.exp22}/${this.user.lvl22*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name22 = this.name
//------------------------------------------- 
        break
      case this.P.moroz_549[3]:
//------------  4 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp23 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp23 >= this.user.lvl23 * this.explvl)
{
this.user.lvl23++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl23 >= 50 && this.user.petrare23 === `Уникальный`){
				this.user.lvl23 = 1
				this.user.exp23 = 0
				this.user.petrare23 = `Легендарный`
				this.mes = `${this.user.name23} ${this.leg}`
			}
			if(this.user.lvl23 >= 50 && this.user.petrare23 === `Легендарный`){
				this.user.lvl23 = 1
				this.user.exp23 = 0
				this.user.petrare23 = `Божественный`
				this.mes = `${this.user.name23} ${this.div}`
			}
       

if(this.user.lvl23 >= 50 && this.user.petrare23 === `Божественный`)
{ 
 	this.user.lvl23 = 100
       this.user.petrare23 = `Мировое Зло`
 	this.user.exp23 = this.user.lvl23 * this.explvl 
       this.mes = `${this.user.name23} ${this.we}`
}


 }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name23}. Редкость: ${this.user.petrare23}. Уровень: ${this.user.lvl23}. `
			if(this.user.lvl23 <50){
				this.mes += `Опыт: ${this.user.exp23}/${this.user.lvl23*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name23 = this.name
//------------------------------------------- 
        break
      case this.P.moroz_549[4]:
//------------  5 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp24 += this.time
          this.mes = `Получено ${this.time} опыта`
        

while(this.user.exp24 >= this.user.lvl24 * this.explvl)
{
this.user.lvl24++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl24 >= 50 && this.user.petrare24 === `Уникальный`){
				this.user.lvl24 = 1
				this.user.exp24 = 0
				this.user.petrare24 = `Легендарный`
				this.mes = `${this.user.name24} ${this.leg}`
			}
			if(this.user.lvl24 >= 50 && this.user.petrare24 === `Легендарный`){
				this.user.lvl24 = 1
				this.user.exp24 = 0
				this.user.petrare24 = `Божественный`
				this.mes = `${this.user.name24} ${this.div}`
			}
   

if(this.user.lvl24 >= 50 && this.user.petrare24 === `Божественный`)
{ 
 	this.user.lvl24 = 100
       this.user.petrare24 = `Мировое Зло`
 	this.user.exp24 = this.user.lvl24 * this.explvl 
       this.mes = `${this.user.name24} ${this.we}`
}


     }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name24}. Редкость: ${this.user.petrare24}. Уровень: ${this.user.lvl24}. `
			if(this.user.lvl24 <50){
				this.mes += `Опыт: ${this.user.exp24}/${this.user.lvl24*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name24 = this.name
//------------------------------------------- 
        break
      case this.P.moroz_549[5]:
	  //------------  6 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp25 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp25 >= this.user.lvl25 * this.explvl)
{
this.user.lvl25++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl25 >= 50 && this.user.petrare25 === `Уникальный`){
				this.user.lvl25 = 1
				this.user.exp25 = 0
				this.user.petrare25 = `Легендарный`
				this.mes = `${this.user.name25} ${this.leg}`
			}
			if(this.user.lvl25 >= 50 && this.user.petrare25 === `Легендарный`){
				this.user.lvl25 = 1
				this.user.exp25 = 0
				this.user.petrare25 = `Божественный`
				this.mes = `${this.user.name25} ${this.div}`
			}
       
if(this.user.lvl25 >= 50 && this.user.petrare25 === `Божественный`)
{ 
 	this.user.lvl25 = 100
       this.user.petrare25 = `Мировое Зло`
 	this.user.exp25 = this.user.lvl25 * this.explvl 
       this.mes = `${this.user.name25} ${this.we}`
}

 }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name25}. Редкость: ${this.user.petrare25}. Уровень: ${this.user.lvl25}. `
			if(this.user.lvl25 <50){
				this.mes += `Опыт: ${this.user.exp25}/${this.user.lvl25*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name25 = this.name
//------------------------------------------- 
        break
      case this.P.moroz_549[6]:
        break
      case this.P.moroz_549[7]:
        break
      case this.P.moroz_549[8]:
        break
      case this.P.moroz_549[9]:
        break
    }
    
    this.msg = this.mes
    
    fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
	  return this.msg
    
  }
  
}

module.exports = moroz_549
