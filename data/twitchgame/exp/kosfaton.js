const fs = require("fs")
function replacer(key,value){return value}

function kosfaton(){
  
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
    
    this.randompet = this.P.kosfaton[Math.floor(Math.random() * this.P.kosfaton.length)]
    if(this.user.pet === "Пусто" && this.randompet != this.P.kosfaton[0]) this.user.pet = this.randompet
    
    this.rand1 = this.Random(1,this.r)
    this.rand2 = this.Random(1,this.r)
    if(this.rand1 >= this.rand2 - this.time && this.rand1 <= this.rand2 + this.time){
//------------  1 питомец  ------------------   
      if(this.user.pet40 === undefined){
        if(this.user.pet === "Пусто") this.user.pet = this.P.kosfaton[0]
        this.user.pet40 = this.P.kosfaton[0]
        this.user.name40 = this.P.kosfaton[0]
        this.user.lvl40 = 1
        this.user.exp40 = 0       
		this.user.petrare40 = `Легендарный`
        this.mes = `. Найден легендарный питомец "${this.P.kosfaton[0]}"`
      }
      else if(this.user.pet40 != undefined && this.user.lvl40 <= 50){
        this.user.exp40 += this.time + (this.time * this.user.lvl40)
        this.mes = `. Найден легендарный питомец "${this.P.kosfaton[0]}"${this.doplvl}`
        
while(this.user.exp40 >= this.user.lvl40 * this.explvl)
{
this.user.lvl40++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl40 >= 50 && this.user.petrare40 === `Легендарный`){
				this.user.lvl40 = 1
				this.user.exp40 = 0
				this.user.petrare40 = `Божественный`
				this.mes = `${this.user.name40} ${this.div}`
			}
     
if(this.user.lvl40 >= 50 && this.user.petrare40 === `Божественный`)
{ 
 	this.user.lvl40 = 100
       this.user.petrare40 = `Мировое Зло`
 	this.user.exp40 = this.user.lvl40 * this.explvl 
       this.mes = `${this.user.name40} ${this.we}`
}
 }
//------------------------------------------   
    }
    else switch(this.randompet){
      case this.P.kosfaton[1]:
//------------  2 питомец  ------------------         
        if(this.user.pet41 === undefined){
          this.user.pet41 = this.P.kosfaton[1]
          this.user.name41 = this.P.kosfaton[1]
          this.user.lvl41 = 1
          this.user.exp41 = 0     
		  this.user.petrare41 = `Уникальный` 
          this.mes = `${this.un}"${this.P.kosfaton[1]}"`
        }
        else if(this.user.pet41 != undefined && this.user.lvl41 <= 50){
          this.user.exp41 += this.time + (this.time * this.user.lvl41)
          this.mes = `${this.un}"${this.P.kosfaton[1]}"${this.doplvl}`
          
while(this.user.exp41 >= this.user.lvl41 * this.explvl)
{
this.user.lvl41++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl41 >= 50 && this.user.petrare41 === `Уникальный`){
				this.user.lvl41 = 1
				this.user.exp41 = 0
				this.user.petrare41 = `Легендарный`
				this.mes = `${this.user.name41} ${this.leg}`
			}
			if(this.user.lvl41 >= 50 && this.user.petrare41 === `Легендарный`){
				this.user.lvl41 = 1
				this.user.exp41 = 0
				this.user.petrare41 = `Божественный`
				this.mes = `${this.user.name41} ${this.div}`
			}
       
if(this.user.lvl41 >= 50 && this.user.petrare41 === `Божественный`)
{ 
 	this.user.lvl41 = 100
       this.user.petrare41 = `Мировое Зло`
 	this.user.exp41 = this.user.lvl41 * this.explvl 
       this.mes = `${this.user.name41} ${this.we}`
}
 } 
//------------------------------------------ 
        break
      case this.P.kosfaton[2]:
//------------  3 питомец  ------------------         
        if(this.user.pet42 === undefined){
          this.user.pet42 = this.P.kosfaton[2]
          this.user.name42 = this.P.kosfaton[2]
          this.user.lvl42 = 1
          this.user.exp42 = 0       
		  this.user.petrare42 = `Уникальный`
          this.mes = `${this.un}"${this.P.kosfaton[2]}"`
        }
        else if(this.user.pet42 != undefined && this.user.lvl42 <= 50){
          this.user.exp42 += this.time + (this.time * this.user.lvl42)
          this.mes = `${this.un}"${this.P.kosfaton[2]}"${this.doplvl}`
          
while(this.user.exp42 >= this.user.lvl42 * this.explvl)
{
this.user.lvl42++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl42 >= 50 && this.user.petrare42 === `Уникальный`){
				this.user.lvl42 = 1
				this.user.exp42 = 0
				this.user.petrare42 = `Легендарный`
				this.mes = `${this.user.name42} ${this.leg}`
			}
			if(this.user.lvl42 >= 50 && this.user.petrare42 === `Легендарный`){
				this.user.lvl42 = 1
				this.user.exp42 = 0
				this.user.petrare42 = `Божественный`
				this.mes = `${this.user.name42} ${this.div}`
			}
      
if(this.user.lvl42 >= 50 && this.user.petrare42 === `Божественный`)
{ 
 	this.user.lvl42 = 100
       this.user.petrare42 = `Мировое Зло`
 	this.user.exp42 = this.user.lvl42 * this.explvl 
       this.mes = `${this.user.name42} ${this.we}`
}
  } 
//------------------------------------------ 
        break
      case this.P.kosfaton[3]:     
//------------  4 питомец  ------------------         
        if(this.user.pet43 === undefined){
          this.user.pet43 = this.P.kosfaton[3]
          this.user.name43 = this.P.kosfaton[3]
          this.user.lvl43 = 1
          this.user.exp43 = 0       
		  this.user.petrare43 = `Уникальный`
          this.mes = `${this.un}"${this.P.kosfaton[3]}"`
        }
        else if(this.user.pet43 != undefined && this.user.lvl43 <= 50){
          this.user.exp43 += this.time + (this.time * this.user.lvl43)
          this.mes = `${this.un}"${this.P.kosfaton[3]}"${this.doplvl}`
          
while(this.user.exp43 >= this.user.lvl43 * this.explvl)
{
this.user.lvl43++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl43 >= 50 && this.user.petrare43 === `Уникальный`){
				this.user.lvl43 = 1
				this.user.exp43 = 0
				this.user.petrare43 = `Легендарный`
				this.mes = `${this.user.name43} ${this.leg}`
			}
			if(this.user.lvl43 >= 50 && this.user.petrare43 === `Легендарный`){
				this.user.lvl43 = 1
				this.user.exp43 = 0
				this.user.petrare43 = `Божественный`
				this.mes = `${this.user.name43} ${this.div}`
			}
      
if(this.user.lvl43 >= 50 && this.user.petrare43 === `Божественный`)
{ 
 	this.user.lvl43 = 100
       this.user.petrare43 = `Мировое Зло`
 	this.user.exp43 = this.user.lvl43 * this.explvl 
       this.mes = `${this.user.name43} ${this.we}`
}

  } 
//------------------------------------------  
        break
      case this.P.kosfaton[4]:    
//------------  5 питомец  ------------------         
        if(this.user.pet44 === undefined){
          this.user.pet44 = this.P.kosfaton[4]
          this.user.name44 = this.P.kosfaton[4]
          this.user.lvl44 = 1
          this.user.exp44 = 0       
		  this.user.petrare44 = `Уникальный`
          this.mes = `${this.un}"${this.P.kosfaton[4]}"`
        }
        else if(this.user.pet44 != undefined && this.user.lvl44 <= 50){
          this.user.exp44 += this.time + (this.time * this.user.lvl44)
          this.mes = `${this.un}"${this.P.kosfaton[4]}"${this.doplvl}`

while(this.user.exp44 >= this.user.lvl44 * this.explvl)
{
this.user.lvl44++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl44 >= 50 && this.user.petrare44 === `Уникальный`){
				this.user.lvl44 = 1
				this.user.exp44 = 0
				this.user.petrare44 = `Легендарный`
				this.mes = `${this.user.name44} ${this.leg}`
			}
			if(this.user.lvl44 >= 50 && this.user.petrare44 === `Легендарный`){
				this.user.lvl44 = 1
				this.user.exp44 = 0
				this.user.petrare44 = `Божественный`
				this.mes = `${this.user.name44} ${this.div}`
			}
     
if(this.user.lvl44 >= 50 && this.user.petrare44 === `Божественный`)
{ 
 	this.user.lvl44 = 100
       this.user.petrare44 = `Мировое Зло`
 	this.user.exp44 = this.user.lvl44 * this.explvl 
       this.mes = `${this.user.name44} ${this.we}`
}

   } 
//------------------------------------------    
        break
      case this.P.kosfaton[5]:    
//------------  5 питомец  ------------------         
        if(this.user.pet45 === undefined){
          this.user.pet45 = this.P.kosfaton[5]
          this.user.name45 = this.P.kosfaton[5]
          this.user.lvl45 = 1
          this.user.exp45 = 0       
		  this.user.petrare45 = `Уникальный`
          this.mes = `${this.un}"${this.P.kosfaton[5]}"`
        }
        else if(this.user.pet45 != undefined && this.user.lvl45 <= 50){
          this.user.exp45 += this.time + (this.time * this.user.lvl45)
          this.mes = `${this.un}"${this.P.kosfaton[5]}"${this.doplvl}`
          
while(this.user.exp45 >= this.user.lvl45 * this.explvl)
{
this.user.lvl45++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl45 >= 50 && this.user.petrare45 === `Уникальный`){
				this.user.lvl45 = 1
				this.user.exp45 = 0
				this.user.petrare45 = `Легендарный`
				this.mes = `${this.user.name45} ${this.leg}`
			}
			if(this.user.lvl45 >= 50 && this.user.petrare45 === `Легендарный`){
				this.user.lvl45 = 1
				this.user.exp45 = 0
				this.user.petrare45 = `Божественный`
				this.mes = `${this.user.name45} ${this.div}`
			}
      
if(this.user.lvl45 >= 50 && this.user.petrare45 === `Божественный`)
{ 
 	this.user.lvl45 = 100
       this.user.petrare45 = `Мировое Зло`
 	this.user.exp45 = this.user.lvl45 * this.explvl 
       this.mes = `${this.user.name45} ${this.we}`
}
  } 
//------------------------------------------   
        break
      case this.P.kosfaton[6]:   
//------------  6 питомец  ------------------         
        if(this.user.pet46 === undefined){
          this.user.pet46 = this.P.kosfaton[6]
          this.user.name46 = this.P.kosfaton[6]
          this.user.lvl46 = 1
          this.user.exp46 = 0       
		  this.user.petrare46 = `Уникальный`
          this.mes = `${this.un}"${this.P.kosfaton[6]}"`
        }
        else if(this.user.pet46 != undefined && this.user.lvl46 <= 50){
          this.user.exp46 += this.time + (this.time * this.user.lvl46)
          this.mes = `${this.un}"${this.P.kosfaton[6]}"${this.doplvl}`
          
while(this.user.exp46 >= this.user.lvl46 * this.explvl)
{
this.user.lvl46++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl46 >= 50 && this.user.petrare46 === `Уникальный`){
				this.user.lvl46 = 1
				this.user.exp46 = 0
				this.user.petrare45 = `Легендарный`
				this.mes = `${this.user.name46} ${this.leg}`
			}
			if(this.user.lvl46 >= 50 && this.user.petrare46 === `Легендарный`){
				this.user.lvl46 = 1
				this.user.exp46 = 0
				this.user.petrare45 = `Божественный`
				this.mes = `${this.user.name46} ${this.div}`
			}
     
if(this.user.lvl46 >= 50 && this.user.petrare46 === `Божественный`)
{ 
 	this.user.lvl46 = 100
       this.user.petrare46 = `Мировое Зло`
 	this.user.exp46 = this.user.lvl46 * this.explvl 
       this.mes = `${this.user.name46} ${this.we}`
}

   } 
//------------------------------------------ 
        break
      case this.P.kosfaton[7]:
        break
      case this.P.kosfaton[8]:
        break
      case this.P.kosfaton[9]:
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
		
      case this.P.kosfaton[0]:
//------------  1 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp40 += this.time
          this.mes = `Получено ${this.time} опыта`
          
while(this.user.exp40 >= this.user.lvl40 * this.explvl)
{
this.user.lvl40++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl40 >= 50 && this.user.petrare40 === `Легендарный`){
				this.user.lvl40 = 1
				this.user.exp40 = 0
				this.user.petrare40 = `Божественный`
				this.mes = `${this.user.name40} ${this.div}`
			}
      
if(this.user.lvl40 >= 50 && this.user.petrare40 === `Божественный`)
{ 
 	this.user.lvl40 = 100
       this.user.petrare40 = `Мировое Зло`
 	this.user.exp40 = this.user.lvl40 * this.explvl 
       this.mes = `${this.user.name40} ${this.we}`
}

  }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name40}. Редкость: ${this.user.petrare40}. Уровень: ${this.user.lvl40}. `
			if(this.user.lvl40 <50){
				this.mes += `Опыт: ${this.user.exp40}/${this.user.lvl40*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name40 = this.name
        break
//------------------------------------------- 		
      case this.P.kosfaton[1]:
//------------  2 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp41 += this.time
          this.mes = `Получено ${this.time} опыта`
          
while(this.user.exp41 >= this.user.lvl41 * this.explvl)
{
this.user.lvl41++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl41 >= 50 && this.user.petrare41 === `Уникальный`){
				this.user.lvl41 = 1
				this.user.exp41 = 0
				this.user.petrare41 = `Легендарный`
				this.mes = `${this.user.name41} ${this.leg}`
			}
			if(this.user.lvl41 >= 50 && this.user.petrare41 === `Легендарный`){
				this.user.lvl41 = 1
				this.user.exp41 = 0
				this.user.petrare41 = `Божественный`
				this.mes = `${this.user.name41} ${this.div}`
			}
     
if(this.user.lvl41 >= 50 && this.user.petrare41 === `Божественный`)
{ 
 	this.user.lvl41 = 100
       this.user.petrare41 = `Мировое Зло`
 	this.user.exp41 = this.user.lvl41 * this.explvl 
       this.mes = `${this.user.name41} ${this.we}`
}

   }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name41}. Редкость: ${this.user.petrare41}. Уровень: ${this.user.lvl41}. `
			if(this.user.lvl41 <50){
				this.mes += `Опыт: ${this.user.exp41}/${this.user.lvl41*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name41 = this.name
        break
//------------------------------------------- 	
      case this.P.kosfaton[2]:
//------------  3 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp42 += this.time
          this.mes = `Получено ${this.time} опыта`
          
while(this.user.exp42 >= this.user.lvl42 * this.explvl)
{
this.user.lvl42++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl42 >= 50 && this.user.petrare42 === `Уникальный`){
				this.user.lvl42 = 1
				this.user.exp42 = 0
				this.user.petrare42 = `Легендарный`
				this.mes = `${this.user.name42} ${this.leg}`
			}
			if(this.user.lvl42 >= 50 && this.user.petrare42 === `Легендарный`){
				this.user.lvl42 = 1
				this.user.exp42 = 0
				this.user.petrare42 = `Божественный`
				this.mes = `${this.user.name42} ${this.div}`
			}
       
if(this.user.lvl42 >= 50 && this.user.petrare42 === `Божественный`)
{ 
 	this.user.lvl42 = 100
       this.user.petrare42 = `Мировое Зло`
 	this.user.exp42 = this.user.lvl42 * this.explvl 
       this.mes = `${this.user.name42} ${this.we}`
}

 }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name42}. Редкость: ${this.user.petrare42}. Уровень: ${this.user.lvl42}. `
			if(this.user.lvl42 <50){
				this.mes += `Опыт: ${this.user.exp42}/${this.user.lvl42*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name42 = this.name
        break
//------------------------------------------- 	
      case this.P.kosfaton[3]:
//------------  4 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp43 += this.time
          this.mes = `Получено ${this.time} опыта`
          
while(this.user.exp43 >= this.user.lvl43 * this.explvl)
{
this.user.lvl43++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl43 >= 50 && this.user.petrare43 === `Уникальный`){
				this.user.lvl43 = 1
				this.user.exp43 = 0
				this.user.petrare43 = `Легендарный`
				this.mes = `${this.user.name43} ${this.leg}`
			}
			if(this.user.lvl43 >= 50 && this.user.petrare43 === `Легендарный`){
				this.user.lvl43 = 1
				this.user.exp43 = 0
				this.user.petrare43 = `Божественный`
				this.mes = `${this.user.name43} ${this.div}`
			}
  
if(this.user.lvl43 >= 50 && this.user.petrare43 === `Божественный`)
{ 
 	this.user.lvl43 = 100
       this.user.petrare43 = `Мировое Зло`
 	this.user.exp43 = this.user.lvl43 * this.explvl 
       this.mes = `${this.user.name43} ${this.we}`
}

      }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name43}. Редкость: ${this.user.petrare43}. Уровень: ${this.user.lvl43}. `
			if(this.user.lvl43 <50){
				this.mes += `Опыт: ${this.user.exp43}/${this.user.lvl43*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name43 = this.name
        break
//------------------------------------------- 	
      case this.P.kosfaton[4]:
//------------  5 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp44 += this.time
          this.mes = `Получено ${this.time} опыта`

while(this.user.exp44 >= this.user.lvl44 * this.explvl)
{
this.user.lvl44++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl44 >= 50 && this.user.petrare44 === `Уникальный`){
				this.user.lvl44 = 1
				this.user.exp44 = 0
				this.user.petrare44 = `Легендарный`
				this.mes = `${this.user.name44} ${this.leg}`
			}
			if(this.user.lvl44 >= 50 && this.user.petrare44 === `Легендарный`){
				this.user.lvl44 = 1
				this.user.exp44 = 0
				this.user.petrare44 = `Божественный`
				this.mes = `${this.user.name44} ${this.div}`
			}
       
if(this.user.lvl44 >= 50 && this.user.petrare44 === `Божественный`)
{ 
 	this.user.lvl44 = 100
       this.user.petrare44 = `Мировое Зло`
 	this.user.exp44 = this.user.lvl44 * this.explvl 
       this.mes = `${this.user.name44} ${this.we}`
}

 }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name44}. Редкость: ${this.user.petrare44}. Уровень: ${this.user.lvl44}. `
			if(this.user.lvl44 <50){
				this.mes += `Опыт: ${this.user.exp44}/${this.user.lvl44*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name44 = this.name
        break
//------------------------------------------- 	
      case this.P.kosfaton[5]:
//------------  5 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp45 += this.time
          this.mes = `Получено ${this.time} опыта`

while(this.user.exp45 >= this.user.lvl45 * this.explvl)
{
this.user.lvl45++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl45 >= 50 && this.user.petrare45 === `Уникальный`){
				this.user.lvl45 = 1
				this.user.exp45 = 0
				this.user.petrare45 = `Легендарный`
				this.mes = `${this.user.name45} ${this.leg}`
			}
			if(this.user.lvl45 >= 50 && this.user.petrare45 === `Легендарный`){
				this.user.lvl45 = 1
				this.user.exp45 = 0
				this.user.petrare45 = `Божественный`
				this.mes = `${this.user.name45} ${this.div}`
			}
      
if(this.user.lvl45 >= 50 && this.user.petrare45 === `Божественный`)
{ 
 	this.user.lvl45 = 100
       this.user.petrare45 = `Мировое Зло`
 	this.user.exp45 = this.user.lvl45 * this.explvl 
       this.mes = `${this.user.name45} ${this.we}`
}

  }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name45}. Редкость: ${this.user.petrare45}. Уровень: ${this.user.lvl45}. `
			if(this.user.lvl45 <50){
				this.mes += `Опыт: ${this.user.exp45}/${this.user.lvl45*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name45 = this.name
       
//------------------------------------------- 
        break
      case this.P.kosfaton[6]:
//------------  6 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp46 += this.time
          this.mes = `Получено ${this.time} опыта`
          
while(this.user.exp46 >= this.user.lvl46 * this.explvl)
{
this.user.lvl46++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl46 >= 50 && this.user.petrare46 === `Уникальный`){
				this.user.lvl46 = 1
				this.user.exp46 = 0
				this.user.petrare46 = `Легендарный`
				this.mes = `${this.user.name46} ${this.leg}`
			}
			if(this.user.lvl46 >= 50 && this.user.petrare46 === `Легендарный`){
				this.user.lvl46 = 1
				this.user.exp46 = 0
				this.user.petrare46 = `Божественный`
				this.mes = `${this.user.name46} ${this.div}`
			}
      
if(this.user.lvl46 >= 50 && this.user.petrare46 === `Божественный`)
{ 
 	this.user.lvl46 = 100
       this.user.petrare46 = `Мировое Зло`
 	this.user.exp46 = this.user.lvl46 * this.explvl 
       this.mes = `${this.user.name46} ${this.we}`
}
  }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name46}. Редкость: ${this.user.petrare46}. Уровень: ${this.user.lvl46}. `
			if(this.user.lvl46 < 50){
				this.mes += `Опыт: ${this.user.exp46}/${this.user.lvl46*this.explvl}`
		}		}
        if(this.allow === `Имя`) this.user.name46 = this.name
        
//------------------------------------------- 
        break
      case this.P.kosfaton[7]:
        break
      case this.P.kosfaton[8]:
        break
      case this.P.kosfaton[9]:
        break
    }
    
    this.msg = this.mes
    
    fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
	  return this.msg
    
  }
  
}

module.exports = kosfaton
