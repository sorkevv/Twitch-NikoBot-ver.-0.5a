function inventary(){

  this.func = function(user,chat){

    this.T = require("../users/twitchfile.json")
    
    this.user = this.T[user]
    this.mes = `Пусто`
    this.chat = chat
      
    if(this.user.weapon) this.mes += `Оружие: ${this.user.weapon}(${this.user.weapon_rare}). `
    if(this.user.item_search) this.mes += `Поиск: ${this.user.item_search}(${this.user.item_search_rare}). `
    if(this.user.item_exp) this.mes += `Опыт: ${this.user.item_exp}(${this.user.item_exp_rare})`

    if(this.chat === `ls`) return this.msg = `/w ${user} ${this.mes}`
    if(this.chat === `chat`) return this.msg = `${user}, ${this.mes}`
    
  }
  
}

module.exports = inventary
