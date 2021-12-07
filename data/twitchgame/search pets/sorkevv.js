const fs = require("fs")

function replacer(key,value){return value}

function search(value){

}

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

    this.func = function(user,time){

        this.T = require("../../users/twitchfile.json")
        this.P = require("../pets.json")

        this.user = this.T[user]
        this.time = time * 1

        this.randompet = this.P.sorkevv[Math.floor(Math.random() * this.P.sorkevv.length)]
        if(this.user.pet === "Пусто" && this.randompet != this.P.sorkevv[0]){this.user.pet = this.randompet} 

        this.rand1 = this.Random(1,this.r)
        this.rand2 = this.Random(1,this.r)
        if(this.rand1 >= this.rand2 - this.time && this.rand1 <= this.rand2 + this.time){

            //------------  1 питомец  ------------------   
            if(this.user.pet0 === undefined){
                if(this.user.pet === "Пусто"){this.user.pet = this.P.sorkevv[0]} 
                this.user.pet0 = this.P.sorkevv[0]
                this.user.name0 = this.P.sorkevv[0]
                this.user.lvl0 = 1
                this.user.exp0 = 0   
                this.user.petrare0 = `Легендарный`   
                this.mes = `. Найден легендарный питомец "${this.P.sorkevv[0]}"`
            }
            else if(this.user.pet0 != undefined && this.user.lvl0 <= 50){
                this.user.exp0 += this.time + (this.time * this.user.lvl0)
                this.mes = `. Найден легендарный питомец "${this.P.sorkevv[0]}"${this.doplvl}`

                while(this.user.exp0 >= this.user.lvl0 * this.explvl){
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

                if(this.user.lvl0 >= 50 && this.user.petrare0 === `Божественный`){ 
                    this.user.lvl0 = 100
                    this.user.petrare0 = `Мировое Зло`
                    this.user.exp0 = this.user.lvl0 * this.explvl 
                    this.mes = `${this.user.name0} ${this.we}`
                }

            }
            //------------------------------------------   

        }
        else switch(this.randompet){
            case this.P.sorkevv[1]:
                //------------  2 питомец  ------------------         
                if(this.user.pet1 === undefined){
                    this.user.pet1 = this.P.sorkevv[1]
                    this.user.name1 = this.P.sorkevv[1]
                    this.user.lvl1 = 1
                    this.user.exp1 = 0       
                    this.user.petrare1 = `Уникальный`
                    this.mes = `${this.un}"${this.P.sorkevv[1]}"`
                }
                else if(this.user.pet1 != undefined && this.user.lvl1 <= 50){
                    this.user.exp1 += this.time + (this.time * this.user.lvl1)
                    this.mes = `${this.un}"${this.P.sorkevv[1]}"${this.doplvl}`

                    while(this.user.exp1 >= this.user.lvl1 * this.explvl){
                        this.user.lvl1++ 
                        if(this.meslvl === 1){this.mes += this.lvlup}
                        this.meslvl++
                    }

                    if(this.user.lvl1 >= 50 && this.user.petrare1 === `Уникальный`){
                        this.user.lvl1 = 1
                        this.user.exp1 = 0
                        this.user.petrare1 = `Легендарный`
                        this.mes = `${this.user.name1} ${this.leg}`
                    }

                    if(this.user.lvl1 >= 50 && this.user.petrare1 === `Легендарный`){
                        this.user.lvl1 = 1
                        this.user.exp1 = 0
                        this.user.petrare1 = `Божественный`
                        this.mes = `${this.user.name1} ${this.div}`
                    }

                    if(this.user.lvl1 >= 50 && this.user.petrare1 === `Божественный`){ 
                        this.user.lvl1 = 100
                        this.user.petrare1 = `Мировое Зло`
                        this.user.exp1 = this.user.lvl1 * this.explvl 
                        this.mes = `${this.user.name1} ${this.we}`
                    }

                } 
                //------------------------------------------ 
            break
            case this.P.sorkevv[2]:
            //------------  3 питомец  ------------------         
            if(this.user.pet2 === undefined){
            this.user.pet2 = this.P.sorkevv[2]
            this.user.name2 = this.P.sorkevv[2]
            this.user.lvl2 = 1
            this.user.exp2 = 0    
            this.user.petrare2 = `Уникальный`   
            this.mes = `${this.un}"${this.P.sorkevv[2]}"`
            }
            else if(this.user.pet2 != undefined && this.user.lvl2 <= 50){
            this.user.exp2 += this.time + (this.time * this.user.lvl2)
            this.mes = `${this.un}"${this.P.sorkevv[2]}"${this.doplvl}`


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
            //------------------------------------------ 
            break
            case this.P.sorkevv[3]:
            //------------  4 питомец  ------------------         
            if(this.user.pet3 === undefined){
            this.user.pet3 = this.P.sorkevv[3]
            this.user.name3 = this.P.sorkevv[3]
            this.user.lvl3 = 1
            this.user.exp3 = 0        
            this.user.petrare3 = `Уникальный`
            this.mes = `${this.un}"${this.P.sorkevv[3]}"`
            }
            else if(this.user.pet3 != undefined && this.user.lvl3 <= 50){
            this.user.exp3 += this.time + (this.time * this.user.lvl3)
            this.mes = `${this.un}"${this.P.sorkevv[3]}"${this.doplvl}`


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
            //------------------------------------------       
            break
            case this.P.sorkevv[4]:
            //------------  5 питомец  ------------------         
            if(this.user.pet4 === undefined){
            this.user.pet4 = this.P.sorkevv[4]
            this.user.name4 = this.P.sorkevv[4]
            this.user.lvl4 = 1
            this.user.exp4 = 0      
            this.user.petrare4 = `Уникальный` 
            this.mes = `${this.un}"${this.P.sorkevv[4]}"`
            }
            else if(this.user.pet4 != undefined && this.user.lvl4 <= 50){
            this.user.exp4 += this.time + (this.time * this.user.lvl4)
            this.mes = `${this.un}"${this.P.sorkevv[4]}"${this.doplvl}`


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
            //------------------------------------------        
            break
            case this.P.sorkevv[5]:
            //------------  6 питомец  ------------------         
            if(this.user.pet5 === undefined){
            this.user.pet5 = this.P.sorkevv[5]
            this.user.name5 = this.P.sorkevv[5]
            this.user.lvl5 = 1
            this.user.exp5 = 0     
            this.user.petrare5 = `Уникальный`
            this.mes = `${this.un}"${this.P.sorkevv[5]}"`
            }
            else if(this.user.pet5 != undefined && this.user.lvl5 <= 50){
            this.user.exp5 += this.time + (this.time * this.user.lvl5)
            this.mes = `${this.un}"${this.P.sorkevv[5]}"${this.doplvl}`


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
            //------------------------------------------ 
            break
            case this.P.sorkevv[6]:
            //------------  7 питомец  ------------------         
            if(this.user.pet6 === undefined){
            this.user.pet6 = this.P.sorkevv[6]
            this.user.name6 = this.P.sorkevv[6]
            this.user.lvl6 = 1
            this.user.exp6 = 0     
            this.user.petrare6 = `Уникальный`
            this.mes = `${this.un}"${this.P.sorkevv[6]}"`
            }
            else if(this.user.pet6 != undefined && this.user.lvl6 <= 50){
            this.user.exp6 += this.time + (this.time * this.user.lvl6)
            this.mes = `${this.un}"${this.P.sorkevv[6]}"${this.doplvl}`


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
            //------------------------------------------ 
            break
            case this.P.sorkevv[7]:
            //------------  8 питомец  ------------------         
            if(this.user.pet7 === undefined){
            this.user.pet7 = this.P.sorkevv[7]
            this.user.name7 = this.P.sorkevv[7]
            this.user.lvl7 = 1
            this.user.exp7 = 0     
            this.user.petrare7 = `Уникальный`
            this.mes = `${this.un}"${this.P.sorkevv[7]}"`
            }
            else if(this.user.pet7 != undefined && this.user.lvl7 <= 50){
            this.user.exp7 += this.time + (this.time * this.user.lvl7)
            this.mes = `${this.un}"${this.P.sorkevv[7]}"${this.doplvl}`


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
            //------------------------------------------ 
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
