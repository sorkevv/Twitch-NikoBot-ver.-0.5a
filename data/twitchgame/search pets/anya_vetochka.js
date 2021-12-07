const fs = require("fs")
function replacer(key,value){return value}

function anya_vetochka(){
  
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
        
    this.randompet = this.P.anya_vetochka[Math.floor(Math.random() * this.P.anya_vetochka.length)]
    if(this.user.pet === "Пусто" && this.randompet != this.P.anya_vetochka[0]) this.user.pet = this.randompet
    
    this.rand1 = this.Random(1,this.r)
    this.rand2 = this.Random(1,this.r)
    if(this.rand1 >= this.rand2 - this.time && this.rand1 <= this.rand2 + this.time){
//------------  1 питомец  ------------------   
      if(this.user.pet30 === undefined){
        if(this.user.pet === "Пусто") this.user.pet = this.P.anya_vetochka[0]
        this.user.pet30 = this.P.anya_vetochka[0]
        this.user.name30 = this.P.anya_vetochka[0]
        this.user.lvl30 = 1
        this.user.exp30 = 0    
		this.user.petrare30 = `Легендарный`
        this.mes = `. Найден легендарный питомец "${this.P.anya_vetochka[0]}"`
      }
      else if(this.user.pet30 != undefined && this.user.lvl30 <= 50){
        this.user.exp30 += this.time + (this.time * this.user.lvl30)
        this.mes = `. Найден легендарный питомец "${this.P.anya_vetochka[0]}"${this.doplvl}`


while(this.user.exp30 >= this.user.lvl30 * this.explvl)
{
this.user.lvl30++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl30 >= 50 && this.user.petrare30 === `Легендарный`){
				this.user.lvl30 = 1
				this.user.exp30 = 0
				this.user.petrare30 = `Божественный`
				this.mes = `${this.user.name30} ${this.div}`
			}
    

if(this.user.lvl30 >= 50 && this.user.petrare30 === `Божественный`)
{ 
 	this.user.lvl30 = 100
       this.user.petrare30 = `Мировое Зло`
 	this.user.exp30 = this.user.lvl30 * this.explvl 
       this.mes = `${this.user.name30} ${this.we}`
}

  }
//------------------------------------------   
    }
    else switch(this.randompet){
      case this.P.anya_vetochka[1]:
//------------  2 питомец  ------------------         
        if(this.user.pet31 === undefined){
          this.user.pet31 = this.P.anya_vetochka[1]
          this.user.name31 = this.P.anya_vetochka[1]
          this.user.lvl31 = 1
          this.user.exp31 = 0       
		  this.user.petrare31 = `Уникальный`
          this.mes = `${this.un}"${this.P.anya_vetochka[1]}"`
        }
        else if(this.user.pet31 != undefined && this.user.lvl31 <= 50){
          this.user.exp31 += this.time + (this.time * this.user.lvl31)
          this.mes = `${this.un}"${this.P.anya_vetochka[1]}"${this.doplvl}`
          

while(this.user.exp31 >= this.user.lvl31 * this.explvl)
{
this.user.lvl31++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}


			if(this.user.lvl31 >= 50 && this.user.petrare31 === `Уникальный`){
				this.user.lvl31 = 1
				this.user.exp31 = 0
				this.user.petrare31 = `Легендарный`
				this.mes = `${this.user.name31} ${this.leg}`
			}
			if(this.user.lvl31 >= 50 && this.user.petrare31 === `Легендарный`){
				this.user.lvl31 = 1
				this.user.exp31 = 0
				this.user.petrare31 = `Божественный`
				this.mes = `${this.user.name31} ${this.div}`
			}
     

if(this.user.lvl31 >= 50 && this.user.petrare31 === `Божественный`)
{ 
 	this.user.lvl31 = 100
       this.user.petrare31 = `Мировое Зло`
 	this.user.exp31 = this.user.lvl31 * this.explvl 
       this.mes = `${this.user.name31} ${this.we}`
}

   } 
//------------------------------------------ 
        break
      case this.P.anya_vetochka[2]:
//------------  3 питомец  ------------------         
        if(this.user.pet32 === undefined){
          this.user.pet32 = this.P.anya_vetochka[2]
          this.user.name32 = this.P.anya_vetochka[2]
          this.user.lvl32 = 1
          this.user.exp32 = 0      
		  this.user.petrare32 = `Уникальный`
          this.mes = `${this.un}"${this.P.anya_vetochka[2]}"`
        }
        else if(this.user.pet32 != undefined && this.user.lvl32 <= 50){
          this.user.exp32 += this.time + (this.time * this.user.lvl32)
          this.mes = `${this.un}"${this.P.anya_vetochka[2]}"${this.doplvl}`
          

while(this.user.exp32 >= this.user.lvl32 * this.explvl)
{
this.user.lvl32++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl32 >= 50 && this.user.petrare32 === `Уникальный`){
				this.user.lvl32 = 1
				this.user.exp32 = 0
				this.user.petrare32 = `Легендарный`
				this.mes = `${this.user.name32} ${this.leg}`
			}
			if(this.user.lvl32 >= 50 && this.user.petrare32 === `Легендарный`){
				this.user.lvl32 = 1
				this.user.exp32 = 0
				this.user.petrare32 = `Божественный`
				this.mes = `${this.user.name32} ${this.div}`
			}
      

if(this.user.lvl32 >= 50 && this.user.petrare32 === `Божественный`)
{ 
 	this.user.lvl32 = 100
       this.user.petrare32 = `Мировое Зло`
 	this.user.exp32 = this.user.lvl32 * this.explvl 
       this.mes = `${this.user.name32} ${this.we}`
}

  } 
//------------------------------------------ 
        break
      case this.P.anya_vetochka[3]:
//------------  4 питомец  ------------------         
        if(this.user.pet33 === undefined){
          this.user.pet33 = this.P.anya_vetochka[3]
          this.user.name33 = this.P.anya_vetochka[3]
          this.user.lvl33 = 1
          this.user.exp33 = 0      
		  this.user.petrare33 = `Уникальный`
          this.mes = `${this.un}"${this.P.anya_vetochka[3]}"`
        }
        else if(this.user.pet33 != undefined && this.user.lvl33 <= 50){
          this.user.exp33 += this.time + (this.time * this.user.lvl33)
          this.mes = `${this.un}"${this.P.anya_vetochka[3]}"${this.doplvl}`
          

while(this.user.exp33 >= this.user.lvl33 * this.explvl)
{
this.user.lvl33++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl33 >= 50 && this.user.petrare33 === `Уникальный`){
				this.user.lvl33 = 1
				this.user.exp33 = 0
				this.user.petrare33 = `Легендарный`
				this.mes = `${this.user.name33} ${this.leg}`
			}
			if(this.user.lvl33 >= 50 && this.user.petrare33 === `Легендарный`){
				this.user.lvl33 = 1
				this.user.exp33 = 0
				this.user.petrare33 = `Божественный`
				this.mes = `${this.user.name33} ${this.div}`
			}
    

if(this.user.lvl33 >= 50 && this.user.petrare33 === `Божественный`)
{ 
 	this.user.lvl33 = 100
       this.user.petrare33 = `Мировое Зло`
 	this.user.exp33 = this.user.lvl33 * this.explvl 
       this.mes = `${this.user.name33} ${this.we}`
}

    } 
//------------------------------------------       
        break
      case this.P.anya_vetochka[4]:
//------------  5 питомец  ------------------         
        if(this.user.pet34 === undefined){
          this.user.pet34 = this.P.anya_vetochka[4]
          this.user.name34 = this.P.anya_vetochka[4]
          this.user.lvl34 = 1
          this.user.exp34 = 0     
		  this.user.petrare34 = `Уникальный`  
          this.mes = `${this.un}"${this.P.anya_vetochka[4]}"`
        }
        else if(this.user.pet34 != undefined && this.user.lvl34 <= 50){
          this.user.exp34 += this.time + (this.time * this.user.lvl34)
          this.mes = `${this.un}"${this.P.anya_vetochka[4]}"${this.doplvl}`
          

while(this.user.exp34 >= this.user.lvl34 * this.explvl)
{
this.user.lvl34++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl34 >= 50 && this.user.petrare34 === `Уникальный`){
				this.user.lvl34 = 1
				this.user.exp34 = 0
				this.user.petrare34 = `Легендарный`
				this.mes = `${this.user.name34} ${this.leg}`
			}
			if(this.user.lvl34 >= 50 && this.user.petrare34 === `Легендарный`){
				this.user.lvl34 = 1
				this.user.exp34 = 0
				this.user.petrare34 = `Божественный`
				this.mes = `${this.user.name34} ${this.div}`
			}
     

if(this.user.lvl34 >= 50 && this.user.petrare34 === `Божественный`)
{ 
 	this.user.lvl34 = 100
       this.user.petrare34 = `Мировое Зло`
 	this.user.exp34 = this.user.lvl34 * this.explvl 
       this.mes = `${this.user.name34} ${this.we}`
}

   } 
//------------------------------------------        
        break
      case this.P.anya_vetochka[5]:
//------------  6 питомец  ------------------         
        if(this.user.pet35 === undefined){
          this.user.pet35 = this.P.anya_vetochka[5]
          this.user.name35 = this.P.anya_vetochka[5]
          this.user.lvl35 = 1
          this.user.exp35 = 0       
		  this.user.petrare35 = `Уникальный`
          this.mes = `${this.un}"${this.P.anya_vetochka[5]}"`
        }
        else if(this.user.pet35 != undefined && this.user.lvl35 <= 50){
          this.user.exp35 += this.time + (this.time * this.user.lvl35)
          this.mes = `${this.un}"${this.P.anya_vetochka[5]}"${this.doplvl}`
         

while(this.user.exp35 >= this.user.lvl35 * this.explvl)
{
this.user.lvl35++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl35 >= 50 && this.user.petrare35 === `Уникальный`){
				this.user.lvl35 = 1
				this.user.exp35 = 0
				this.user.petrare35 = `Легендарный`
				this.mes = `${this.user.name35} ${this.leg}`
			}
			if(this.user.lvl35 >= 50 && this.user.petrare35 === `Легендарный`){
				this.user.lvl35 = 1
				this.user.exp35 = 0
				this.user.petrare35 = `Божественный`
				this.mes = `${this.user.name35} ${this.div}`
			}
      

if(this.user.lvl35 >= 50 && this.user.petrare35 === `Божественный`)
{ 
 	this.user.lvl35 = 100
       this.user.petrare35 = `Мировое Зло`
 	this.user.exp35 = this.user.lvl35 * this.explvl 
       this.mes = `${this.user.name35} ${this.we}`
}

  } 
//------------------------------------------ 
        break
      case this.P.anya_vetochka[6]:
//------------  7 питомец  ------------------         
        if(this.user.pet36 === undefined){
          this.user.pet36 = this.P.anya_vetochka[6]
          this.user.name36 = this.P.anya_vetochka[6]
          this.user.lvl36 = 1
          this.user.exp36 = 0       
		  this.user.petrare36 = `Уникальный`
          this.mes = `${this.un}"${this.P.anya_vetochka[6]}"`
        }
        else if(this.user.pet36 != undefined && this.user.lvl36 <= 50){
          this.user.exp36 += this.time + (this.time * this.user.lvl36)
          this.mes = `${this.un}"${this.P.anya_vetochka[6]}"${this.doplvl}`
          

while(this.user.exp36 >= this.user.lvl36 * this.explvl)
{
this.user.lvl36++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl36 >= 50 && this.user.petrare36 === `Уникальный`){
				this.user.lvl36 = 1
				this.user.exp36 = 0
				this.user.petrare36 = `Легендарный`
				this.mes = `${this.user.name36} ${this.leg}`
			}
			if(this.user.lvl36 >= 50 && this.user.petrare36 === `Легендарный`){
				this.user.lvl36 = 1
				this.user.exp36 = 0
				this.user.petrare36 = `Божественный`
				this.mes = `${this.user.name36} ${this.div}`
			}
    

if(this.user.lvl36 >= 50 && this.user.petrare36 === `Божественный`)
{ 
 	this.user.lvl36 = 100
       this.user.petrare36 = `Мировое Зло`
 	this.user.exp36 = this.user.lvl36 * this.explvl 
       this.mes = `${this.user.name36} ${this.we}`
}

    } 
//------------------------------------------ 
        break
      case this.P.anya_vetochka[7]:
//------------  8 питомец  ------------------         
        if(this.user.pet37 === undefined){
          this.user.pet37 = this.P.anya_vetochka[7]
          this.user.name37 = this.P.anya_vetochka[7]
          this.user.lvl37 = 1
          this.user.exp37 = 0      
		  this.user.petrare37 = `Уникальный`
          this.mes = `${this.un}"${this.P.anya_vetochka[7]}"`
        }
        else if(this.user.pet37 != undefined && this.user.lvl37 <= 50){
          this.user.exp37 += this.time + (this.time * this.user.lvl37)
          this.mes = `${this.un}"${this.P.anya_vetochka[7]}"${this.doplvl}`


while(this.user.exp37 >= this.user.lvl37 * this.explvl)
{
this.user.lvl37++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl37 >= 50 && this.user.petrare37 === `Уникальный`){
				this.user.lvl37 = 1
				this.user.exp37 = 0
				this.user.petrare37 = `Легендарный`
				this.mes = `${this.user.name37} ${this.leg}`
			}
			if(this.user.lvl37 >= 50 && this.user.petrare37 === `Легендарный`){
				this.user.lvl37 = 1
				this.user.exp37 = 0
				this.user.petrare37 = `Божественный`
				this.mes = `${this.user.name37} ${this.div}`
			}
     

if(this.user.lvl37 >= 50 && this.user.petrare37 === `Божественный`)
{ 
 	this.user.lvl37 = 100
       this.user.petrare37 = `Мировое Зло`
 	this.user.exp37 = this.user.lvl37 * this.explvl 
       this.mes = `${this.user.name37} ${this.we}`
}
   } 
//------------------------------------------ 
        break
      case this.P.anya_vetochka[8]:
//------------  9 питомец  ------------------         
        if(this.user.pet38 === undefined){
          this.user.pet38 = this.P.anya_vetochka[8]
          this.user.name38 = this.P.anya_vetochka[8]
          this.user.lvl38 = 1
          this.user.exp38 = 0       
		  this.user.petrare38 = `Уникальный`
          this.mes = `${this.un}"${this.P.anya_vetochka[8]}"`
        }
        else if(this.user.pet38 != undefined && this.user.lvl38 <= 50){
          this.user.exp38 += this.time + (this.time * this.user.lvl38)
          this.mes = `${this.un}"${this.P.anya_vetochka[8]}"${this.doplvl}`
          

while(this.user.exp38 >= this.user.lvl38 * this.explvl)
{
this.user.lvl38++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl38 >= 50 && this.user.petrare38 === `Уникальный`){
				this.user.lvl38 = 1
				this.user.exp38 = 0
				this.user.petrare38 = `Легендарный`
				this.mes = `${this.user.name38} ${this.leg}`
			}
			if(this.user.lvl38 >= 50 && this.user.petrare38 === `Легендарный`){
				this.user.lvl38 = 1
				this.user.exp38 = 0
				this.user.petrare38 = `Божественный`
				this.mes = `${this.user.name38} ${this.div}`
			}
    

if(this.user.lvl38 >= 50 && this.user.petrare38 === `Божественный`)
{ 
 	this.user.lvl38 = 100
       this.user.petrare38 = `Мировое Зло`
 	this.user.exp38 = this.user.lvl38 * this.explvl 
       this.mes = `${this.user.name38} ${this.we}`
}

    } 
//------------------------------------------ 
        break
      case this.P.anya_vetochka[9]:
//------------  10 питомец  ------------------         
        if(this.user.pet39 === undefined){
          this.user.pet39 = this.P.anya_vetochka[9]
          this.user.name39 = this.P.anya_vetochka[9]
          this.user.lvl39 = 1
          this.user.exp39 = 0      
		  this.user.petrare39 = `Уникальный`
          this.mes = `${this.un}"${this.P.anya_vetochka[9]}"`
        }
        else if(this.user.pet39 != undefined && this.user.lvl39 <= 50){
          this.user.exp39 += this.time + (this.time * this.user.lvl39)
          this.mes = `${this.un}"${this.P.anya_vetochka[9]}"${this.doplvl}`
          

while(this.user.exp39 >= this.user.lvl39 * this.explvl)
{
this.user.lvl39++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl39 >= 50 && this.user.petrare39 === `Уникальный`){
				this.user.lvl39 = 1
				this.user.exp39 = 0
				this.user.petrare39 = `Легендарный`
				this.mes = `${this.user.name39} ${this.leg}`
			}
			if(this.user.lvl39 >= 50 && this.user.petrare39 === `Легендарный`){
				this.user.lvl39 = 1
				this.user.exp39 = 0
				this.user.petrare39 = `Божественный`
				this.mes = `${this.user.name39} ${this.div}`
			}
     
if(this.user.lvl39 >= 50 && this.user.petrare39 === `Божественный`)
{ 
 	this.user.lvl39 = 100
       this.user.petrare39 = `Мировое Зло`
 	this.user.exp39 = this.user.lvl39 * this.explvl 
       this.mes = `${this.user.name39} ${this.we}`
}

   } 
//------------------------------------------ 
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
    this.lvlup = `. Уровень повышен`
	this.leg = `получает максимальный уровень и становится Легендарным питомцем`
	this.div = `получает максимальный уровень и становится Божественным питомцем`
    
    switch(this.user.pet){
      case this.P.anya_vetochka[0]:
//------------  1 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp30 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp30 >= this.user.lvl30 * this.explvl)
{
this.user.lvl30++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl30 >= 50 && this.user.petrare30 === `Легендарный`){
				this.user.lvl30 = 1
				this.user.exp30 = 0
				this.user.petrare30 = `Божественный`
				this.mes = `${this.user.name30} ${this.div}`
			}
  

if(this.user.lvl30 >= 50 && this.user.petrare30 === `Божественный`)
{ 
 	this.user.lvl30 = 100
       this.user.petrare30 = `Мировое Зло`
 	this.user.exp30 = this.user.lvl30 * this.explvl 
       this.mes = `${this.user.name30} ${this.we}`
}

      }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name30}. Редкость: ${this.user.petrare30}. Уровень: ${this.user.lvl30}. `
			if(this.user.lvl30 <50){
				this.mes += `Опыт: ${this.user.exp30}/${this.user.lvl30*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name30 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[1]:
//------------  2 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp31 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp31 >= this.user.lvl31 * this.explvl)
{
this.user.lvl31++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl31 >= 50 && this.user.petrare31 === `Уникальный`){
				this.user.lvl31 = 1
				this.user.exp31 = 0
				this.user.petrare31 = `Легендарный`
				this.mes = `${this.user.name31} ${this.leg}`
			}
			if(this.user.lvl31 >= 50 && this.user.petrare31 === `Легендарный`){
				this.user.lvl31 = 1
				this.user.exp31 = 0
				this.user.petrare31 = `Божественный`
				this.mes = `${this.user.name31} ${this.div}`
			}
    

if(this.user.lvl31 >= 50 && this.user.petrare31 === `Божественный`)
{ 
 	this.user.lvl31 = 100
       this.user.petrare31 = `Мировое Зло`
 	this.user.exp31 = this.user.lvl31 * this.explvl 
       this.mes = `${this.user.name31} ${this.we}`
}

    }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name31}. Редкость: ${this.user.petrare31}. Уровень: ${this.user.lvl31}. `
			if(this.user.lvl31 <50){
				this.mes += `Опыт: ${this.user.exp31}/${this.user.lvl31*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name31 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[2]:
//------------  3 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp32 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp32 >= this.user.lvl32 * this.explvl)
{
this.user.lvl32++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl32 >= 50 && this.user.petrare32 === `Уникальный`){
				this.user.lvl32 = 1
				this.user.exp32 = 0
				this.user.petrare32 = `Легендарный`
				this.mes = `${this.user.name32} ${this.leg}`
			}
			if(this.user.lvl32 >= 50 && this.user.petrare32 === `Легендарный`){
				this.user.lvl32 = 1
				this.user.exp32 = 0
				this.user.petrare32 = `Божественный`
				this.mes = `${this.user.name32} ${this.div}`
			}
   

if(this.user.lvl32 >= 50 && this.user.petrare32 === `Божественный`)
{ 
 	this.user.lvl32 = 100
       this.user.petrare32 = `Мировое Зло`
 	this.user.exp32 = this.user.lvl32 * this.explvl 
       this.mes = `${this.user.name32} ${this.we}`
}

     }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name32}. Редкость: ${this.user.petrare32}. Уровень: ${this.user.lvl32}. `
			if(this.user.lvl32 <50){
				this.mes += `Опыт: ${this.user.exp32}/${this.user.lvl32*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name32 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[3]:
//------------  4 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp33 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp33 >= this.user.lvl33 * this.explvl)
{
this.user.lvl33++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl33 >= 50 && this.user.petrare33 === `Уникальный`){
				this.user.lvl33 = 1
				this.user.exp33 = 0
				this.user.petrare33 = `Легендарный`
				this.mes = `${this.user.name33} ${this.leg}`
			}
			if(this.user.lvl33 >= 50 && this.user.petrare33 === `Легендарный`){
				this.user.lvl33 = 1
				this.user.exp33 = 0
				this.user.petrare33 = `Божественный`
				this.mes = `${this.user.name33} ${this.div}`
			}
   

if(this.user.lvl33 >= 50 && this.user.petrare33 === `Божественный`)
{ 
 	this.user.lvl33 = 100
       this.user.petrare33 = `Мировое Зло`
 	this.user.exp33 = this.user.lvl33 * this.explvl 
       this.mes = `${this.user.name33} ${this.we}`
}

     }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name33}. Редкость: ${this.user.petrare33}. Уровень: ${this.user.lvl33}. `
			if(this.user.lvl33 <50){
				this.mes += `Опыт: ${this.user.exp33}/${this.user.lvl33*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name33 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[4]:
//------------  5 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp34 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp34 >= this.user.lvl34 * this.explvl)
{
this.user.lvl34++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl34 >= 50 && this.user.petrare34 === `Уникальный`){
				this.user.lvl34 = 1
				this.user.exp34 = 0
				this.user.petrare34 = `Легендарный`
				this.mes = `${this.user.name34} ${this.leg}`
			}
			if(this.user.lvl34 >= 50 && this.user.petrare34 === `Легендарный`){
				this.user.lvl34 = 1
				this.user.exp34 = 0
				this.user.petrare34 = `Божественный`
				this.mes = `${this.user.name34} ${this.div}`
			}
   

if(this.user.lvl34 >= 50 && this.user.petrare34 === `Божественный`)
{ 
 	this.user.lvl34 = 100
       this.user.petrare34 = `Мировое Зло`
 	this.user.exp34 = this.user.lvl34 * this.explvl 
       this.mes = `${this.user.name34} ${this.we}`
}

     }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name34}. Редкость: ${this.user.petrare34}. Уровень: ${this.user.lvl34}. `
			if(this.user.lvl34 <50){
				this.mes += `Опыт: ${this.user.exp34}/${this.user.lvl34*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name34 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[5]:
//------------  6 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp35 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp35 >= this.user.lvl35 * this.explvl)
{
this.user.lvl35++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl35 >= 50 && this.user.petrare35 === `Уникальный`){
				this.user.lvl35 = 1
				this.user.exp35 = 0
				this.user.petrare35 = `Легендарный`
				this.mes = `${this.user.name35} ${this.leg}`
			}
			if(this.user.lvl35 >= 50 && this.user.petrare35 === `Легендарный`){
				this.user.lvl35 = 1
				this.user.exp35 = 0
				this.user.petrare35 = `Божественный`
				this.mes = `${this.user.name35} ${this.div}`
			}
      

if(this.user.lvl35 >= 50 && this.user.petrare35 === `Божественный`)
{ 
 	this.user.lvl35 = 100
       this.user.petrare35 = `Мировое Зло`
 	this.user.exp35 = this.user.lvl35 * this.explvl 
       this.mes = `${this.user.name35} ${this.we}`
}

  }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name35}. Редкость: ${this.user.petrare35}. Уровень: ${this.user.lvl35}. `
			if(this.user.lvl35 <50){
				this.mes += `Опыт: ${this.user.exp35}/${this.user.lvl35*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name35 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[6]:
//------------  7 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp36 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp36 >= this.user.lvl36 * this.explvl)
{
this.user.lvl36++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl36 >= 50 && this.user.petrare36 === `Уникальный`){
				this.user.lvl36 = 1
				this.user.exp36 = 0
				this.user.petrare36 = `Легендарный`
				this.mes = `${this.user.name36} ${this.leg}`
			}
			if(this.user.lvl36 >= 50 && this.user.petrare36 === `Легендарный`){
				this.user.lvl36 = 1
				this.user.exp36 = 0
				this.user.petrare36 = `Божественный`
				this.mes = `${this.user.name36} ${this.div}`
			}
      

if(this.user.lvl36 >= 50 && this.user.petrare36 === `Божественный`)
{ 
 	this.user.lvl36 = 100
       this.user.petrare36 = `Мировое Зло`
 	this.user.exp36 = this.user.lvl36 * this.explvl 
       this.mes = `${this.user.name36} ${this.we}`
}

  }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name36}. Редкость: ${this.user.petrare36}. Уровень: ${this.user.lvl36}. `
			if(this.user.lvl36 <50){
				this.mes += `Опыт: ${this.user.exp36}/${this.user.lvl36*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name36 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[7]:
//------------  8 питомец  ------------------   
        if(this.allow === `Опыт`){ 
          this.user.exp37 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp37 >= this.user.lvl37 * this.explvl)
{
this.user.lvl37++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl37 >= 50 && this.user.petrare37 === `Уникальный`){
				this.user.lvl37 = 1
				this.user.exp37 = 0
				this.user.petrare37 = `Легендарный`
				this.mes = `${this.user.name37} ${this.leg}`
			}
			if(this.user.lvl37 >= 50 && this.user.petrare37 === `Легендарный`){
				this.user.lvl37 = 1
				this.user.exp37 = 0
				this.user.petrare37 = `Божественный`
				this.mes = `${this.user.name37} ${this.div}`
			}
     

if(this.user.lvl37 >= 50 && this.user.petrare37 === `Божественный`)
{ 
 	this.user.lvl37 = 100
       this.user.petrare37 = `Мировое Зло`
 	this.user.exp37 = this.user.lvl37 * this.explvl 
       this.mes = `${this.user.name37} ${this.we}`
}

   }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name37}. Редкость: ${this.user.petrare37}. Уровень: ${this.user.lvl37}. `
			if(this.user.lvl37 <50){
				this.mes += `Опыт: ${this.user.exp37}/${this.user.lvl37*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name37 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[8]:
//------------  9 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp38 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp38 >= this.user.lvl38 * this.explvl)
{
this.user.lvl38++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl38 >= 50 && this.user.petrare38 === `Уникальный`){
				this.user.lvl38 = 1
				this.user.exp38 = 0
				this.user.petrare38 = `Легендарный`
				this.mes = `${this.user.name38} ${this.leg}`
			}
			if(this.user.lvl38 >= 50 && this.user.petrare38 === `Легендарный`){
				this.user.lvl38 = 1
				this.user.exp38 = 0
				this.user.petrare38 = `Божественный`
				this.mes = `${this.user.name38} ${this.div}`
			}
     

if(this.user.lvl38 >= 50 && this.user.petrare38 === `Божественный`)
{ 
 	this.user.lvl38 = 100
       this.user.petrare38 = `Мировое Зло`
 	this.user.exp38 = this.user.lvl38 * this.explvl 
       this.mes = `${this.user.name38} ${this.we}`
}

   }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name38}. Редкость: ${this.user.petrare38}. Уровень: ${this.user.lvl38}. `
			if(this.user.lvl38 <50){
				this.mes += `Опыт: ${this.user.exp38}/${this.user.lvl38*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name38 = this.name
//------------------------------------------- 
        break
      case this.P.anya_vetochka[9]:
//------------  10 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp39 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp39 >= this.user.lvl39 * this.explvl)
{
this.user.lvl39++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl39 >= 50 && this.user.petrare39 === `Уникальный`){
				this.user.lvl39 = 1
				this.user.exp39 = 0
				this.user.petrare39 = `Легендарный`
				this.mes = `${this.user.name39} ${this.leg}`
			}
			if(this.user.lvl39 >= 50 && this.user.petrare39 === `Легендарный`){
				this.user.lvl39 = 1
				this.user.exp39 = 0
				this.user.petrare39 = `Божественный`
				this.mes = `${this.user.name39} ${this.div}`
			}
    

if(this.user.lvl39 >= 50 && this.user.petrare39 === `Божественный`)
{ 
 	this.user.lvl39 = 100
       this.user.petrare39 = `Мировое Зло`
 	this.user.exp39 = this.user.lvl39 * this.explvl 
       this.mes = `${this.user.name39} ${this.we}`
}

    }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name39}. Редкость: ${this.user.petrare39}. Уровень: ${this.user.lvl39}. `
			if(this.user.lvl39 <50){
				this.mes += `Опыт: ${this.user.exp39}/${this.user.lvl39*this.explvl}`
			}
		}
	   if(this.allow === `Имя`) this.user.name39 = this.name
//------------------------------------------- 
        break
    }
    
    this.msg = this.mes
    
    fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
	  return this.msg
    
  }
  
}

module.exports = anya_vetochka
