function collection(){

  this.isNumeric = function(forwrite){return !isNaN(parseFloat(forwrite)) && isFinite(forwrite)}

  this.func = function(user,args,chat){

    this.chat = chat

    if(!args[0] || !this.isNumeric(args[0]) || args[0] <= 0 || args[0] > 5){ 
      this.mes = `?коллекция [страница от 1 до 5]`
      if(this.chat === `ls`) return this.msg = `/w ${user} ${this.mes}`
      if(this.chat === `chat`) return this.msg = `${user}, ${this.mes}`
    }

    this.T = require("../users/twitchfile.json") 
    this.user = this.T[user]
    this.mes = ``
    this.count = 1
    this.collection = 1

    switch(args[0]){
      case '1':
        this.collection_sorkevv = [this.user.pet0,this.user.pet1,this.user.pet2,this.user.pet3,this.user.pet4,
                                   this.user.pet5,this.user.pet6,this.user.pet7,this.user.pet8,this.user.pet9]
        this.collection = this.collection_sorkevv
      break  
      case '2':
        this.collection_tamarix = [this.user.pet10,this.user.pet11,this.user.pet12,this.user.pet13,this.user.pet14,
                                   this.user.pet15,this.user.pet16,this.user.pet17,this.user.pet18,this.user.pet19]
        this.collection = this.collection_tamarix
        this.count = 11
      break   
      case '3':
        this.collection_moroz_549 = [this.user.pet20,this.user.pet21,this.user.pet22,this.user.pet23,this.user.pet24,
                                     this.user.pet25,this.user.pet26,this.user.pet27,this.user.pet28,this.user.pet29]
        this.collection = this.collection_moroz_549
        this.count = 21
      break   
      case '4':
        this.collection_anya_vetochka = [this.user.pet30,this.user.pet31,this.user.pet32,this.user.pet33,this.user.pet34,
                                         this.user.pet35,this.user.pet36,this.user.pet37,this.user.pet38,this.user.pet39]
        this.collection = this.collection_anya_vetochka
        this.count = 31
      break   
      case '5':
        this.collection_kosfaton = [this.user.pet40,this.user.pet41,this.user.pet42,this.user.pet43,this.user.pet44,
                                    this.user.pet45,this.user.pet46,this.user.pet47,this.user.pet48,this.user.pet49]
        this.collection = this.collection_kosfaton
        this.count = 41
      break 
    }

    for(var i=0;i<this.collection.length;i++){
      if(this.collection[i] != undefined) this.mes += `${this.count+i}. ${this.collection[i]}; `
    }
    if(this.mes === ``) this.mes = "В коллекции нет питомцев"

    if(this.chat === `ls`) return this.msg = `/w ${user} ${this.mes}`
    if(this.chat === `chat`) return this.msg = `${user}, ${this.mes}`

  }

}

module.exports = collection

