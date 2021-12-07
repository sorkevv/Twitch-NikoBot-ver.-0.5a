const fs = require("fs")
function replacer(key,value){return value}

function name(){

  this.func = function(user,args,chat){

    this.isNumeric = function(forwrite){return !isNaN(parseFloat(forwrite)) && isFinite(forwrite)}  

    this.F = function(mes){
      if(this.chat === `ls`) return this.msg = `/w ${user} ${mes}`
      if(this.chat === `chat`) return this.msg = `${user}, ${mes}`
    }

    this.chat = chat

    this.T = require("../users/twitchfile.json")
    this.user = this.T[user]

    if(!args[0] || !this.isNumeric(args[0]) || args[0] <= 0 || args[0] > 60 || this.user.adventure != 0){ 
      this.mes = `Отказано!`
      return this.msg = this.F(this.mes)
    }

    this.P = require("../twitchgame/pets.json")

    this.id = args[0] - 1
    this.vspn = `Вы сменили питомца на`
    this.no = `В вашей коллекции нет этого питомца`

    if(this.id >= 0 && this.id <= 9){ 
      this.collection_sorkevv = [this.user.pet0,this.user.pet1,this.user.pet2,this.user.pet3,this.user.pet4,
                                 this.user.pet5,this.user.pet6,this.user.pet7,this.user.pet8,this.user.pet9]
      this.pet = this.P.sorkevv[this.id] 
      if(this.collection_sorkevv[this.id] === undefined) return this.F(this.no)
      this.user.pet = this.pet
      this.mes = `${this.vspn} ${this.pet}`
    }

    if(this.id >= 10 && this.id <= 19){ 
      this.id -= 10
      this.collection_tamarix = [this.user.pet10,this.user.pet11,this.user.pet12,this.user.pet13,this.user.pet14,
                                 this.user.pet15,this.user.pet16,this.user.pet17,this.user.pet18,this.user.pet19]
      this.pet = this.P.tamarix[this.id] 
      if(this.collection_tamarix[this.id] === undefined) return this.F(this.no)
      this.user.pet = this.pet
      this.mes = `${this.vspn} ${this.pet}`
    }

    if(this.id >= 20 && this.id <= 29){ 
      this.id -= 20
      this.collection_moroz_549 = [this.user.pet20,this.user.pet21,this.user.pet22,this.user.pet23,this.user.pet24,
                                   this.user.pet25,this.user.pet26,this.user.pet27,this.user.pet28,this.user.pet29]
      this.pet = this.P.moroz_549[this.id] 
      if(this.collection_moroz_549[this.id] === undefined) return this.F(this.no)
      this.user.pet = this.pet
      this.mes = `${this.vspn} ${this.pet}`
    }

    if(this.id >= 30 && this.id <= 39){ 
      this.id -= 30
      this.collection_anya_vetochka = [this.user.pet30,this.user.pet31,this.user.pet32,this.user.pet33,this.user.pet34,
                                       this.user.pet35,this.user.pet36,this.user.pet37,this.user.pet38,this.user.pet39]
      this.pet = this.P.anya_vetochka[this.id] 
      console.log(this.pet)
      if(this.collection_anya_vetochka[this.id] === undefined) return this.F(this.no)
      this.user.pet = this.pet
      this.mes = `${this.vspn} ${this.pet}`
    }  

    if(this.id >= 40 && this.id <= 49){ 
      this.id -= 40
      this.collection_kosfaton = [this.user.pet40,this.user.pet41,this.user.pet42,this.user.pet43,this.user.pet44,
                                  this.user.pet45,this.user.pet46,this.user.pet47,this.user.pet48,this.user.pet49]
      this.pet = this.P.kosfaton[this.id] 
      if(this.collection_kosfaton[this.id] === undefined) return this.F(this.no)
      this.user.pet = this.pet
      this.mes = `${this.vspn} ${this.pet}`
    }

    fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(this.T, replacer, "\t"), (err) => {if(err) console.log(err)})

    return this.msg = this.F(this.mes)

  }

}

module.exports = name

