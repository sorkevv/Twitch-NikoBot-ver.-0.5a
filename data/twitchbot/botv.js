function botv(user,chat){
  
    this.chat = chat
    this.T = require("../users/twitchfile.json")

		this.phrases = [`угу`, `нет`, `ага`,	`сомнительно`, `наверняка`, `не-а`,	`может быть`, `канешн`,
			`возможно нет`, `загляни глубоко в свое сердце и ты увидишь ответ`,`мои источники говорят да`, 
			`никогда`, `может быть да`, `наверно`, `возможно`, `сложна`, `без сомнения`, `звучит неплохо`, 
			`да`, `на такой вопрос даже я не в силах ответить`,`не сегодня`]
  
		this.smiles = [`Kappa`, `KappaPride`, `LUL`, `ResidentSleeper`, `PogChamp`, `CoolStoryBob`,
			`Kreygasm`, `BibleThump`, `4Head`, `BabyRage`, `CoolCat`, `NotLikeThis`, `cmonBruh`, `OpieOP`, 
			`HahaTurtledove`, `HahaThisisfine`, `HahaThink`, `HahaSleep`, `HahaPoint`, `HahaLean`, 
			`HahaHide`, `HahaCat`, `HahaDreidel`, `HahaBall`, `LuvBrownR`, `LuvSign`, `LuvBlondeR`, 
			 `sorkewDurka`, `sorkewLove`, `sorkewP`,`sorkewSleep`,`sorkewEz`,`sorkewREEE`, `sorkewDrink`, `LuvPeekL`]
 
		this.otvet = `${this.phrases[Math.floor(Math.random() * this.phrases.length)]} ${this.smiles[Math.floor(Math.random() * this.smiles.length)]}`
    
    this.mes = `Команды начинаются с "?" знака: старт, поиск [Время], профиль, коллекция [Страница], назвать [Имя], `+
      `сменить [Номер из коллекции], гайд | (?помощь2)`
	  
    if(this.chat === `ls`) this.help = `/w ${user} ${this.mes}`
    if(this.chat === `chat`) this.help = `${user}, ${this.mes}`
    
	this.mes2 = `Команды начинаются с "?" знака: бот [Вопрос], кусь, процент [Вопрос], время, слоты | (?помощь)`

    if(this.chat === `ls`) this.help2 = `/w ${user} ${this.mes2}`
    if(this.chat === `chat`) this.help2 = `${user}, ${this.mes2}`
	
	this.mes3 = `https://docs.google.com/presentation/d/1ui-k7sQ2LyGlHDiWpS2UGkVmzxECnabX1lMWTO5l_E8/edit?usp=sharing`
	
    if(this.chat === `ls`) this.guid = `/w ${user} ${this.mes3}`
    if(this.chat === `chat`) this.guid = `${user}, ${this.mes3}`
	
}

module.exports = botv