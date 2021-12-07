const fs = require("fs")
function replacer(key,value){return value}

function tamarix(){
  
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
        
    this.randompet = this.P.tamarix[Math.floor(Math.random() * this.P.tamarix.length)]
    if(this.user.pet === "Пусто" && this.randompet != this.P.tamarix[0]) this.user.pet = this.randompet
    
    this.rand1 = this.Random(1,this.r)
    this.rand2 = this.Random(1,this.r)
    if(this.rand1 >= this.rand2 - this.time && this.rand1 <= this.rand2 + this.time){

//------------  1 питомец  ------------------   
      if(this.user.pet10 === undefined){
        if(this.user.pet === "Пусто") this.user.pet = this.P.tamarix[0]
        this.user.pet10 = this.P.tamarix[0]
        this.user.name10 = this.P.tamarix[0]
        this.user.lvl10 = 1
        this.user.exp10 = 0 
		this.user.petrare10 = `Легендарный`
        this.mes = `. Найден легендарный питомец "${this.P.tamarix[0]}"`
      }
      else if(this.user.pet10 != undefined && this.user.lvl10 <= 50){
        this.user.exp10 += this.time + (this.time * this.user.lvl10)
        this.mes = `. Найден легендарный питомец "${this.P.tamarix[0]}"${this.doplvl}`


        while(this.user.exp10 >= this.user.lvl10 * this.explvl)
{
this.user.lvl10++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}


			if(this.user.lvl10 >= 50 && this.user.petrare10 === `Легендарный`){
				this.user.lvl10 = 1
				this.user.exp10 = 0
				this.user.petrare10 = `Божественный`
				this.mes = `${this.user.name10} ${this.div}`
			}


if(this.user.lvl10 >= 50 && this.user.petrare10 === `Божественный`)
{ 
 	this.user.lvl10 = 100
       this.user.petrare10 = `Мировое Зло`
 	this.user.exp10 = this.user.lvl10 * this.explvl 
       this.mes = `${this.user.name10} ${this.we}`
}

      }


//------------------------------------------  

    }
    else switch(this.randompet){
      case this.P.tamarix[1]:


//------------  2 питомец  ------------------         


        if(this.user.pet11 === undefined){
          this.user.pet11 = this.P.tamarix[1]
          this.user.name11 = this.P.tamarix[1]
          this.user.lvl11 = 1
          this.user.exp11 = 0   
		  this.user.petrare11 = `Уникальный`
          this.mes = `${this.un}"${this.P.tamarix[1]}"`
        }
        else if(this.user.pet11 != undefined && this.user.lvl11 <= 50){
          this.user.exp11 += this.time + (this.time * this.user.lvl11)
          this.mes = `${this.un}"${this.P.tamarix[1]}"${this.doplvl}`


        while(this.user.exp11 >= this.user.lvl11 * this.explvl)
{
this.user.lvl11++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}
	

			if(this.user.lvl11 >= 50 && this.user.petrare11 === `Уникальный`){
				this.user.lvl11 = 1
				this.user.exp11 = 0
				this.user.petrare11 = `Легендарный`
				this.mes = `${this.user.name11} ${this.leg}`
			}
			if(this.user.lvl11 >= 50 && this.user.petrare11 === `Легендарный`){
				this.user.lvl11 = 1
				this.user.exp11 = 0
				this.user.petrare11 = `Божественный`
				this.mes = `${this.user.name11} ${this.div}`
			}


if(this.user.lvl11 >= 50 && this.user.petrare11 === `Божественный`)
{ 
 	this.user.lvl11 = 100
       this.user.petrare11 = `Мировое Зло`
 	this.user.exp11 = this.user.lvl11 * this.explvl 
       this.mes = `${this.user.name11} ${this.we}`
}} 


//------------------------------------------ 


        break





case this.P.tamarix[2]:


//------------  3 питомец  ------------------         


        if(this.user.pet12 === undefined){
          this.user.pet12 = this.P.tamarix[2]
          this.user.name12 = this.P.tamarix[2]
          this.user.lvl12 = 1
          this.user.exp12 = 0   
		  this.user.petrare12 = `Уникальный`
          this.mes = `${this.un}"${this.P.tamarix[2]}"`
        }
        else if(this.user.pet12 != undefined && this.user.lvl12 <= 50){
          this.user.exp12 += this.time + (this.time * this.user.lvl12)
          this.mes = `${this.un}"${this.P.tamarix[2]}"${this.doplvl}`


        while(this.user.exp12 >= this.user.lvl12 * this.explvl)
{
this.user.lvl12++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}
	

			if(this.user.lvl12 >= 50 && this.user.petrare12 === `Уникальный`){
				this.user.lvl12 = 1
				this.user.exp12 = 0
				this.user.petrare12 = `Легендарный`
				this.mes = `${this.user.name12} ${this.leg}`
			}
			if(this.user.lvl12 >= 50 && this.user.petrare12 === `Легендарный`){
				this.user.lvl12 = 1
				this.user.exp12 = 0
				this.user.petrare12 = `Божественный`
				this.mes = `${this.user.name12} ${this.div}`
			}


if(this.user.lvl12 >= 50 && this.user.petrare12 === `Божественный`)
{ 
 	this.user.lvl12 = 100
       this.user.petrare12 = `Мировое Зло`
 	this.user.exp12 = this.user.lvl12 * this.explvl 
       this.mes = `${this.user.name12} ${this.we}`
}
        } 


//------------------------------------------ 


        break





case this.P.tamarix[3]:


//------------  4 питомец  ------------------         


        if(this.user.pet13 === undefined){
          this.user.pet13 = this.P.tamarix[3]
          this.user.name13 = this.P.tamarix[3]
          this.user.lvl13 = 1
          this.user.exp13 = 0   
		  this.user.petrare13 = `Уникальный`
          this.mes = `${this.un}"${this.P.tamarix[3]}"`
        }
        else if(this.user.pet13 != undefined && this.user.lvl13 <= 50){
          this.user.exp13 += this.time + (this.time * this.user.lvl13)
          this.mes = `${this.un}"${this.P.tamarix[3]}"${this.doplvl}`


        while(this.user.exp13 >= this.user.lvl13 * this.explvl)
{
this.user.lvl13++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}
	

			if(this.user.lvl13 >= 50 && this.user.petrare13 === `Уникальный`){
				this.user.lvl13 = 1
				this.user.exp13 = 0
				this.user.petrare13 = `Легендарный`
				this.mes = `${this.user.name13} ${this.leg}`
			}
			if(this.user.lvl13 >= 50 && this.user.petrare13 === `Легендарный`){
				this.user.lvl13 = 1
				this.user.exp13 = 0
				this.user.petrare13 = `Божественный`
				this.mes = `${this.user.name13} ${this.div}`
			}


if(this.user.lvl13 >= 50 && this.user.petrare13 === `Божественный`)
{ 
 	this.user.lvl13 = 100
       this.user.petrare13 = `Мировое Зло`
 	this.user.exp13 = this.user.lvl13 * this.explvl 
       this.mes = `${this.user.name13} ${this.we}`
}
        } 


//------------------------------------------ 


        break





     case this.P.tamarix[4]: 
//------------  5 питомец  ------------------         
        if(this.user.pet14 === undefined){
          this.user.pet14 = this.P.tamarix[4]
          this.user.name14 = this.P.tamarix[4]
          this.user.lvl14 = 1
          this.user.exp14 = 0   
		  this.user.petrare14 = `Уникальный`
          this.mes = `${this.un}"${this.P.tamarix[4]}"`
        }
        else if(this.user.pet14 != undefined && this.user.lvl14 <= 50){
          this.user.exp14 += this.time + (this.time * this.user.lvl14)
          this.mes = `${this.un}"${this.P.tamarix[4]}"${this.doplvl}`
          

while(this.user.exp14 >= this.user.lvl14 * this.explvl)
{
this.user.lvl14++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}


            if(this.user.lvl14 >= 50 && this.user.petrare14 === `Уникальный`){
				this.user.lvl14 = 1
				this.user.exp14 = 0
				this.user.petrare14 = `Легендарный`
				this.mes = `${this.user.name14} ${this.leg}`
			}
			if(this.user.lvl14 >= 50 && this.user.petrare14 === `Легендарный`){
				this.user.lvl14 = 1
				this.user.exp14 = 0
				this.user.petrare14 = `Божественный`
				this.mes = `${this.user.name14} ${this.div}`
			}




        if(this.user.lvl14 >= 50 && this.user.petrare14 === `Божественный`)
{ 
 	this.user.lvl14 = 100
       this.user.petrare14 = `Мировое Зло`
 	this.user.exp14 = this.user.lvl14 * this.explvl 
       this.mes = `${this.user.name14} ${this.we}`
}
       } 

//------------------------------------------       
        break

case this.P.tamarix[5]:
	  //------------  6 питомец  ------------------         
        if(this.user.pet15 === undefined){
          this.user.pet15 = this.P.tamarix[5]
          this.user.name15 = this.P.tamarix[5]
          this.user.lvl15 = 1
          this.user.exp15 = 0   
		  this.user.petrare15 = `Уникальный`
          this.mes = `${this.un}"${this.P.tamarix[5]}"`
        }
        else if(this.user.pet15 != undefined && this.user.lvl15 <= 50){
          this.user.exp15 += this.time + (this.time * this.user.lvl15)
          this.mes = `${this.un}"${this.P.tamarix[5]}"${this.doplvl}`


while(this.user.exp15 >= this.user.lvl15 * this.explvl)
{
this.user.lvl15++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl15 >= 50 && this.user.petrare15 === `Уникальный`){
				this.user.lvl15 = 1
				this.user.exp15 = 0
				this.user.petrare15 = `Легендарный`
				this.mes = `${this.user.name15} ${this.leg}`
			}
			if(this.user.lvl15 >= 50 && this.user.petrare15 === `Легендарный`){
				this.user.lvl15 = 1
				this.user.exp15 = 0
				this.user.petrare15 = `Божественный`
				this.mes = `${this.user.name15} ${this.div}`
			}
    

if(this.user.lvl15 >= 50 && this.user.petrare15 === `Божественный`)
{ 
 	this.user.lvl15 = 100
       this.user.petrare15 = `Мировое Зло`
 	this.user.exp15 = this.user.lvl15 * this.explvl 
       this.mes = `${this.user.name15} ${this.we}`
}

    } 
//------------------------------------------ 
        break
      case this.P.tamarix[6]:
        break
      case this.P.tamarix[7]:
        break
      case this.P.tamarix[8]:
        break
      case this.P.tamarix[9]:
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
      case this.P.tamarix[0]:
//------------  1 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp10 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp10 >= this.user.lvl10 * this.explvl)
{
this.user.lvl10++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl10 >= 50 && this.user.petrare10 === `Легендарный`){
				this.user.lvl10 = 1
				this.user.exp10 = 0
				this.user.petrare10 = `Божественный`
				this.mes = `${this.user.name10} ${this.div}`
			}
        

if(this.user.lvl10 >= 50 && this.user.petrare10 === `Божественный`)
{ 
 	this.user.lvl10 = 100
       this.user.petrare10 = `Мировое Зло`
 	this.user.exp10 = this.user.lvl10 * this.explvl 
       this.mes = `${this.user.name10} ${this.we}`
}

}
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name10}. Редкость: ${this.user.petrare10}. Уровень: ${this.user.lvl10}. `
			if(this.user.lvl10 <50){
				this.mes += `Опыт: ${this.user.exp10}/${this.user.lvl10*this.explvl}`
			}	
		}			
        if(this.allow === `Имя`) this.user.name10 = this.name
//------------------------------------------- 
        break
      case this.P.tamarix[1]:
//------------  2 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp11 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp11 >= this.user.lvl11 * this.explvl)
{
this.user.lvl11++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl11 >= 50 && this.user.petrare11 === `Уникальный`){
				this.user.lvl11 = 1
				this.user.exp11 = 0
				this.user.petrare11 = `Легендарный`
				this.mes = `${this.user.name11} ${this.leg}`
			}
			if(this.user.lvl11 >= 50 && this.user.petrare11 === `Легендарный`){
				this.user.lvl11 = 1
				this.user.exp11 = 0
				this.user.petrare11 = `Божественный`
				this.mes = `${this.user.name11} ${this.div}`
			}
       

if(this.user.lvl11 >= 50 && this.user.petrare11 === `Божественный`)
{ 
 	this.user.lvl11 = 100
       this.user.petrare11 = `Мировое Зло`
 	this.user.exp11 = this.user.lvl11 * this.explvl 
       this.mes = `${this.user.name11} ${this.we}`
}

 }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name11}. Редкость: ${this.user.petrare11}. Уровень: ${this.user.lvl11}. `
			if(this.user.lvl11 <50){
				this.mes += `Опыт: ${this.user.exp11}/${this.user.lvl11*this.explvl}`
			}		
		}
        if(this.allow === `Имя`) this.user.name11 = this.name
