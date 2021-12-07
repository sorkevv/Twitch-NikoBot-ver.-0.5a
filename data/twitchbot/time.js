function time(){
  
  this.func = function(uptime){
    
    this.time = uptime
    this.msg = `Бот онлайн ${this.time} мин.`
    if(this.time < 1) this.msg = `Бот онлайн <1 мин.`
    this.hour = 0
    this.minute = 0
    
    while(this.time >= 60){
      
      this.time -= 60
      this.hour++
      
      this.msg = `Бот онлайн ${this.hour} ч. ${this.time} мин.` 

      if(this.time <= 0) this.msg = `Бот онлайн ${this.hour} ч.` 
      
    }
    
    return this.msg
    
  }
  
}

module.exports = time
