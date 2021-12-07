const fs = require("fs")
const tmi = require('tmi.js')
const botconfig = require("./botconfig.json")
const password = botconfig.password

const options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "nameBot////////", 
		password: password
	},
	channels: ["channels////////"]
}
// ГЛОБАЛЬНЫЙ ПЕРЕМЕННЫЕ
const client = new tmi.client(options)

// зритель зашел на стрим
let join = require("./data/users/join.js")
let J = new join()

// зритель вышел со стрима
let part = require("./data/users/part.js")
let Pt = new part()

// при включении бота
// очистка массивов
let clear = require("./data/users/clear.js")
let Cf = new clear()
let Adv = require("./data/users/adventure.json")
let T = require("./data/users/twitchfile.json")
let adventure = []
let reserve_t = require("./data/users/reserve_twitchfile.json")
let uptime = 0
let arrive = require("./data/twitchgame/arrive.js")
let A = new arrive()
// рейд
let RaidBossChannel = require("./data/twitchgame/raidboss.js")
let RB = new RaidBossChannel()
let RaidChannel = require("./data/twitchgame/raid.js")
let RF = new RaidChannel()
let raid_list = []
let raid_channel_list = []
let raid_cooldown = 0
let raid_allow = true 
let raid_time = -1	
// тестовая команда			
let test = require("./data/twitchbot/test.js")
let tt = new test()

// чат
let chans = require("./data/users/chans.js")
let C = new chans()
let B = require("./data/users/ban.json")
let D = require("./data/users/database.json")
let admin = require("./data/twitchbot/admin.js")
let Adm = new admin()
let collection = require("./data/twitchgame/collection.js")
let Cl = new collection()
let name = require("./data/twitchgame/name.js")
let N = new name()
let search = require("./data/twitchgame/search.js")
let S = new search()
let profile = require("./data/twitchgame/profile.js")
let P = new profile()
let raid_apply = require("./data/twitchgame/raid_apply.js")
let RA = new raid_apply()
let switch1 = require("./data/twitchgame/switch.js")
let Sw = new switch1()
let kazi = new Set()
let kys = new Set()
let time = require("./data/twitchbot/time.js")
let tim = new time()

function replacer(key,value){return value}

client.on('join', function (channel, user, message, self) {J.func(user,channel)})

client.on('part', function (channel, user, message, self) {Pt.func(user,channel)})

