const fs = require("fs")

function part(){

  function replacer(key,value){return value}

  this.func = function(user, channel){

    this.A = require("../users/arrays.json")

    if(this.A.ban_list.lastIndexOf(user) != -1) return

    console.log(`${user} вышел со стрима ${channel}`)

    function partf(userp){
      this.result = false
      if(userp != user){this.result = true}
      return this.result
    }

    switch(channel){
      case '#sorkevv': 
        this.A.sorkevv = this.A.sorkevv.filter(partf) 
      break
      case '#anya_vetochka': 
        this.A.anya_vetochka = this.A.anya_vetochka.filter(partf) 
      break
      case '#kosfaton': 
        this.A.kosfaton = this.A.kosfaton.filter(partf) 
      break
      case '#tamarix': 
        this.A.tamarix = this.A.tamarix.filter(partf) 
      break
      case '#moroz_549': 
        this.A.moroz_549 = this.A.moroz_549.filter(partf) 
      break
    }

    fs.writeFileSync("./data/users/arrays.json", JSON.stringify(this.A, replacer, "\t"), (err) => {if(err) console.log(err)}) 

  }

}

module.exports = part
