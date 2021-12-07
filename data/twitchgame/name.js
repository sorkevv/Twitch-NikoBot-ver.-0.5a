function name(){

  this.func = function(user,args,chat){

    this.isNumeric = function(forwrite){return !isNaN(parseFloat(forwrite)) && isFinite(forwrite)}
    this.T = require("../users/twitchfile.json")

    if(!args[0] || this.isNumeric(args[0]) || args[0].length < 3 || args[0].length > 10 || 
    this.T[user].petname === undefined || this.T[user].pet === "Пусто" || this.T[user].adventure != 0){ 
      return this.mes = `Отказано!`
      if(this.chat === `ls`) return this.msg = `/w ${user} ${this.mes}`
      if(this.chat === `chat`) return this.msg = `${user}, ${this.mes}`
    }

    this.pets = require("../twitchgame/pets.js")
    this.P = new this.pets()

    this.user = this.T[user]
    this.allow = `Имя`
    this.chat = chat
    this.name = args[0]

    this.mes = `Имя питомца изменено на "${this.name}"`
    this.P.func1(user,0,this.allow,this.name)

    if(this.chat === `ls`) return this.msg = `/w ${user} ${this.mes}`
    if(this.chat === `chat`) return this.msg = `${user}, ${this.mes}`

  }

}

module.exports = name