client.on('connected', function(address, port) {

	try{	  

		Cf.func()

		for(let i = 0; i < Adv.adventure.length; i++){
			let useradv = Adv.adventure[i]
			if(T[useradv] && T[useradv].adventure != 0 && adventure.lastIndexOf(useradv) === -1){
				if(T[useradv].adventure <= 0){
					T[useradv].adventure = 1
					T[useradv].time = 1
					T[useradv].chat = T[useradv].channel
				}
				adventure.push(Adv.adventure[i])

				fs.writeFileSync("./data/users/adventure.json", JSON.stringify(Adv, replacer, "\t"), (err) => {if(err) console.log(err)})			
			}		
		}  

		// ТАЙМЕР
		setInterval(function(){

			// ПУТЕШЕСТВИЕ 
			uptime++

			// ДЛЯ ADVENTURE.JSON
			/*
			{
			"allow": true,
			"adventure": []
			}
			*/

			// функция резервного копирования базы данных
			try{
				if(uptime % 45 === 0){
					reserve_t = T
					fs.writeFileSync("./data/users/reserve_twitchfile.json", JSON.stringify(reserve_t, replacer, "\t"), (err) => {if(err) console.log(err)})	
					console.log(`. . . . . ./nКопирование данных/n. . . . . .`)
				}
				}
				catch(err){
				console.log(`Error 3.1: «Ошибка сохранения» ` + err)
			}

			// функция получения опыта за поиск
			try{
				if(uptime % 10 === 0){console.log(adventure)} 
				function adverst(adver){
					let result = false
					if(T[adver].adventure != 0){result = true} 
					if(T[adver].adventure < 0){result = false} 
					return result
				}

				for(let i = 0; i < adventure.length; i++){
					if(T[adventure[i]]){
						let userad = adventure[i]
						T[userad].adventure--
						if(adventure.lastIndexOf(userad) != -1 && T[userad].adventure === 0){
							Adv.adventure = Adv.adventure.filter(adverst)
							adventure = adventure.filter(adverst)
							client.say(T[userad].channel, `${userad}, ${A.func(userad)}`)			
							console.log(adventure)
						}
						if(T[userad].adventure < 0){
							Adv.adventure = Adv.adventure.filter(adverst)
							adventure = adventure.filter(adverst)
						}

						fs.writeFileSync("./data/users/adventure.json", JSON.stringify(Adv, replacer, "\t"), (err) => {if(err) console.log(err)})	
						fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(T, replacer, "\t"), (err) => {if(err) console.log(err)}) 	

					}	
				}	

				}
				catch(err){
				console.log(`Error 3.2: «Ошибка функции получения опыта» ` + err)
			}

			// функция рейда
			try{
				if(raid_cooldown != 0) raid_cooldown--
				if(raid_time != -1) raid_time++
				if(raid_list.length === 2){
					for(let i = 0; i < raid_channel_list.length; i++){
						client.say(raid_channel_list[i], `Уведомление: Выдвигаемся за пожилым дедом через 1 минуту`)
					}
					raid_time = 0
					raid_allow = false
					raid_list = []
				}
				if(raid_time === 1){
					for(let i = 0; i < raid_channel_list.length; i++){
						client.say(raid_channel_list[i], `Уведомление: Вы одолели пожилого деда. Следующий рейд возможен через 2 часа`)
					}
					raid_allow = true
					raid_cooldown = 120
				}
				}
				catch(err){
				console.log(`Error 3.3: «Ошибка рейда» ` + err)
			}

		}, 60 * 1000) 


		// ОБЪЯВЛЕНИЕ
		for(let i = 0; i < options.channels.length; i++){
			//client.say(options.channels[i], `Бот подключился к чату! ["?старт" | "?гайд" | "?помощь"]`)
		}

		}
		catch(err){
		console.log(`Error 3: «Ошибка при подключении бота» ` + err)
	}  
})

