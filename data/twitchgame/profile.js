function profile(){

  this.func = function(user,chat){

    this.T = require("../users/twitchfile.json")
    this.pets = require("../twitchgame/pets.js")
    this.P = new this.pets()
    
    this.user = this.T[user]
    this.mes = `Пусто`
    this.allow = `Профиль`
    this.chat = chat
       
    if(this.user.pet != "Пусто") this.mes = `Питомец: ${this.user.pet}. ${this.P.func1(user,0,this.allow,0)}`

    if(this.chat === `ls`) return this.msg = `/w ${user} ${this.mes}`
    if(this.chat === `chat`) return this.msg = `${user}, ${this.mes}`
    
  }
  
}

module.exports = profile
