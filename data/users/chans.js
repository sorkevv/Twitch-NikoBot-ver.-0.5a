function chans(){

  this.chanf = function(user, channel){
    
    this.A = require("../users/arrays.json")

    switch(channel){
      case '#sorkevv': 
        this.chan = this.A.sorkevv
        break
      case '#anya_vetochka': 
        this.chan = this.A.anya_vetochka
        break
      case '#kosfaton': 
        this.chan = this.A.kosfaton
        break
      case '#tamarix': 
        this.chan = this.A.tamarix
        break
      case '#moroz_549': 
        this.chan = this.A.moroz_549
        break 
    }

    return this.chan
    
  }
  
  this.chatf = function(user, channel){
    
    this.A = require("../users/admin.json")

    switch(channel){
      case '#sorkevv': 
        this.chat = this.A["Sorkevv"].chat
        break
      case '#anya_vetochka': 
        this.chat = this.A["Anya_vetochka"].chat
        break
      case '#kosfaton': 
        this.chat = this.A["kosfaton"].chat
        break
      case '#tamarix': 
        this.chat = this.A["TamaRix"].chat
        break
      case '#moroz_549': 
        this.chat = this.A["MoRoZ_549"].chat
        break
    }

    return this.chat
    
  }

}

module.exports = chans