client.on('chat', function(channel, user, message, self) {

	//try{
		//----------------------------------------ПЕРЕМЕННЫЕ---------------------------------------

		var user = user['display-name']

		let chan = C.chanf(user, channel)
		let chat = C.chatf(user, channel)

		let messageArray = message.split(" ")
		let command = messageArray[0].toLowerCase()
		let args = messageArray.slice(1) 

		//-------------------------------------РЕГИСТРАЦИЯ--------------------------------------------
/*
		if(!T[user] && (message == `?старт` || message == `?start`)){
			T[user] = {
				user: user,
				adventure: 0,
				pet: "Пусто",
			}

			if(D.database.lastIndexOf(user) === -1){D.database.push(user)} 
			fs.writeFileSync("./data/users/database.json", JSON.stringify(D, replacer, "\t"), (err) => {if(err) console.log(err)})
			fs.writeFileSync("./data/users/twitchfile.json", JSON.stringify(T, replacer, "\t"), (err) => {if(err) console.log(err)})
			client.say(channel, `${user} начинает свое путешествие`)
		}

		//------------------------------------------------------------------------------------------

		if(T[user]){

			let data = new Date()
			T[user].channel = channel

			//------------------------------------------------------------------------------------------

			switch(command){ 
				case '?админ':
					if(`#${user.toLowerCase()}` != channel) return
					client.say(channel, `${Adm.func(user,args)}`)
				break 
				case '?коллекция':
					client.say(channel, `${Cl.func(user,args,chat)}`)
				break
				case '?name':
				case '?назвать':
					client.say(channel, `${N.func(user,args,chat)}`)
				break
				case '?поиск':
					if(args[0] === `время`) return client.say(channel, `Возвращение через ${T[user].adventure} мин.`)
					if(adventure.lastIndexOf(user) === -1) adventure.push(user)
					if(Adv.adventure.lastIndexOf(user) === -1){
						Adv.adventure.push(user)
					fs.writeFileSync("./data/users/adventure.json", JSON.stringify(Adv, replacer, "\t"), (err) => {if(err) console.log(err)})
					}
					client.say(channel, `${S.func(user,args,channel,chat)}`)
				break  
				case '?help':
				case '?помощь':
					let botv = require("./data/twitchbot/botv.js")
					let B = new botv(user,chat)
					client.say(channel, `${B.help}`)
				break
				case '?help2':
				case '?помощь2':
					let botv2 = require("./data/twitchbot/botv.js")
					let B2 = new botv2(user,chat)
					client.say(channel, `${B2.help2}`)
				break
				case '?profile':
				case '?профиль':
					client.say(channel, `${P.func(user,chat)}`)
				break 	
				case '?raid':
				case '?рейд':
					if(raid_channel != channel || raid_list.lastIndexOf(user) != -1 || 
					T[user].pet === undefined || T[user].pet === "Пусто") return
					if(raid_list.lastIndexOf(user) === -1) raid_list.push(user)
					client.say(channel, `${RA.func(user,chat,raid_list,raid_lvl)}`)
				break
				case '?сменить':
					client.say(channel, `${Sw.func(user,args,chat)}`)
				break 

			}
		}
*/
		switch(command){
			/*case '?гайд':
				let botv3 = require("./data/twitchbot/botv.js")
				let B3 = new botv3(user,chat)
				client.say(channel, `${B3.guid}`)
			break
			case '?время': 
				client.say(channel, `${user}, ${tim.func(uptime)}`)
			break
			case '?бот':
				let botv = require("./data/twitchbot/botv.js")
				let B = new botv()
				client.say(channel, `Ответ для ${user}: ${B.otvet}`)
			break
			case '?слоты': 
				let kazino = require("./data/twitchbot/kazino.js")
				let kaz = new kazino(user,args) 
				if(!kazi.has(channel)){kazi.add(channel)                 
				client.say(channel, `${kaz.otvet} , ${user}`)   
				setTimeout(() => {kazi.delete(channel)}, 2 * 60 * 1000)}
			break
			case '?кусь':
				let kus = require("./data/twitchbot/kus.js")
				let k = new kus(user,chan)
				if(!kys.has(channel)){kys.add(channel) 
				client.say(channel, `${k.otvet}`)
				setTimeout(() => {kys.delete(channel)}, 15 * 1000 )}
			break
			case '?процент':
				let procent = require("./data/twitchbot/procent.js")
				let proc = new procent()
				client.say(channel, `${user}, ${proc.otvet}`)
			break */				
			case '?рейд':
				if(raid_list.length === 2 || raid_cooldown != 0 || raid_allow === false || raid_list.lastIndexOf(user) != -1) return
				if(raid_list.lastIndexOf(user) === -1) raid_list.push(user)
				if(raid_channel_list.lastIndexOf(channel) === -1) raid_channel_list.push(channel)
				client.say(channel, `В рейде ${raid_list.length} чел., необходимо еще ${2 - raid_list.length} чел.`)
			break
			case '?тест':
				client.say(channel, `${user}, ${tt.func()}`)
			break   
		}

	/*}
	catch(err){
		console.log(`Error 4: «Ошибка чата» ` + err)
	}*/
})

client.on('subscription', function(channel, username, methods, msg, userstate){client.say(channel, `${username} спасибо за подписку sorkewEz`)})

client.on('resub', function(channel, username, streakMonths, msg, userstate, methods){client.say(channel, `${username} спасибо за переподписку sorkewEz`)})

client.on('subgift', function(channel, username, streakMonths, recipient, methods, userstate){client.say(channel, `${username} спасибо за подарок sorkewEz`)})

client.connect()
