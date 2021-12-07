function raid_pets(){

	this.func = function(user,arg){
		
		this.T = require("../users/twitchfile.json")
		this.user = this.T[user]
		
		this.collection_pet = [	// S o r k e w
								this.user.pet0,this.user.pet1,this.user.pet2,this.user.pet3,this.user.pet4,
								this.user.pet5,this.user.pet6,this.user.pet7,this.user.pet8,this.user.pet9,
								//	T a m a R i x
								this.user.pet10,this.user.pet11,this.user.pet12,this.user.pet13,this.user.pet14,
								this.user.pet15,this.user.pet16,this.user.pet17,this.user.pet18,this.user.pet19,
								//	M o R o Z _ 5 4 9
								this.user.pet20,this.user.pet21,this.user.pet22,this.user.pet23,this.user.pet24,
								this.user.pet25,this.user.pet26,this.user.pet27,this.user.pet28,this.user.pet29,
								//	A n y a _ V e t o c h k a
								this.user.pet30,this.user.pet31,this.user.pet32,this.user.pet33,this.user.pet34,
								this.user.pet35,this.user.pet36,this.user.pet37,this.user.pet38,this.user.pet39,
								//	k o s f a t o n
								this.user.pet40,this.user.pet41,this.user.pet42,this.user.pet43,this.user.pet44,
								this.user.pet45,this.user.pet46,this.user.pet47,this.user.pet48,this.user.pet49]
	
		if(arg === `lvl`){
			
			this.collection_lvl = [	// S o r k e w
									this.user.lvl0,this.user.lvl1,this.user.lvl2,this.user.lvl3,this.user.lvl4,
									this.user.lvl5,this.user.lvl6,this.user.lvl7,this.user.lvl8,this.user.lvl9,
									//	T a m a R i x
									this.user.lvl10,this.user.lvl11,this.user.lvl12,this.user.lvl13,this.user.lvl14,
									this.user.lvl15,this.user.lvl16,this.user.lvl17,this.user.lvl18,this.user.lvl19,
									//	M o R o Z _ 5 4 9
									this.user.lvl20,this.user.lvl21,this.user.lvl22,this.user.lvl23,this.user.lvl24,
									this.user.lvl25,this.user.lvl26,this.user.lvl27,this.user.lvl28,this.user.lvl29,
									//	A n y a _ V e t o c h k a
									this.user.lvl30,this.user.lvl31,this.user.lvl32,this.user.lvl33,this.user.lvl34,
									this.user.lvl35,this.user.lvl36,this.user.lvl37,this.user.lvl38,this.user.lvl39,
									//	k o s f a t o n
									this.user.lvl40,this.user.lvl41,this.user.lvl42,this.user.lvl43,this.user.lvl44,
									this.user.lvl45,this.user.lvl46,this.user.lvl47,this.user.lvl48,this.user.lvl49]
		
			this.pet = this.collection_pet.lastIndexOf(this.user.pet)
			this.pet_lvl = this.collection_lvl[this.pet]
			return this.pet_lvl
		}
		if(arg === `rare`){
			
			this.collection_rare = [// S o r k e w
									this.user.petrare0,this.user.petrare1,this.user.petrare2,this.user.petrare3,this.user.petrare4,
									this.user.petrare5,this.user.petrare6,this.user.petrare7,this.user.petrare8,this.user.petrare9,
									//	T a m a R i x
									this.user.petrare10,this.user.petrare11,this.user.petrare12,this.user.petrare13,this.user.petrare14,
									this.user.petrare15,this.user.petrare16,this.user.petrare17,this.user.petrare18,this.user.petrare19,
									//	M o R o Z _ 5 4 9
									this.user.petrare20,this.user.petrare21,this.user.petrare22,this.user.petrare23,this.user.petrare24,
									this.user.petrare25,this.user.petrare26,this.user.petrare27,this.user.petrare28,this.user.petrare29,
									//	A n y a _ V e t o c h k a
									this.user.petrare30,this.user.petrare31,this.user.petrare32,this.user.petrare33,this.user.petrare34,
									this.user.petrare35,this.user.petrare36,this.user.petrare37,this.user.petrare38,this.user.petrare39,
									//	k o s f a t o n
									this.user.petrare40,this.user.petrare41,this.user.petrare42,this.user.petrare43,this.user.petrare44,
									this.user.petrare45,this.user.petrare46,this.user.petrare47,this.user.petrare48,this.user.petrare49]
									
			this.pet = this.collection_pet.lastIndexOf(this.user.pet)
			this.pet_rare = this.collection_rare[this.pet]
			return this.pet_rare
			
		}
		
	}
	  
}

module.exports = raid_pets