//------------------------------------------- 
        break
      case this.P.tamarix[2]:
//------------  3 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp12 += this.time
          this.mes = `Получено ${this.time} опыта`
          



while(this.user.exp12 >= this.user.lvl12 * this.explvl)
{
this.user.lvl12++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl12 >= 50 && this.user.petrare12 === `Уникальный`){
				this.user.lvl12 = 1
				this.user.exp12 = 0
				this.user.petrare12 = `Легендарный`
				this.mes = `${this.user.name12} ${this.leg}`
			}
			if(this.user.lvl12 >= 50 && this.user.petrare12 === `Легендарный`){
				this.user.lvl12 = 1
				this.user.exp12 = 0
				this.user.petrare12 = `Божественный`
				this.mes = `${this.user.name12} ${this.div}`
			}
       

if(this.user.lvl12 >= 50 && this.user.petrare12 === `Божественный`)
{ 
 	this.user.lvl12 = 100
       this.user.petrare12 = `Мировое Зло`
 	this.user.exp12 = this.user.lvl12 * this.explvl 
       this.mes = `${this.user.name12} ${this.we}`
}


 }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name12}. Редкость: ${this.user.petrare12}. Уровень: ${this.user.lvl12}. `
			if(this.user.lvl12 <50){
				this.mes += `Опыт: ${this.user.exp12}/${this.user.lvl12*this.explvl}`
			}		
		}
        if(this.allow === `Имя`) this.user.name12 = this.name
//------------------------------------------- 
        break
      case this.P.tamarix[3]:
//------------  4 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp13 += this.time
          this.mes = `Получено ${this.time} опыта`


while(this.user.exp13 >= this.user.lvl13 * this.explvl)
{
this.user.lvl13++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl13 >= 50 && this.user.petrare13 === `Уникальный`){
				this.user.lvl13 = 1
				this.user.exp13 = 0
				this.user.petrare13 = `Легендарный`
				this.mes = `${this.user.name13} ${this.leg}`
			}
			if(this.user.lvl13 >= 50 && this.user.petrare13 === `Легендарный`){
				this.user.lvl13 = 1
				this.user.exp13 = 0
				this.user.petrare13 = `Божественный`
				this.mes = `${this.user.name13} ${this.div}`
			}
     

if(this.user.lvl13 >= 50 && this.user.petrare13 === `Божественный`)
{ 
 	this.user.lvl13 = 100
       this.user.petrare13 = `Мировое Зло`
 	this.user.exp13 = this.user.lvl13 * this.explvl 
       this.mes = `${this.user.name13} ${this.we}`
}


   }
        if(this.allow === `Профиль`) {
          this.mes = `Имя: ${this.user.name13}. Редкость: ${this.user.petrare13}. Уровень: ${this.user.lvl13}. `
			if(this.user.lvl13 <50){
				this.mes += `Опыт: ${this.user.exp13}/${this.user.lvl13*this.explvl}`
			}		
		}
        if(this.allow === `Имя`) this.user.name13 = this.name
//------------------------------------------- 
        break
      case this.P.tamarix[4]:
	  //------------  5 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp14 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp14 >= this.user.lvl14 * this.explvl)
{
this.user.lvl14++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl14 >= 50 && this.user.petrare14 === `Уникальный`){
				this.user.lvl14 = 1
				this.user.exp14 = 0
				this.user.petrare14 = `Легендарный`
				this.mes = `${this.user.name14} ${this.leg}`
			}
			if(this.user.lvl14 >= 50 && this.user.petrare14 === `Легендарный`){
				this.user.lvl14 = 1
				this.user.exp14 = 0
				this.user.petrare14 = `Божественный`
				this.mes = `${this.user.name14} ${this.div}`
			}
      

if(this.user.lvl14 >= 50 && this.user.petrare14 === `Божественный`)
{ 
 	this.user.lvl14 = 100
       this.user.petrare14 = `Мировое Зло`
 	this.user.exp14 = this.user.lvl14 * this.explvl 
       this.mes = `${this.user.name14} ${this.we}`
}


  }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name14}. Редкость: ${this.user.petrare14}. Уровень: ${this.user.lvl14}. `
			if(this.user.lvl14 <50){
				this.mes += `Опыт: ${this.user.exp14}/${this.user.lvl14*this.explvl}`
			}		
		}
        if(this.allow === `Имя`) this.user.name14 = this.name
