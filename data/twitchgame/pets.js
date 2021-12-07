function pets(){

  this.func = function(user,time,channel){

    this.time = time * 1
    this.channel = channel
    this.mes = ``
    
    switch(this.channel){
      case '#sorkevv':
        this.sorkevv = require("../twitchgame/pets/sorkevv.js")
        this.sor = new this.sorkevv()
        this.mes = this.sor.func(user,this.time)
        break
      case '#anya_vetochka': 
        this.anya_vetochka = require("../twitchgame/pets/anya_vetochka.js")
        this.any = new this.anya_vetochka()
        this.mes = this.any.func(user,this.time)
        break
      case '#kosfaton': 
        this.kosfaton = require("../twitchgame/pets/kosfaton.js")
        this.kos = new this.kosfaton()
        this.mes = this.kos.func(user,this.time)
        break
      case '#tamarix': 
        this.tamarix = require("../twitchgame/pets/tamarix.js")
        this.tam = new this.tamarix()
        this.mes = this.tam.func(user,this.time)
        break
      case '#moroz_549': 
        this.moroz_549 = require("../twitchgame/pets/moroz_549.js")
        this.mor = new this.moroz_549()
        this.mes = this.mor.func(user,this.time)
        break
    }
    return this.msg = this.mes
    
  }

  this.func1 = function(user,time,allow,name){

    this.T = require("../users/twitchfile.json")
    this.P = require("../twitchgame/pets.json")

    this.time = time * 1
    this.allow = allow
    this.user = this.T[user]
    this.name = name
    this.mes = ``
    
    if(this.P.sorkevv.lastIndexOf(this.user.pet) != -1){ 
      this.sorkevv = require("../twitchgame/pets/sorkevv.js")
      this.sor = new this.sorkevv()
      this.mes = this.sor.func1(user,this.time,this.allow,this.name)
    }
    if(this.P.anya_vetochka.lastIndexOf(this.user.pet) != -1){ 
      this.anya_vetochka = require("../twitchgame/pets/anya_vetochka.js")
      this.any = new this.anya_vetochka()
      this.mes = this.any.func1(user,this.time,this.allow,this.name)
    }
    if(this.P.kosfaton.lastIndexOf(this.user.pet) != -1){ 
      this.kosfaton = require("../twitchgame/pets/kosfaton.js")
      this.kos = new this.kosfaton()
      this.mes = this.kos.func1(user,this.time,this.allow,this.name)
    } 
    if(this.P.tamarix.lastIndexOf(this.user.pet) != -1){ 
      this.tamarix = require("../twitchgame/pets/tamarix.js")
      this.tam = new this.tamarix()
      this.mes = this.tam.func1(user,this.time,this.allow,this.name) 
    }
    if(this.P.moroz_549.lastIndexOf(this.user.pet) != -1){ 
      this.moroz_549 = require("../twitchgame/pets/moroz_549.js")
      this.mor = new this.moroz_549()
      this.mes = this.mor.func1(user,this.time,this.allow,this.name) 
    }

    return this.msg = this.mes
    
  }

}

module.exports = pets