//------------------------------------------- 
        break
      case this.P.tamarix[5]:
	  //------------  6 питомец  ------------------   
        if(this.allow === `Опыт`){
          this.user.exp15 += this.time
          this.mes = `Получено ${this.time} опыта`
          

while(this.user.exp15 >= this.user.lvl15 * this.explvl)
{
this.user.lvl15++ 
if(this.meslvl === 1){this.mes += this.lvlup}
this.meslvl++
}

			if(this.user.lvl15 >= 50 && this.user.petrare15 === `Уникальный`){
				this.user.lvl15 = 1
				this.user.exp15 = 0
				this.user.petrare15 = `Легендарный`
				this.mes = `${this.user.name15} ${this.leg}`
			}
			if(this.user.lvl15 >= 50 && this.user.petrare15 === `Легендарный`){
				this.user.lvl15 = 1
				this.user.exp15 = 0
				this.user.petrare15 = `Божественный`
				this.mes = `${this.user.name15} ${this.div}`
			}
       

if(this.user.lvl15 >= 50 && this.user.petrare15 === `Божественный`)
{ 
 	this.user.lvl15 = 100
       this.user.petrare15 = `Мировое Зло`
 	this.user.exp15 = this.user.lvl15 * this.explvl 
       this.mes = `${this.user.name15} ${this.we}`
}

 }
        if(this.allow === `Профиль`){ 
          this.mes = `Имя: ${this.user.name15}. Редкость: ${this.user.petrare15}. Уровень: ${this.user.lvl15}. `
			if(this.user.lvl15 <50){
				this.mes += `Опыт: ${this.user.exp15}/${this.user.lvl15*this.explvl}`
			}		
		}
        if(this.allow === `Имя`) this.user.name15 = this.name
//------------------------------------------- 
        break
      case this.P.tamarix[6]:
        break
      case this.P.tamarix[7]:
        break
      case this.P.tamarix[8]:
        break
      case this.P.tamarix[9]:
        break
    }
    
    this.msg = this.mes
    
    fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})
	  return this.msg
    
  }
  
}

module.exports = tamarix
